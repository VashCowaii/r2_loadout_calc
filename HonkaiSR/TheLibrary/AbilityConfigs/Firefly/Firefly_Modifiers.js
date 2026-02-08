const configAbility = {
  "fileName": "Firefly_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-340351438\">Sam_PassiveAbility_RedMode_DisableUltraSkill</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1084322434\">Sam_ActionBarPreShow</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_SamSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SamActionDelay",
              "value": {
                "operator": "Constants[0] (1000) || Variables[0] (_SamSpeed) || DIV || RETURN",
                "displayLines": "(1000 / _SamSpeed)",
                "constants": [
                  1000
                ],
                "variables": [
                  "_SamSpeed"
                ]
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"92987575\">Sam_PassiveAbility01_BattleEvent</a>"
                    }
                  }
                ]
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"92987575\">Sam_PassiveAbility01_BattleEvent</a>"
                        }
                      }
                    ]
                  },
                  "variableName": "_BEActionDelay",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SamActionDelay",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (_BEActionDelay) || RETURN",
                      "displayLines": "_BEActionDelay",
                      "constants": [],
                      "variables": [
                        "_BEActionDelay"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Action Bar Display",
                      "triggerName": "Status_Status2",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"92987575\">Sam_PassiveAbility01_BattleEvent</a>"
                            }
                          }
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__881956526\">Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]",
      "stackType": "ReplaceByCaster",
      "description": "The \"From Shattered Sky, I Free Fall\" effect cannot be triggered yet.",
      "type": "Other",
      "statusName": "From Shattered Sky, I Free Fall"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__539387692\">Sam_Eidolon2_BonusCD_LuoJi</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "assignState": "True",
              "priorState": "CoolDown",
              "bar#": 1,
              "cooldown": {
                "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(Rank02_CD - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Rank02_CD"
                ]
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1135525513\">Sam_Eidolon4_Endurance</a>",
      "counter": 2,
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "EnduranceEnemyOnly"
      ],
      "execute": [
        {
          "eventTrigger": "Debuff Immunity[?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "flagName": "STAT_CTRL"
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": -1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__64395692\">Sam_Ultimate_BreakDamageAddRatio</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Break DMG"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2077791877\">Sam_ForceStanceDamage</a>",
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.55) || RETURN",
                "displayLines": "0.55",
                "constants": [],
                "variables": [
                  0.55
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
      "for": "<a class=\"gModGreen\" id=\"mod__154726309\">Sam_Eidolon6_UltraDamageTypeAddRatio</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;",
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
      "description": "Fire RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Fire RES PEN Boost",
      "statusName": "In Finalized Morrow, I Full Bloom"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__100735339\">Sam_PointB2_SuperBreakBonus</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (3.6) || RETURN",
                  "displayLines": "3.6",
                  "constants": [],
                  "variables": [
                    3.6
                  ]
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"795502164\">DealSuperBreakDamage</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "variables": {
                    "value_0_DamagePercentage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"795502164\">DealSuperBreakDamage</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (0.35) || RETURN",
                          "displayLines": "0.35",
                          "constants": [],
                          "variables": [
                            0.35
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": 100
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__639093534\">Sam_Ability21_FireWeakType</a>[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Fire"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Implanted with extra Fire Weakness.",
      "type": "Debuff",
      "effectName": "Implant Weakness: Fire",
      "statusName": "Extra Fire Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Mitigation",
      "statusName": "Chrysalid Pyronexus"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
      "stackType": "ReplaceByCaster",
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
              "abilityName": "Basic ATK"
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
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Hide",
              "abilityName": "Skill"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank02_CD",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Disable",
                  "bar#": 1,
                  "cooldown": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_RedModeResRatio",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"154726309\">Sam_Eidolon6_UltraDamageTypeAddRatio</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"881956526\">Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_HPRatioCurrent"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PassiveResRatio",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (0.2) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                    "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_HPRatioCurrent",
                      0.2,
                      "_RedModeResRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.4) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                      "displayLines": "(0.4 * _PassiveResRatio)",
                      "constants": [],
                      "variables": [
                        0.4,
                        "_PassiveResRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank02_CD",
                  "value": {
                    "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(Rank02_CD - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Rank02_CD"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Rank02_CD",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "CoolDown",
                      "bar#": 1,
                      "cooldown": {
                        "operator": "Variables[0] (Rank02_CD) || RETURN",
                        "displayLines": "Rank02_CD",
                        "constants": [],
                        "variables": [
                          "Rank02_CD"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 1,
                      "cooldown": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"881956526\">Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                      "value": "(0.5 + Rank06_StanceBreakAddedRatio)"
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
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
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
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 1,
                  "cooldown": 0
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
              "name": "Define Custom Variable",
              "variableName": "_RedModeResRatio",
              "value": 1
            },
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_HPRatioCurrent"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_PassiveResRatio",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (0.2) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "_HPRatioCurrent",
                  0.2,
                  "_RedModeResRatio"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.4) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                  "displayLines": "(0.4 * _PassiveResRatio)",
                  "constants": [],
                  "variables": [
                    0.4,
                    "_PassiveResRatio"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_BreakDamageAddedRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
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
                  "variableName": "MDF_FinalDamageUP",
                  "value": {
                    "operator": "Variables[0] (0.5) || Variables[1] (0.5) || ADD || RETURN",
                    "displayLines": "(0.5 + 0.5)",
                    "constants": [],
                    "variables": [
                      0.5,
                      0.5
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FinalDamageUP",
                  "value": {
                    "operator": "Variables[0] (0.5) || RETURN",
                    "displayLines": "0.5",
                    "constants": [],
                    "variables": [
                      0.5
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUP) || RETURN",
                "displayLines": "MDF_SpeedUP",
                "constants": [],
                "variables": [
                  "MDF_SpeedUP"
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
                  "variableName": "MDF_StatusResistance",
                  "value": {
                    "operator": "Variables[0] (MDF_StatusResistance) || Variables[1] (0.5) || ADD || RETURN",
                    "displayLines": "(MDF_StatusResistance + 0.5)",
                    "constants": [],
                    "variables": [
                      "MDF_StatusResistance",
                      0.5
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                    "displayLines": "MDF_StatusResistance",
                    "constants": [],
                    "variables": [
                      "MDF_StatusResistance"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                    "displayLines": "MDF_StatusResistance",
                    "constants": [],
                    "variables": [
                      "MDF_StatusResistance"
                    ]
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"154726309\">Sam_Eidolon6_UltraDamageTypeAddRatio</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
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
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Rank02_CD",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill11",
                      "Skill21"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank02_CD",
                  "value": {
                    "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || ADD || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "((Rank02_CD + 1) + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Rank02_CD",
                      1
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank02_SamSelfInsertActionFlag",
                  "value": 1
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Sam_Eidolon2_Bonus",
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || SUB || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "((Rank02_CD - 1) - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD",
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 0
                    }
                  ]
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Rank02_CD",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill11",
                      "Skill21"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank02_CD",
                  "value": {
                    "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || ADD || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "((Rank02_CD + 1) + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Rank02_CD",
                      1
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank02_SamSelfInsertActionFlag",
                  "value": 1
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Sam_Eidolon2_Bonus",
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || SUB || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "((Rank02_CD - 1) - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD",
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Rank02_CD",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill11",
                      "Skill21"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank02_CD",
                  "value": {
                    "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || ADD || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "((Rank02_CD + 1) + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Rank02_CD",
                      1
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank02_SamSelfInsertActionFlag",
                  "value": 1
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Sam_Eidolon2_Bonus",
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || SUB || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "((Rank02_CD - 1) - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD",
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 0
                    }
                  ]
                }
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Rank02_SamSelfInsertActionFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Sam_Eidolon2_Bonus"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Rank02_SamSelfInsertActionFlag",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 1,
                  "cooldown": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"881956526\">Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"539387692\">Sam_Eidolon2_BonusCD_LuoJi</a>"
                },
                {
                  "name": "UI Display Event",
                  "popUpText": "From Shattered Sky, I Free Fall"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Sound stuff nobody cares about"
        },
        {
          "eventTrigger": "Sound stuff nobody cares about"
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Module β: Autoreactive Armor"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"100735339\">Sam_PointB2_SuperBreakBonus</a>"
                    }
                  ]
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"100735339\">Sam_PointB2_SuperBreakBonus</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedUP",
        "MDF_StatusResistance",
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "When using Enhanced Basic ATK or Enhanced Skill, increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_FinalDamageUP</span> and increases the Break DMG dealt by SAM to the enemy targets by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUP</span>, and Effect RES by <span class=\"descriptionNumberColor\">MDF_StatusResistance</span>.",
      "type": "Other",
      "effectName": "Fyrefly Type-IV: Complete Combustion",
      "statusName": "Fyrefly Type-IV: Complete Combustion",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-340351438\">Sam_PassiveAbility_RedMode_DisableUltraSkill</a>",
          "aliveOnly": "True",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"100735339\">Sam_PointB2_SuperBreakBonus</a>",
          "aliveOnly": "True",
          "haloStatus": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Module β: Autoreactive Armor"
              },
              {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  ],
  "references": []
}