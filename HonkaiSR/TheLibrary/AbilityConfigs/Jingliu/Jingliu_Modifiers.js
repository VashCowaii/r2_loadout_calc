const configAbility = {
  "fileName": "Jingliu_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-44910835\">Advanced_Jingliu_MoonMad</a>[<span class=\"descriptionNumberColor\">Moonlight</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (0.44) || MUL || RETURN",
                "displayLines": "(MDF_Layer * 0.44)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  0.44
                ]
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || Variables[2] (0.2) || MUL || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValue + (MDF_Layer * 0.2))",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer",
                      0.2
                    ]
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
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Moonlight"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1453058731\">Advanced_Jingliu_LoseHPPreShow</a>",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Skill",
                        "Ultimate"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.05) || MUL || RETURN",
                        "displayLines": "(MDF_MaxHP * 0.05)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          0.05
                        ]
                      }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1354140510\">Advanced_Jingliu_Passive_CriticalUp</a>[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalRatio) || RETURN",
                "displayLines": "MDF_CriticalRatio",
                "constants": [],
                "variables": [
                  "MDF_CriticalRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_CriticalRatio</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "Spectral Transmigration"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__291641534\">Advanced_Jingliu_Trace_B1_Resist</a>[<span class=\"descriptionNumberColor\">Deathrealm</span>]",
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_PropertyValue2"
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
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
      "description": "Effect RES increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, and Ultimate DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "effectName": "Effect RES Boost",
      "statusName": "Deathrealm"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-284171684\">Advanced_Jingliu_Passive_ATK</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertCount",
                "typeValue": 1
              },
              "abilityName": "Advanced_Jingliu_PassiveAtkReady_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "AvatarBuffSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1877587463\">Advanced_Jingliu_Passive2</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__596888368\">AdvancedJingliu_PointB3</a>[<span class=\"descriptionNumberColor\">Frost Wraith</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Switch",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_PropertyValue)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Switch",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Switch",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Next attack ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of target's DEF.",
      "type": "Buff",
      "statusName": "Frost Wraith"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1784507575\">AdvancedJingliu_Attack_Transfer</a>",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-44910835\">Advanced_Jingliu_MoonMad</a>[<span class=\"descriptionNumberColor\">Moonlight</span>]"
            },
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
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Hide",
              "abilityName": "Skill"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-9916760\">Advanced_Jingliu_Eidolon6</a>[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]"
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
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase3"
                }
              ],
              "failed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"291641534\">Advanced_Jingliu_Trace_B1_Resist</a>[<span class=\"descriptionNumberColor\">Deathrealm</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-833990909\">Advanced_Jingliu_Trace_B2_SpeedUp</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1354140510\">Advanced_Jingliu_Passive_CriticalUp</a>[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]"
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
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Basic ATK"
              ]
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Skill"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-9916760\">Advanced_Jingliu_Eidolon6</a>[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]",
                  "valuePerStack": {
                    "MDF_IcePenetrate": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Deathrealm"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"291641534\">Advanced_Jingliu_Trace_B1_Resist</a>[<span class=\"descriptionNumberColor\">Deathrealm</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.35) || RETURN",
                      "displayLines": "0.35",
                      "constants": [],
                      "variables": [
                        0.35
                      ]
                    },
                    "MDF_PropertyValue2": {
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
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1354140510\">Advanced_Jingliu_Passive_CriticalUp</a>[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
              "valuePerStack": {
                "MDF_CriticalRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "conditions": {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (SkillP01_P2_HpConsumption) || RETURN",
                    "displayLines": "SkillP01_P2_HpConsumption",
                    "constants": [],
                    "variables": [
                      "SkillP01_P2_HpConsumption"
                    ]
                  },
                  "consumeFloor": 1
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
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill"
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
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Charm",
                "invertCondition": true
              },
              "passed": [
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
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Basic ATK"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "SkillP01_P1_HpConsumption",
        "SkillP01_P2_HpConsumption"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-9916760\">Advanced_Jingliu_Eidolon6</a>[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_IcePenetrate) || RETURN",
                "displayLines": "MDF_IcePenetrate",
                "constants": [],
                "variables": [
                  "MDF_IcePenetrate"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_IcePenetrate"
      ],
      "latentQueue": [],
      "description": "Ice RES PEN increases by <span class=\"descriptionNumberColor\">MDF_IcePenetrate</span>.",
      "type": "Buff",
      "effectName": "Ice RES PEN",
      "statusName": "Eclipse Hollows Corporeal Husk"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__57193716\">Advanced_Jingliu_Eidolon2</a>[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                  }
                ]
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by the next Enhanced Skill by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Crescent Shadows Qixing Dipper"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1838091998\">Advanced_Jingliu_Eidolon1_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Moon Crashes Tianguan Gate"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1877587463\">Advanced_Jingliu_Passive2</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Jingliu_FullMoonFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "skillOwner": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "QueuedUltimates",
                    "compareType": "=",
                    "value2": 0
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
                    "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                        "displayLines": "Jingliu_MoonFlag",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlag"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                        "displayLines": "Jingliu_MoonFlagMax",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlagMax"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Jingliu_FullMoonFlag",
                "compareType": "=",
                "value2": 0
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
                    "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                        "displayLines": "Jingliu_MoonFlag",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlag"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                        "displayLines": "Jingliu_MoonFlagMax",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlagMax"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Jingliu_FullMoonFlag",
                "compareType": "=",
                "value2": 0
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
                    "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                        "displayLines": "Jingliu_MoonFlag",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlag"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                        "displayLines": "Jingliu_MoonFlagMax",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlagMax"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                },
                "Modifier Deletes Itself"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Jingliu_FullMoonFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "UnOperable"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                        "displayLines": "Jingliu_MoonFlag",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlag"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                        "displayLines": "Jingliu_MoonFlagMax",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlagMax"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                },
                "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-908005903\">Advanced_Jingliu_Passive</a>",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action END Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Jingliu_MoonFlag",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                      "displayLines": "Jingliu_MoonFlagMax",
                      "constants": [],
                      "variables": [
                        "Jingliu_MoonFlagMax"
                      ]
                    }
                  },
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "includeNonTargets": true
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                        "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag",
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Jingliu_MoonFlag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag"
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
          "eventTrigger": "Action End [Anyone]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "scope": "TargetEntity",
              "variableName": "LoseHPTrigger"
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo"
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "LoseHPTrigger"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BeingAttack"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Battle Event",
                    "invertCondition": true
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
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "LoseHPTrigger",
                    "compareType": "=",
                    "value2": 1,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Jingliu_LoseHPCount",
                      "value": {
                        "operator": "Variables[0] (Jingliu_LoseHPCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Jingliu_LoseHPCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_LoseHPCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "BeingAttack",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "LoseHPTrigger",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Jingliu_LoseHPCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (20) || RETURN",
                          "displayLines": "20",
                          "constants": [],
                          "variables": [
                            20
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Jingliu_LoseHPCount",
                          "value": {
                            "operator": "Variables[0] (Jingliu_LoseHPCount) || Variables[1] (20) || SUB || RETURN",
                            "displayLines": "(Jingliu_LoseHPCount - 20)",
                            "constants": [],
                            "variables": [
                              "Jingliu_LoseHPCount",
                              20
                            ]
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
                            "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                          },
                          "passed": [
                            {
                              "name": "Adjust Variable Value",
                              "adjustmentType": "Add to Value (Default)",
                              "variableName": "Jingliu_FullMoonFlag",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Jingliu_FullMoonFlag",
                                "compareType": ">",
                                "value2": {
                                  "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                                  "displayLines": "Jingliu_FullMoonFlagMax",
                                  "constants": [],
                                  "variables": [
                                    "Jingliu_FullMoonFlagMax"
                                  ]
                                },
                                "contextScope": "ContextCaster"
                              },
                              "passed": [
                                {
                                  "name": "Adjust Variable Value",
                                  "adjustmentType": "Overwrite Value",
                                  "variableName": "Jingliu_FullMoonFlag",
                                  "on": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "value": {
                                    "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                                    "displayLines": "Jingliu_FullMoonFlagMax",
                                    "constants": [],
                                    "variables": [
                                      "Jingliu_FullMoonFlagMax"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (Jingliu_FullMoonFlag) || RETURN",
                                "displayLines": "Jingliu_FullMoonFlag",
                                "constants": [],
                                "variables": [
                                  "Jingliu_FullMoonFlag"
                                ]
                              },
                              "maximum": {
                                "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                                "displayLines": "Jingliu_FullMoonFlagMax",
                                "constants": [],
                                "variables": [
                                  "Jingliu_FullMoonFlagMax"
                                ]
                              },
                              "assignState": "True",
                              "priorState": "Active",
                              "bar#": 3,
                              "cooldown": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "Adjust Variable Value",
                              "adjustmentType": "Add to Value (Default)",
                              "variableName": "Jingliu_MoonFlag",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": 1
                            },
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                                "displayLines": "Jingliu_MoonFlag",
                                "constants": [],
                                "variables": [
                                  "Jingliu_MoonFlag"
                                ]
                              },
                              "maximum": {
                                "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                                "displayLines": "Jingliu_MoonFlagMax",
                                "constants": [],
                                "variables": [
                                  "Jingliu_MoonFlagMax"
                                ]
                              },
                              "assignState": "True",
                              "priorState": "Normal",
                              "bar#": 3,
                              "cooldown": 0
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"37722324\">Advanced_Jingliu_LoseHPCount</a>[<span class=\"descriptionNumberColor\">Crescent Transmigration</span>]",
                      "valuePerStack": {
                        "Jingliu_LoseHPCount": {
                          "operator": "Variables[0] (Jingliu_LoseHPCount) || RETURN",
                          "displayLines": "Jingliu_LoseHPCount",
                          "constants": [],
                          "variables": [
                            "Jingliu_LoseHPCount"
                          ]
                        }
                      }
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
                    "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-44910835\">Advanced_Jingliu_MoonMad</a>[<span class=\"descriptionNumberColor\">Moonlight</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BeingAttack",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "scope": "TargetEntity",
              "variableName": "LoseHPTrigger"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "scope": "TargetEntity",
              "variableName": "BeingAttack"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Jingliu_MoonFlag",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                      "displayLines": "Jingliu_MoonFlagMax",
                      "constants": [],
                      "variables": [
                        "Jingliu_MoonFlagMax"
                      ]
                    }
                  },
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "includeNonTargets": true
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                        "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag",
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Jingliu_MoonFlag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag"
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "scope": "TargetEntity",
              "variableName": "LoseHPTrigger"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "scope": "TargetEntity",
              "variableName": "BeingAttack"
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
                    "name": "Compare: Variable",
                    "value1": "Jingliu_MoonFlag",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                      "displayLines": "Jingliu_MoonFlagMax",
                      "constants": [],
                      "variables": [
                        "Jingliu_MoonFlagMax"
                      ]
                    }
                  },
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "includeNonTargets": true
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                        "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag",
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Jingliu_MoonFlag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag"
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
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
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
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "DisableAction"
                  }
                ]
              },
              "passed": [
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
                        "value1": "Jingliu_MoonFlag",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                          "displayLines": "Jingliu_MoonFlagMax",
                          "constants": [],
                          "variables": [
                            "Jingliu_MoonFlagMax"
                          ]
                        }
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Jingliu_MoonFlag",
                              2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Jingliu_MoonFlag"
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
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Jingliu_MoonFlag",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                      "displayLines": "Jingliu_MoonFlagMax",
                      "constants": [],
                      "variables": [
                        "Jingliu_MoonFlagMax"
                      ]
                    }
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                        "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag",
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Jingliu_MoonFlag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag"
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
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Jingliu_MoonFlag",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                      "displayLines": "Jingliu_MoonFlagMax",
                      "constants": [],
                      "variables": [
                        "Jingliu_MoonFlagMax"
                      ]
                    }
                  },
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "includeNonTargets": true
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-284171684\">Advanced_Jingliu_Passive_ATK</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                        "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag",
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_FullMoonFlag",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Jingliu_MoonFlag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Jingliu_MoonFlag"
                        ]
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
          "variableName": "Jingliu_MoonFlag",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"970052184\">Advanced_Jingliu_Transfer_PreShow</a>"
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"970052184\">Advanced_Jingliu_Transfer_PreShow</a>"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (Jingliu_MoonFlagMax) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Jingliu_MoonFlagMax + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Jingliu_MoonFlagMax"
                ]
              },
              "maxValue": 99,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Frost Wraith"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"596888368\">AdvancedJingliu_PointB3</a>[<span class=\"descriptionNumberColor\">Frost Wraith</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "Jingliu_MoonFlag",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                    "displayLines": "Jingliu_MoonFlagMax",
                    "constants": [],
                    "variables": [
                      "Jingliu_MoonFlagMax"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "Jingliu_FullMoonFlag",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Jingliu_FullMoonFlagMax + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Jingliu_FullMoonFlagMax"
                ]
              },
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Frost Wraith"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"596888368\">AdvancedJingliu_PointB3</a>[<span class=\"descriptionNumberColor\">Frost Wraith</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__970052184\">Advanced_Jingliu_Transfer_PreShow</a>",
      "stackData": [],
      "latentQueue": [
        "LoseHPTrigger",
        "BeingAttack"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Skill",
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (1) || INVERT || RETURN",
            "displayLines": "-1",
            "constants": [],
            "variables": [
              1
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__37722324\">Advanced_Jingliu_LoseHPCount</a>[<span class=\"descriptionNumberColor\">Crescent Transmigration</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "Jingliu_LoseHPCount"
      ],
      "latentQueue": [
        "LoseHPTrigger",
        "BeingAttack"
      ],
      "description": "Number of Ally HP losses: <span class=\"descriptionNumberColor\">Jingliu_LoseHPCount</span>.",
      "type": "Other",
      "statusName": "Crescent Transmigration"
    }
  ],
  "references": []
}