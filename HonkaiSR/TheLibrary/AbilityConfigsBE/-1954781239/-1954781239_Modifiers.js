const configAbility = {
  "fileName": "-1954781239_Modifiers",
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
      "for": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub2",
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
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub[<span class=\"descriptionNumberColor\">Free Writing</span>]",
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
                  "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub2"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0050_plus3_sub2"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0053",
        "DV_FantasticStory_PlusAbility_0052",
        "DV_FantasticStory_PlusAbility_0051"
      ],
      "description": "When attacking via using Ultimate, ignore the enemy targets' Weakness to deal Toughness Reduction.",
      "type": "Buff",
      "statusName": "Free Writing",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0050_plus2_sub[<span class=\"descriptionNumberColor\">Picturesque</span>]",
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
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "DV_FantasticStory_PlusAbility_0052_ADF_1"
                    },
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                      "value": "DV_FantasticStory_PlusAbility_0052_ADF_2"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0053",
        "DV_FantasticStory_PlusAbility_0052",
        "DV_FantasticStory_PlusAbility_0051"
      ],
      "description": "Follow-Up ATK DMG dealt increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0052_ADF_1</span>. Follow-Up ATKs' Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0052_ADF_2</span>.",
      "type": "Buff",
      "statusName": "Picturesque"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0050_plus1_sub2[<span class=\"descriptionNumberColor\">Arioso</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Break DMG"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "DV_FantasticStory_PlusAbility_0051_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0053",
        "DV_FantasticStory_PlusAbility_0052",
        "DV_FantasticStory_PlusAbility_0051"
      ],
      "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0051_ADF_1</span>.",
      "type": "Debuff",
      "effectName": "Arioso",
      "statusName": "Arioso"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0050_plus1_sub[<span class=\"descriptionNumberColor\">Arioso</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Damage Tags",
                "damageTag": [
                  "Super Break"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FeverBreakDmgFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DV_FeverBreakDmgFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DV_AttackCount",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_0051_ADF_2) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum + DV_FantasticStory_PlusAbility_0051_ADF_2)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_0050_CountSum",
                      "DV_FantasticStory_PlusAbility_0051_ADF_2"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FeverBreakDmgFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_AttackCount",
                  "value": 0
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
              "variableName": "DV_AttackCount",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0053",
        "DV_FantasticStory_PlusAbility_0052",
        "DV_FantasticStory_PlusAbility_0051"
      ],
      "description": "If Super Break DMG is dealt to enemies after using an attack, additionally charges Whimsicality by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0051_ADF_2</span> points.",
      "type": "Buff",
      "statusName": "Arioso"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0040_plus2_sub[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllMulti[?]</span>&nbsp;",
                      "value": "_DamageUpRatio"
                    }
                  ]
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
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_0042_ADF_2) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum + DV_FantasticStory_PlusAbility_0042_ADF_2)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_0040_CountSum",
                      "DV_FantasticStory_PlusAbility_0042_ADF_2"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "_DamageUpRatio"
      ],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0043",
        "DV_FantasticStory_PlusAbility_0042",
        "DV_FantasticStory_PlusAbility_0041"
      ],
      "description": "Increases DMG dealt by Ultimate by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0042_ADF_1</span>. After the Ultimate is cast, Whimsicality additionally gains <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0042_ADF_2</span> point(s) of Charge.",
      "type": "Buff",
      "effectName": "Ultimate DMG Boost",
      "statusName": "Ultimate DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0030_plus6_sub",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ],
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_DamageSum",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
                  "value": {
                    "operator": "Variables[0] (_DamageSum) || Variables[1] (_DamageSumRatio) || MUL || Variables[2] (DV_FantasticStory_BaseAbility_0030_DamageSum) || ADD || RETURN",
                    "displayLines": "((_DamageSum * _DamageSumRatio) + DV_FantasticStory_BaseAbility_0030_DamageSum)",
                    "constants": [],
                    "variables": [
                      "_DamageSum",
                      "_DamageSumRatio",
                      "DV_FantasticStory_BaseAbility_0030_DamageSum"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "_DamageSumRatio"
      ],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
        "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0036",
        "DV_FantasticStory_PlusAbility_0035",
        "DV_FantasticStory_PlusAbility_0034",
        "DV_FantasticStory_PlusAbility_0033",
        "DV_FantasticStory_PlusAbility_0032",
        "DV_FantasticStory_PlusAbility_0031"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
      "stackType": "ReplaceByCaster",
      "description": "This unit has <span class=\"descriptionNumberColor\">EntityStockSPForShow</span> points of extra Energy. This will be consumed first when using the Ultimate.",
      "type": "Other",
      "effectName": "Energy Overflow",
      "statusName": "Energy Overflow"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0030_plus5_AddStockedSP",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EntityStockSP",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                      "displayLines": "(EntityMaxSP - _CurrentSP)",
                      "constants": [],
                      "variables": [
                        "EntityMaxSP",
                        "_CurrentSP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || RETURN",
                        "displayLines": "EntityStockSP",
                        "constants": [],
                        "variables": [
                          "EntityStockSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityStockSP",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(EntityMaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "EntityMaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityStockSP",
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                        "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "EntityStockSP",
                          "EntityMaxSP",
                          "_CurrentSP"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                      "valuePerStack": {
                        "EntityStockSPForShow": {
                          "operator": "Variables[0] (EntityStockSP) || RETURN",
                          "displayLines": "EntityStockSP",
                          "constants": [],
                          "variables": [
                            "EntityStockSP"
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
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0034",
        "DV_FantasticStory_PlusAbility_0035"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0030_plus5_AddSP",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityCurrentSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityMaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityCurrentSP",
                  "value": {
                    "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (_AddSP) || Variables[2] (EntityMaxSP) || MUL || ADD || RETURN",
                    "displayLines": "(EntityCurrentSP + (_AddSP * EntityMaxSP))",
                    "constants": [],
                    "variables": [
                      "EntityCurrentSP",
                      "_AddSP",
                      "EntityMaxSP"
                    ]
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
                    "value1": "EntityCurrentSP",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (EntityMaxSP) || RETURN",
                      "displayLines": "EntityMaxSP",
                      "constants": [],
                      "variables": [
                        "EntityMaxSP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_AddSP) || Variables[1] (EntityMaxSP) || MUL || RETURN",
                        "displayLines": "(_AddSP * EntityMaxSP)",
                        "constants": [],
                        "variables": [
                          "_AddSP",
                          "EntityMaxSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valuePercent": 1,
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityStockSP",
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                        "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                        "constants": [],
                        "variables": [
                          "EntityStockSP",
                          "EntityCurrentSP",
                          "EntityMaxSP"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                      "valuePerStack": {
                        "EntityStockSPForShow": {
                          "operator": "Variables[0] (EntityStockSP) || RETURN",
                          "displayLines": "EntityStockSP",
                          "constants": [],
                          "variables": [
                            "EntityStockSP"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "EntityCurrentSP",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "_AddSP"
      ],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0034",
        "DV_FantasticStory_PlusAbility_0035"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010_plus6_sub",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - DV_FantasticStory_PlusAbility_0016_ADF_3)"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus6_ultraDmgUp[<span class=\"descriptionNumberColor\">Splash</span>]",
                  "duration": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0016_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0016_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0016_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "DmgAddedRatio": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0016_ADF_1) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0016_ADF_1",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0016_ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_0016",
        "DV_FantasticStory_PlusAbility_0014",
        "DV_FantasticStory_PlusAbility_0013",
        "DV_FantasticStory_PlusAbility_0012"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Is Part Of",
          "of": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Player Team Ability Target Lock}}"
          },
          "mustBeAlive2": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Constants[0] (0) || Variables[0] (DV_FantasticStory_PlusAbility_0016_ADF_3) || SUB || RETURN",
            "displayLines": "(0 - DV_FantasticStory_PlusAbility_0016_ADF_3)",
            "constants": [
              0
            ],
            "variables": [
              "DV_FantasticStory_PlusAbility_0016_ADF_3"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010_plus5_sub",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder and Adjacent Targets}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0015_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ReceiveDmgRatio": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_1) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0015_ADF_1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder and Adjacent Targets}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0015_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ReceiveDmgRatio": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_1) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0015_ADF_1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_0016",
        "DV_FantasticStory_PlusAbility_0014",
        "DV_FantasticStory_PlusAbility_0013",
        "DV_FantasticStory_PlusAbility_0012"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Current_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TotalDmgRatio",
              "value": {
                "operator": "Variables[0] (_Current_Layer) || Variables[1] (ReceiveDmgRatio) || MUL || RETURN",
                "displayLines": "(_Current_Layer * ReceiveDmgRatio)",
                "constants": [],
                "variables": [
                  "_Current_Layer",
                  "ReceiveDmgRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (TotalDmgRatio) || RETURN",
                "displayLines": "TotalDmgRatio",
                "constants": [],
                "variables": [
                  "TotalDmgRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "ReceiveDmgRatio"
      ],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_0012",
        "DV_FantasticStory_PlusAbility_0013",
        "DV_FantasticStory_PlusAbility_0014",
        "DV_FantasticStory_PlusAbility_0016"
      ],
      "description": "Increases DMG received by <span class=\"descriptionNumberColor\">TotalDmgRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Scalded"
    }
  ],
  "references": []
}