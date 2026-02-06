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
      "for": "Cyrene_Eidolon2_1",
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
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_Count) || Variables[1] (0.06) || MUL || RETURN",
                "displayLines": "(MDF_Count * 0.06)",
                "constants": [],
                "variables": [
                  "MDF_Count",
                  0.06
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_PropertyValue",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
                    ]
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
              "modifier": "Cyrene_Ability02_Bonus_Main[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
              "valuePerStack": {
                "MDF_OriginDamagePercentage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cyrene_PointB3_Sub3[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
                "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                "displayLines": "MDF_DamageIncrease",
                "constants": [],
                "variables": [
                  "MDF_DamageIncrease"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "statusName": "Causality in Trichotomy"
    },
    {
      "name": "Modifier Construction",
      "for": "Cyrene_PointB3_Sub2[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AddValue",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || PARAM_1 || FUNCTION || Variables[2] (0.02) || MUL || RETURN",
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(MDF_PropertyValue) * 0.02)",
                "constants": [],
                "variables": [
                  "FLOOR",
                  "MDF_PropertyValue",
                  0.02
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_AddValue) || RETURN",
                "displayLines": "_AddValue",
                "constants": [],
                "variables": [
                  "_AddValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "Ice RES PEN increases by <span class=\"descriptionNumberColor\">_AddValue</span>.",
      "type": "Buff",
      "statusName": "Causality in Trichotomy"
    },
    {
      "name": "Modifier Construction",
      "for": "ChrysosMark"
    },
    {
      "name": "Modifier Construction",
      "for": "Cyrene_PointB3",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Cyrene_PointB3_CheckSpeed"
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
                  "functionName": "Cyrene_PointB3_CheckSpeed"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Cyrene_PointB3_CheckSpeed"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Cyrene_PointB3_CheckSpeed"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Cyrene_PointB3_CheckSpeed"
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
      "for": "Cyrene_Passive_Sub[<span class=\"descriptionNumberColor\">Hearts Gather as One</span>]",
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
                "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                "displayLines": "MDF_DamageIncrease",
                "constants": [],
                "variables": [
                  "MDF_DamageIncrease"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageIncrease"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "statusName": "Hearts Gather as One"
    },
    {
      "name": "Modifier Construction",
      "for": "Cyrene_Ability03_Sub",
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
                "operator": "Variables[0] (MDF_CritChance) || RETURN",
                "displayLines": "MDF_CritChance",
                "constants": [],
                "variables": [
                  "MDF_CritChance"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cyrene_Ability03[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "FieldLifeTime",
              "value": -1
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
                "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                "constants": [],
                "variables": [
                  "CurSpecialSP",
                  "CurOverflowSpecialSP"
                ]
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
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
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
          "modifier": "Cyrene_Ability03_Sub",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_CritChance": {
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
      "name": "Modifier Construction",
      "for": "Cyrene_Ability02_Bonus[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
      "stackType": "ReplaceByCaster",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_originalDamage",
                  "value": "Result_FinalDamageBase",
                  "context": "ContextModifier"
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
                        "modifier": "Cyrene_Eidolon2_1"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Cyrene_Eidolon2_1",
                          "variable": "MDF_PropertyValue",
                          "target2": null,
                          "variable2": "MDF_ExtraDamagePercentage"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BasicDamagePercentage",
                      "value": {
                        "operator": "Variables[0] (MDF_OriginDamagePercentage) || Variables[1] (MDF_ExtraDamagePercentage) || ADD || RETURN",
                        "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_OriginDamagePercentage",
                          "MDF_ExtraDamagePercentage"
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "Damage": {
                          "operator": "Variables[0] (MDF_BasicDamagePercentage) || Variables[1] (_originalDamage) || MUL || RETURN",
                          "displayLines": "(MDF_BasicDamagePercentage * _originalDamage)",
                          "constants": [],
                          "variables": [
                            "MDF_BasicDamagePercentage",
                            "_originalDamage"
                          ]
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
                "modifier": "Cyrene_Eidolon2_1"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Cyrene_Eidolon2_1",
                  "variable": "MDF_PropertyValue",
                  "target2": null,
                  "variable2": "MDF_ExtraDamagePercentage"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BasicDamagePercentage",
              "value": {
                "operator": "Variables[0] (MDF_OriginDamagePercentage) || Variables[1] (MDF_ExtraDamagePercentage) || ADD || RETURN",
                "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)",
                "constants": [],
                "variables": [
                  "MDF_OriginDamagePercentage",
                  "MDF_ExtraDamagePercentage"
                ]
              }
            }
          ]
        }
      ],
      "description": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_BasicDamagePercentage</span> of the original DMG.",
      "type": "Buff",
      "statusName": "Bloom, Elysium of Beyond"
    },
    {
      "name": "Modifier Construction",
      "for": "Cyrene_Ability02_Bonus_Main[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_originalDamage",
                  "value": "Result_FinalDamageBase",
                  "context": "ContextModifier"
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
                        "modifier": "Cyrene_Eidolon2_1"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Cyrene_Eidolon2_1",
                          "variable": "MDF_PropertyValue",
                          "target2": null,
                          "variable2": "MDF_ExtraDamagePercentage"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BasicDamagePercentage",
                      "value": {
                        "operator": "Variables[0] (MDF_OriginDamagePercentage) || Variables[1] (MDF_ExtraDamagePercentage) || ADD || RETURN",
                        "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_OriginDamagePercentage",
                          "MDF_ExtraDamagePercentage"
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "Damage": {
                          "operator": "Variables[0] (MDF_BasicDamagePercentage) || Variables[1] (_originalDamage) || MUL || RETURN",
                          "displayLines": "(MDF_BasicDamagePercentage * _originalDamage)",
                          "constants": [],
                          "variables": [
                            "MDF_BasicDamagePercentage",
                            "_originalDamage"
                          ]
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
                "modifier": "Cyrene_Ability03[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
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
                "modifier": "Cyrene_Eidolon2_1"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Cyrene_Eidolon2_1",
                  "variable": "MDF_PropertyValue",
                  "target2": null,
                  "variable2": "MDF_ExtraDamagePercentage"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BasicDamagePercentage",
              "value": {
                "operator": "Variables[0] (MDF_OriginDamagePercentage) || Variables[1] (MDF_ExtraDamagePercentage) || ADD || RETURN",
                "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)",
                "constants": [],
                "variables": [
                  "MDF_OriginDamagePercentage",
                  "MDF_ExtraDamagePercentage"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_OriginDamagePercentage"
      ],
      "latentQueue": [],
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
          "modifier": "Cyrene_Ability02_Bonus[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_OriginDamagePercentage": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cyrene_Passive_Teamate_ThanksGift",
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
                "ID": 1415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cyrene"
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
                        "uniqueName": "Cyrene_TargetCount_{MDF_ID}",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Assign Unique Name",
                          "uniqueName": "Cyrene_TargetCount_{MDF_ID}",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
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
                          "variableName": "MDF_Switch",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Cyrene_Passive_Teamate[<span class=\"descriptionNumberColor\">Future</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Cyrene_ChargeEnergy",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                  "displayLines": "MDF_SPAdd",
                  "constants": [],
                  "variables": [
                    "MDF_SPAdd"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_Passive_Teamate_ThanksGift"
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
                    "type": "Memosprite"
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
              "functionName": "Cyrene_ChargeEnergy",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                  "displayLines": "MDF_SPAdd",
                  "constants": [],
                  "variables": [
                    "MDF_SPAdd"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_Passive_Teamate_ThanksGift"
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
                    "type": "Memosprite"
                  }
                ]
              },
              "failed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SPAdd"
      ],
      "latentQueue": [
        "MDF_FirstTimeMax"
      ],
      "description": "When taking action, grants Cyrene \"Recollection.\"",
      "type": "Other",
      "statusName": "Future"
    }
  ],
  "references": []
}