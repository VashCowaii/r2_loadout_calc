const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Jingliu",
  "trimCharacterName": "Jingliu",
  "abilityList": [
    "Jingliu_Modifiers",
    "Jingliu_LocalPlayer_StandardAbility_AttackBreak",
    "Jingliu_LocalPlayer_Jingliu_TechniqueUsage",
    "Jingliu_LocalPlayer_Jingliu_NormalAtk01",
    "Jingliu_Advanced_Jingliu_TechniqueInLevel",
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01",
    "Jingliu_Advanced_Jingliu_PassiveAbility01",
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Ability",
    "Jingliu_Advanced_Jingliu_Ability03_EnterReady",
    "Jingliu_Advanced_Jingliu_Ability03_Part02",
    "Jingliu_Advanced_Jingliu_Ability03_Part01",
    "Jingliu_Advanced_Jingliu_Ability02_Part02",
    "Jingliu_Advanced_Jingliu_Ability02_Part01",
    "Jingliu_Advanced_Jingliu_Ability01_Part02",
    "Jingliu_Advanced_Jingliu_Ability01_Part01"
  ],
  "abilityObject": {
    "Jingliu_Modifiers": {
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
          "for": "<a class=\"gModGreen\" id=\"mod__-999922107\">ADV_StageAbility_Maze_Jingliu3</a>",
          "counter": 1,
          "stackType": "Refresh",
          "modifierFlags": [
            "Freeze"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1457669525\">ADV_Modifier_Maze_JingliuMask2</a>",
          "stackType": "Refresh"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__179849979\">ADV_Modifier_Maze_JingliuMask</a>",
          "stackType": "Refresh"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1016699726\">ADV_StageAbility_Maze_Jingliu2</a>",
          "counter": 1,
          "stackType": "Merge",
          "modifierTasks": [
            {
              "name": "Overworld Snapshot Event",
              "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"179849979\">ADV_Modifier_Maze_JingliuMask</a>"
                    }
                  ]
                }
              ],
              "exit": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Team Leader",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"179849979\">ADV_Modifier_Maze_JingliuMask</a>"
                }
              ]
            }
          ],
          "onCreation": [
            {
              "name": "Create Overworld Entity",
              "summonID": 12121
            },
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1457669525\">ADV_Modifier_Maze_JingliuMask2</a>",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1457669525\">ADV_Modifier_Maze_JingliuMask2</a>",
                  "duration": 19.9
                }
              ]
            }
          ],
          "onRemoval": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1457669525\">ADV_Modifier_Maze_JingliuMask2</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier (OVERWORLD)",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"179849979\">ADV_Modifier_Maze_JingliuMask</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier (OVERWORLD)",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1457669525\">ADV_Modifier_Maze_JingliuMask2</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Team Leader",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"179849979\">ADV_Modifier_Maze_JingliuMask</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": null,
              "overworldID": 121201
            },
            {
              "name": "Remove Overworld Entity",
              "targetSummonEntity": {
                "name": "Add Target by Summoned Units",
                "targetSummoner": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "summonID": 12121
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1204404236\">ADV_StageAbility_Maze_Jingliu</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-44910835\">Advanced_Jingliu_MoonMad</a>[<span class=\"descriptionNumberColor\">Moonlight</span>]",
          "stackType": "Replace",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Moonlight",
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
                  "value": {
                    "displayLines": "(MDF_Layer * 0.44)"
                  },
                  "variableName": "MDF_PropertyValue"
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
                      "value": {
                        "displayLines": "(MDF_PropertyValue + (MDF_Layer * 0.2))"
                      },
                      "variableName": "MDF_PropertyValue"
                    }
                  ]
                },
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
                          "variableName": "MDF_MaxHP",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
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
                            "displayLines": "(MDF_MaxHP * 0.05)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1354140510\">Advanced_Jingliu_Passive_CriticalUp</a>[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_CriticalRatio</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Spectral Transmigration",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_CriticalRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__291641534\">Advanced_Jingliu_Trace_B1_Resist</a>[<span class=\"descriptionNumberColor\">Deathrealm</span>]",
          "description": "Effect RES increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, and Ultimate DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "effectName": "Effect RES Boost",
          "statusName": "Deathrealm",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
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
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_MaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
          "description": "Next attack ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of target's DEF.",
          "type": "Buff",
          "statusName": "Frost Wraith",
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
                  "value": 1,
                  "variableName": "_Switch"
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
          ]
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
                      "name": "Change Entity Turn-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase3"
                    }
                  ],
                  "failed": [
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
                          "displayLines": "0.3"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Change Entity Turn-State",
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
                          "displayLines": "0.35"
                        },
                        "MDF_PropertyValue2": {
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1354140510\">Advanced_Jingliu_Passive_CriticalUp</a>[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
                  "valuePerStack": {
                    "MDF_CriticalRatio": {
                      "displayLines": "0.5"
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
                      "variableName": "TargetMaxHp",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
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
                        "displayLines": "SkillP01_P2_HpConsumption"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-9916760\">Advanced_Jingliu_Eidolon6</a>[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]",
          "stackData": [
            "MDF_IcePenetrate"
          ],
          "description": "Ice RES PEN increases by <span class=\"descriptionNumberColor\">MDF_IcePenetrate</span>.",
          "type": "Buff",
          "effectName": "Ice RES PEN",
          "statusName": "Eclipse Hollows Corporeal Husk",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_IcePenetrate"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__57193716\">Advanced_Jingliu_Eidolon2</a>[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
          "description": "Increases DMG dealt by the next Enhanced Skill by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Crescent Shadows Qixing Dipper",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1838091998\">Advanced_Jingliu_Eidolon1_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
          "stackType": "ReplaceByCaster",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Moon Crashes Tianguan Gate",
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
                            "displayLines": "Jingliu_MoonFlag"
                          },
                          "maximum": {
                            "displayLines": "Jingliu_MoonFlagMax"
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
              "eventTrigger": "Turn [Owner]: Action-End Phase",
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
                            "displayLines": "Jingliu_MoonFlag"
                          },
                          "maximum": {
                            "displayLines": "Jingliu_MoonFlagMax"
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
                            "displayLines": "Jingliu_MoonFlag"
                          },
                          "maximum": {
                            "displayLines": "Jingliu_MoonFlagMax"
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
                            "displayLines": "Jingliu_MoonFlag"
                          },
                          "maximum": {
                            "displayLines": "Jingliu_MoonFlagMax"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-908005903\">Advanced_Jingliu_Passive</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: End Pre-action Phase",
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
                          "displayLines": "Jingliu_MoonFlagMax"
                        }
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
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
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)"
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
                            "displayLines": "(Jingliu_MoonFlag + 1)"
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
                  "variableName": "LoseHPTrigger",
                  "scope": "TargetEntity"
                }
              ]
            },
            {
              "eventTrigger": "Being Limbo [Owner]"
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
                      "variableName": "LoseHPTrigger",
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "variableName": "BeingAttack",
                      "scope": "TargetEntity"
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
                        "entityType": "Battle Event",
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
                          "value": {
                            "displayLines": "(Jingliu_LoseHPCount + 1)"
                          },
                          "variableName": "Jingliu_LoseHPCount"
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
                              "value": 1,
                              "variableName": "LoseHPTrigger"
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
                              "displayLines": "20"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(Jingliu_LoseHPCount - 20)"
                              },
                              "variableName": "Jingliu_LoseHPCount"
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
                                      "displayLines": "Jingliu_FullMoonFlagMax"
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
                                        "displayLines": "Jingliu_FullMoonFlagMax"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "displayLines": "Jingliu_FullMoonFlag"
                                  },
                                  "maximum": {
                                    "displayLines": "Jingliu_FullMoonFlagMax"
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
                                    "displayLines": "Jingliu_MoonFlag"
                                  },
                                  "maximum": {
                                    "displayLines": "Jingliu_MoonFlagMax"
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
                              "displayLines": "Jingliu_LoseHPCount"
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
                            "displayLines": "5"
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
                      "variableName": "BeingAttack",
                      "resetValue": 1,
                      "scope": "TargetEntity"
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
                  "variableName": "LoseHPTrigger",
                  "scope": "TargetEntity"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "BeingAttack",
                  "scope": "TargetEntity"
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
                          "displayLines": "Jingliu_MoonFlagMax"
                        }
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
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
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)"
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
                            "displayLines": "(Jingliu_MoonFlag + 1)"
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
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "LoseHPTrigger",
                  "scope": "TargetEntity"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "BeingAttack",
                  "scope": "TargetEntity"
                }
              ]
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
                          "displayLines": "Jingliu_MoonFlagMax"
                        }
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
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
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)"
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
                            "displayLines": "(Jingliu_MoonFlag + 1)"
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
                              "displayLines": "Jingliu_MoonFlagMax"
                            }
                          },
                          {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "includeUnselectable": true
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
                                "displayLines": "((Jingliu_MoonFlag + 1) + 2)"
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
                                "displayLines": "(Jingliu_MoonFlag + 1)"
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
              "eventTrigger": "Batch: Enemy Arrival",
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
                          "displayLines": "Jingliu_MoonFlagMax"
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
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)"
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
                            "displayLines": "(Jingliu_MoonFlag + 1)"
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
                          "displayLines": "Jingliu_MoonFlagMax"
                        }
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
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
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)"
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
                            "displayLines": "(Jingliu_MoonFlag + 1)"
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
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"970052184\">Advanced_Jingliu_Transfer_PreShow</a>"
                    }
                  ],
                  "leavingRange": [
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
                    "displayLines": "(Jingliu_MoonFlagMax + 1)"
                  },
                  "maxValue": 99,
                  "enteringRange": [
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
                              "displayLines": "0.25"
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
                        "displayLines": "Jingliu_MoonFlagMax"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "Jingliu_FullMoonFlag",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "(Jingliu_FullMoonFlagMax + 1)"
                  },
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
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
                              "displayLines": "0.25"
                            }
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
          "for": "<a class=\"gModGreen\" id=\"mod__970052184\">Advanced_Jingliu_Transfer_PreShow</a>",
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
                "displayLines": "-1"
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
    },
    "Jingliu_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Jingliu_LocalPlayer_StandardAbility_AttackBreak",
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
    "Jingliu_LocalPlayer_Jingliu_TechniqueUsage": {
      "fileName": "Jingliu_LocalPlayer_Jingliu_TechniqueUsage",
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
          "ID": "121202()",
          "duration": {
            "displayLines": "20"
          }
        },
        "Submit Technique Use"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Jingliu_LocalPlayer_Jingliu_NormalAtk01": {
      "fileName": "Jingliu_LocalPlayer_Jingliu_NormalAtk01",
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
    "Jingliu_Advanced_Jingliu_TechniqueInLevel": {
      "fileName": "Jingliu_Advanced_Jingliu_TechniqueInLevel",
      "childAbilityList": [
        "Jingliu_Advanced_Jingliu_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1289509358\">Technique_Jingliu_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1060785735\">Technique_Jingliu_Modifier_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL_Frozen_Effect",
            "STAT_CTRL_Frozen",
            "STAT_CTRL"
          ],
          "useEntitySnapshot": true,
          "description": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
          "type": "Debuff",
          "effectName": "Frozen",
          "statusName": "Frozen",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Is NOT in Auto-Battle State"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen_Effect",
                        "invertCondition": true
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "Modifier_Frozen_DamagePercentage"
                    },
                    "DamageFlat": {
                      "displayLines": "Modifier_Frozen_DamageValue"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Frozen"
                    }
                  ]
                },
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": {
                    "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_8[Freeze Delay, unassigned]"
                  },
                  "adjustmentType": "="
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
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1042369095\">Advanced_Jingliu_TechniqueUsage</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "Jingliu_MoonFlag",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "MDF_MazeMoonFlag"
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "Jingliu_MoonFlag"
                  },
                  "maximum": {
                    "displayLines": "Jingliu_MoonFlagMax"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1289509358\">Technique_Jingliu_Modifier</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1060785735\">Technique_Jingliu_Modifier_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "displayLines": "1"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "displayLines": "0.8"
                        }
                      }
                    }
                  ]
                },
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "15"
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1042369095\">Advanced_Jingliu_TechniqueUsage</a>",
                      "valuePerStack": {
                        "MDF_MazeMoonFlag": {
                          "displayLines": "1"
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
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01": {
      "fileName": "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Crescent Transmigration"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "Jingliu_MoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Jingliu_FullMoonFlag"
          },
          "maximum": {
            "displayLines": "Jingliu_FullMoonFlagMax"
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1784507575\">AdvancedJingliu_Attack_Transfer</a>",
          "valuePerStack": {
            "AbilityP01_P1_HpConsumption": {
              "displayLines": "0.3"
            },
            "AbilityP01_P2_HpConsumption": {
              "displayLines": "0.05"
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "parameter[0]_NormalizedValue": {
              "displayLines": "1"
            }
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Jingliu_Advanced_Jingliu_PassiveAbility01": {
      "fileName": "Jingliu_Advanced_Jingliu_PassiveAbility01",
      "childAbilityList": [
        "Jingliu_Advanced_Jingliu_PassiveAbility01",
        "Jingliu_Jingliu_Passive_Camera",
        "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01"
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
          "modifier": "<a class=\"gModGreen\" id=\"1453058731\">Advanced_Jingliu_LoseHPPreShow</a>"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_MoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "isReset": false
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_FullMoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
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
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Jingliu_FullMoonFlagMax + 1)"
              },
              "variableName": "Jingliu_FullMoonFlagMax"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "Jingliu_FullMoonFlagMax"
              },
              "variableName": "Jingliu_FullMoonFlagMax"
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
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "2"
          },
          "variableName": "Jingliu_MoonFlagMax"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Jingliu_MoonFlag"
          },
          "maximum": {
            "displayLines": "Jingliu_MoonFlagMax"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-908005903\">Advanced_Jingliu_Passive</a>"
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
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Ability": {
      "fileName": "Jingliu_Advanced_Jingliu_PassiveAtkReady_Ability",
      "childAbilityList": [
        "Jingliu_Advanced_Jingliu_PassiveAtkReady_Ability",
        "Jingliu_Jingliu_PassiveAtk_Camera"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1838091998\">Advanced_Jingliu_Eidolon1_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
              "duration": {
                "displayLines": "1"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.36"
                }
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "1.5"
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.75"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.8"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.75"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "1.5"
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.75"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.8"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.75"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "1.5"
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.75"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.8"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.75"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "1.5"
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.2,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.75"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.2,
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.8"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.2,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.75"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.2,
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-724768260\">Jingliu_Frozen_Perform</a>"
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Targets Adjacent(Blast)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-724768260\">Jingliu_Frozen_Perform</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-724768260\">Jingliu_Frozen_Perform</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-724768260\">Jingliu_Frozen_Perform</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "1.5"
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "0.75"
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "0.8"
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
                "Toughness": null,
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "0.75"
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_FullMoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "-1"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Jingliu_FullMoonFlag"
          },
          "maximum": {
            "displayLines": "Jingliu_FullMoonFlagMax"
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"57193716\">Advanced_Jingliu_Eidolon2</a>[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sword Champion"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "displayLines": "8"
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Jingliu_FullMoonFlag",
            "compareType": "=",
            "value2": 0
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-724768260\">Jingliu_Frozen_Perform</a>",
          "modifierFlags": [
            "STAT_AnimStop"
          ],
          "priority": 9,
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen_Effect",
                        "invertCondition": true
                      }
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL_Frozen",
                    "invertCondition": true
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Jingliu_Advanced_Jingliu_Ability03_EnterReady": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Jingliu_Advanced_Jingliu_Ability03_Part02": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability03_Part02",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1838091998\">Advanced_Jingliu_Eidolon1_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
              "duration": {
                "displayLines": "1"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.36"
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "1.8"
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "0.9"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null
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
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "0.8"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": null,
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "0.9"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End",
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
              "value": {
                "displayLines": "1"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Jingliu_FullMoonFlag",
                "compareType": ">",
                "value2": {
                  "displayLines": "Jingliu_FullMoonFlagMax"
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
                    "displayLines": "Jingliu_FullMoonFlagMax"
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "Jingliu_FullMoonFlag"
              },
              "maximum": {
                "displayLines": "Jingliu_FullMoonFlagMax"
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
              "value": {
                "displayLines": "1"
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "Jingliu_MoonFlag"
              },
              "maximum": {
                "displayLines": "Jingliu_MoonFlagMax"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        "Trigger: Skip Death Handling",
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
              "modifier": "<a class=\"gModGreen\" id=\"57193716\">Advanced_Jingliu_Eidolon2</a>[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.8"
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Skill Point User}}"
      }
    },
    "Jingliu_Advanced_Jingliu_Ability03_Part01": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability03_Part01",
      "childAbilityList": [
        "Jingliu_Jingliu_Ability03_Camera",
        "Jingliu_Advanced_Jingliu_Ability03_Part01",
        "Jingliu_Advanced_Jingliu_Ability03_Part02",
        "Jingliu_Advanced_Jingliu_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        20,
        0,
        20
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Advanced_Jingliu_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Skill Point User}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Jingliu_Advanced_Jingliu_Ability02_Part02": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_MoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "1"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Jingliu_MoonFlag"
          },
          "maximum": {
            "displayLines": "Jingliu_MoonFlagMax"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
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
                  "displayLines": "1.5"
                },
                "dmgFormula": "Max HP Scaling",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sword Champion"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "displayLines": "15"
              },
              "isFixed": "* ERR"
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
    "Jingliu_Advanced_Jingliu_Ability02_Part01": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability02_Part01",
      "childAbilityList": [
        "Jingliu_Jingliu_Ability02_Camera",
        "Jingliu_Advanced_Jingliu_Ability02_Part01",
        "Jingliu_Advanced_Jingliu_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 20,
      "toughnessList": [
        20,
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
          "ability": "Advanced_Jingliu_Ability02_Part02",
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
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Jingliu_Advanced_Jingliu_Ability01_Part02": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability01_Part02",
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
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Max HP Scaling",
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
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.7,
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
    "Jingliu_Advanced_Jingliu_Ability01_Part01": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability01_Part01",
      "childAbilityList": [
        "Jingliu_Jingliu_Ability01_Camera",
        "Jingliu_Advanced_Jingliu_Ability01_Part01",
        "Jingliu_Advanced_Jingliu_Ability01_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Advanced_Jingliu_Ability01_Part02",
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
        "primaryTarget": "Select Hostile Target"
      }
    }
  }
}