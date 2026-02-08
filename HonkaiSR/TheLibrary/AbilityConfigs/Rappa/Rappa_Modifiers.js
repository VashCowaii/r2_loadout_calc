const configAbility = {
  "fileName": "Rappa_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_CurrentLayer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_CurrentRatio",
              "value": {
                "operator": "Variables[0] (0.5) || Variables[1] (_CurrentLayer) || MUL || RETURN",
                "displayLines": "(0.5 * _CurrentLayer)",
                "constants": [],
                "variables": [
                  0.5,
                  "_CurrentLayer"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_CurrentValue",
              "value": {
                "operator": "Variables[0] (1) || Variables[1] (_CurrentLayer) || MUL || RETURN",
                "displayLines": "(1 * _CurrentLayer)",
                "constants": [],
                "variables": [
                  1,
                  "_CurrentLayer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The next time the third hit of \"Ningu: Demonbane Petalblade\" is launched, the additionally dealt Break DMG multiplier increases by <span class=\"descriptionNumberColor\">_CurrentRatio</span>, and the Toughness Reduction increases by <span class=\"descriptionNumberColor\">_CurrentValue</span>.",
      "type": "Buff",
      "statusName": "Ninja Tech: Endurance Gauge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1496582647\">Rappa_AbilityEidolon4</a>[<span class=\"descriptionNumberColor\">Lost Is the Nindō Devoured by Time</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_Ratio</span>.",
      "type": "Buff",
      "statusName": "Lost Is the Nindō Devoured by Time"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1412694552\">Rappa_AbilityEidolon1</a>[<span class=\"descriptionNumberColor\">Returned Is the Revenant With No Ferry Toll</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - SkillRank_Rank01_P1_Ratio)"
                }
              ]
            }
          ]
        }
      ],
      "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">SkillRank_Rank01_P1_Ratio</span> of the enemy targets' DEF. After exiting \"Sealform,\" regenerates <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P2_Value</span> Energy.",
      "type": "Buff",
      "statusName": "Returned Is the Revenant With No Ferry Toll"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-103751501\">Rappa_Ability03_Eidolon2_StanceDamagePreShow_Imaginary</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1369082619\">Rappa_Ability13_StanceDamagePreShow</a>",
              "invertCondition": true
            },
            {
              "name": "Is Part Of",
              "of": {
                "name": "Target Name",
                "target": "{{Player's Aim Primary-Target}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "mustBeAlive2": true
            }
          ]
        },
        "percent": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1369082619\">Rappa_Ability13_StanceDamagePreShow</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "Modifier: UI Preview",
              "show": "Hide",
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "toughnessType": "Imaginary",
              "baseToughnessDMG": {
                "operator": "Variables[0] (2) || Variables[1] (_PassiveBreakCountBase) || Variables[2] (DV_TempCount) || ADD || Variables[3] (1) || MUL || ADD || Constants[0] (3) || MUL || RETURN",
                "displayLines": "((2 + ((_PassiveBreakCountBase + DV_TempCount) * 1)) * 3)",
                "constants": [
                  3
                ],
                "variables": [
                  2,
                  "_PassiveBreakCountBase",
                  "DV_TempCount",
                  1
                ]
              },
              "toughnessForcedReductionPreview": 1,
              "isForcedReduction": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1932054955\">Rappa_Ability03_StanceDamagePreShow_NoImaginary</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
            }
          ]
        },
        "toughnessForcedReductionPreview": {
          "operator": "Variables[0] (P6_Real_Ratio) || RETURN",
          "displayLines": "P6_Real_Ratio",
          "constants": [],
          "variables": [
            "P6_Real_Ratio"
          ]
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1239346790\">Rappa_PointB3_Enemy</a>[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
      "stackType": "ReplaceByCaster",
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"615135704\">Rappa_PointB3_Enemy_Aura</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_TotalRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">MDF_TotalRatio</span>.",
      "type": "Debuff",
      "statusName": "Ninjutsu Inscription: Withered Leaf"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__615135704\">Rappa_PointB3_Enemy_Aura</a>",
      "stackType": "ReplaceByCaster",
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1239346790\">Rappa_PointB3_Enemy</a>[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
                    "justAddedOrActive": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "DV_TotalRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_TotalRatio",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (0.02) || ADD || RETURN",
                "displayLines": "(MDF_PropertyValue2 + 0.02)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue2",
                  0.02
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1239346790\">Rappa_PointB3_Enemy</a>[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_TotalRatio": {
                  "operator": "Variables[0] (DV_TotalRatio) || RETURN",
                  "displayLines": "DV_TotalRatio",
                  "constants": [],
                  "variables": [
                    "DV_TotalRatio"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1957135459\">Rappa_Trace03_Sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Multipler",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || Constants[0] (0.01) || MUL || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue * 0.01))",
                "constants": [
                  0.01
                ],
                "variables": [
                  "FLOOR",
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue2",
              "value": {
                "operator": "Variables[0] (MDF_Multipler) || Variables[1] (0.01) || MUL || RETURN",
                "displayLines": "(MDF_Multipler * 0.01)",
                "constants": [],
                "variables": [
                  "MDF_Multipler",
                  0.01
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_PropertyValue2",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.08) || RETURN",
                  "displayLines": "0.08",
                  "constants": [],
                  "variables": [
                    0.08
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__421544848\">Rappa_Trace03</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1198981265\">Rappa_Trace03_Sub</a>"
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1198981265\">Rappa_Trace03_Sub</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1198981265\">Rappa_Trace03_Sub</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentAttackReal",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_CurrentAttackReal",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (2400) || Constants[0] (100) || ADD || RETURN",
                  "displayLines": "(2400 + 100)",
                  "constants": [
                    100
                  ],
                  "variables": [
                    2400
                  ]
                }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1957135459\">Rappa_Trace03_Sub</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1957135459\">Rappa_Trace03_Sub</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_CurrentAttackReal) || Variables[1] (2400) || SUB || RETURN",
                          "displayLines": "(MDF_CurrentAttackReal - 2400)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentAttackReal",
                            2400
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1957135459\">Rappa_Trace03_Sub</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_CurrentAttackReal) || Variables[1] (2400) || SUB || RETURN",
                          "displayLines": "(MDF_CurrentAttackReal - 2400)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentAttackReal",
                            2400
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"615135704\">Rappa_PointB3_Enemy_Aura</a>",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1498869655\">Rappa_PointB2_Enemy</a>",
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
                "name": "Has DMG Instance Tag",
                "tag": "Rappa_UltraAttack_Damage"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalStanceDamage",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                  },
                  {
                    "name": "Has DMG Instance Tag",
                    "tag": "Rappa_UltraAttack_Damage"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"932403897\">BeingDealSuperBreakDamage</a>",
                  "variables": {
                    "value_0_DamagePercentage": {
                      "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                      "displayLines": "MDF_PropertyValue2",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue2"
                      ]
                    },
                    "StanceValue": {
                      "operator": "Variables[0] (MDF_TotalStanceDamage) || RETURN",
                      "displayLines": "MDF_TotalStanceDamage",
                      "constants": [],
                      "variables": [
                        "MDF_TotalStanceDamage"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Taking Toughness DMG [Owner]: Start",
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
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_ForceSuperBreakDamage"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_ForceSuperBreakDamage"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_HitStanceDamage",
                  "value": "ParamValue2"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalStanceDamage",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalStanceDamage) || Variables[1] (MDF_HitStanceDamage) || ADD || RETURN",
                    "displayLines": "(MDF_TotalStanceDamage + MDF_HitStanceDamage)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalStanceDamage",
                      "MDF_HitStanceDamage"
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__185730135\">Rappa_ForceStanceDamage_ForPassive</a>",
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
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2114229234\">Rappa_ForceStanceDamage</a>",
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
                "operator": "Variables[0] (P6_Real_Ratio) || RETURN",
                "displayLines": "P6_Real_Ratio",
                "constants": [],
                "variables": [
                  "P6_Real_Ratio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_AMMO_RELOADED"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1991409749\">Rappa_Explosive</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1328811210\">Rappa_UltraMode_BanSKL03_ForCaster</a>",
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
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTypes": [
                "Skill"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_AMMO_RELOADED"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (20) || RETURN",
                    "displayLines": "20",
                    "constants": [],
                    "variables": [
                      20
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
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
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "StanceBreakAddedRatioForShow",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                "displayLines": "MDF_PropertyValue2",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue2"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1932054955\">Rappa_Ability03_StanceDamagePreShow_NoImaginary</a>"
            },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-103751501\">Rappa_Ability03_Eidolon2_StanceDamagePreShow_Imaginary</a>"
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
                    "name": "Compare: Variable",
                    "value1": "_AMMO",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_AMMO_RELOADED",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_AR_STATE_LIFETIME) || RETURN",
                    "displayLines": "_AR_STATE_LIFETIME",
                    "constants": [],
                    "variables": [
                      "_AR_STATE_LIFETIME"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AMMO_RELOADED",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1328811210\">Rappa_UltraMode_BanSKL03_ForCaster</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_AR_STATE_LIFETIME",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1328811210\">Rappa_UltraMode_BanSKL03_ForCaster</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal"
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
                "name": "Compare: Variable",
                "value1": "_AMMO",
                "compareType": "=",
                "value2": 0
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
                      }
                    ]
                  },
                  "passed": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill11",
                      "skillSlot": "Basic ATK"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyValue2"
      ],
      "latentQueue": [
        "_AMMO_RELOADED"
      ],
      "description": "Increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "statusName": "Nindō Supreme: Aishiteru",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1498869655\">Rappa_PointB2_Enemy</a>",
          "haloStatus": true,
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Ninjutsu Inscription: Sea Echo"
          },
          "valuePerStack": {
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1412694552\">Rappa_AbilityEidolon1</a>[<span class=\"descriptionNumberColor\">Returned Is the Revenant With No Ferry Toll</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "valuePerStack": {
            "AbilityRank_Eidolon1_P1_Ratio": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1496582647\">Rappa_AbilityEidolon4</a>[<span class=\"descriptionNumberColor\">Lost Is the Nindō Devoured by Time</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          }
        }
      ]
    }
  ],
  "references": []
}