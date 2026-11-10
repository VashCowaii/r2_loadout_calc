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
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Memosprite",
        "toughnessForcedReductionPreview": {
          "displayLines": "CASTORICE_OBJECT_UNUSED_8"
        },
        "showAsForcedReduction": true
      },
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "onChange": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "CASTORICE_OBJECT_UNUSED_8"
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "statValue": {
                "displayLines": "CASTORICE_OBJECT_UNUSED_8"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1420894416\">Memosprite_CastoriceServant_Ability23Check</a>"
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1341939671\">Memosprite_CastoriceServant_Disable</a>",
      "stackType": "ReplaceByCaster",
      "latentQueue": [
        "CastoriceServant_BPSkill_Level"
      ],
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
      ]
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
      "description": "Triggers the Talent effect of \"Wings Sweep the Ruins\" the next time \"Breath Scorches the Shadow\" is used.",
      "type": "Other",
      "statusName": "Back to the Black",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
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
      ]
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
          "eventTrigger": "Was HP Overkilled [Owner]",
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
                        "displayLines": "(-MDF_OwnerDeltaHP * 5)"
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
              "variableName": "MDF_PreShowMaxHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
                        "displayLines": "MDF_PreShowMaxHP"
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
                        "displayLines": "(MDF_PreShowMaxHP * 0.25)"
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
                        "displayLines": "MDF_PreShowMaxHP"
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
                          "displayNum": {
                            "displayLines": "CastoriceServant_Rank02_Count"
                          },
                          "previewNum": {
                            "displayLines": "CastoriceServant_Rank02_Count"
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
                          "displayNum": {
                            "displayLines": "CastoriceServant_Rank02_Count"
                          },
                          "previewNum": 1
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
      "for": "<a class=\"gModGreen\" id=\"mod__-509656395\">Memosprite_CastoriceServant_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Roar Rumbles the Realm</span>]",
      "stackType": "Replace",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Roar Rumbles the Realm",
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
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}