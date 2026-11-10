const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": -1954781239,
  "trimCharacterName": -1954781239,
  "abilityList": [
    "-1954781239_Modifiers",
    "-1954781239_FantasticStory_PlusAbility_0053",
    "-1954781239_FantasticStory_PlusAbility_0052",
    "-1954781239_FantasticStory_PlusAbility_0051",
    "-1954781239_FantasticStory_BaseAbility_0050_Insert",
    "-1954781239_FantasticStory_BaseAbility_0050_Insert_Camera",
    "-1954781239_FantasticStory_BaseAbility_0050",
    "-1954781239_FantasticStory_PlusAbility_0043",
    "-1954781239_FantasticStory_PlusAbility_0042",
    "-1954781239_FantasticStory_PlusAbility_0041",
    "-1954781239_FantasticStory_BaseAbility_0040_Insert",
    "-1954781239_FantasticStory_BaseAbility_0040_Insert_Camera",
    "-1954781239_FantasticStory_BaseAbility_0040",
    "-1954781239_FantasticStory_PlusAbility_0036",
    "-1954781239_FantasticStory_PlusAbility_0035",
    "-1954781239_FantasticStory_PlusAbility_0034",
    "-1954781239_FantasticStory_PlusAbility_0033",
    "-1954781239_FantasticStory_PlusAbility_0032",
    "-1954781239_FantasticStory_PlusAbility_0031",
    "-1954781239_FantasticStory_PlusAbility_0031_Insert",
    "-1954781239_FantasticStory_BaseAbility_0030_Insert",
    "-1954781239_FantasticStory_BaseAbility_0030_Insert_Camera",
    "-1954781239_FantasticStory_BaseAbility_0030",
    "-1954781239_FantasticStory_PlusAbility_0028",
    "-1954781239_FantasticStory_PlusAbility_0027",
    "-1954781239_FantasticStory_PlusAbility_0026",
    "-1954781239_FantasticStory_PlusAbility_0025",
    "-1954781239_FantasticStory_PlusAbility_0024",
    "-1954781239_FantasticStory_PlusAbility_0023",
    "-1954781239_FantasticStory_PlusAbility_0022",
    "-1954781239_FantasticStory_PlusAbility_0021",
    "-1954781239_FantasticStory_BaseAbility_0020",
    "-1954781239_FantasticStory_PlusAbility_0018",
    "-1954781239_FantasticStory_PlusAbility_0017",
    "-1954781239_FantasticStory_PlusAbility_0016",
    "-1954781239_FantasticStory_PlusAbility_0015",
    "-1954781239_FantasticStory_PlusAbility_0014",
    "-1954781239_FantasticStory_PlusAbility_0013",
    "-1954781239_FantasticStory_PlusAbility_0012",
    "-1954781239_FantasticStory_PlusAbility_0011",
    "-1954781239_FantasticStory_BaseAbility_0010_Deathrattle_Camera",
    "-1954781239_Modifier_FantasticStory_BaseAbility_0010_Insert",
    "-1954781239_FantasticStory_BaseAbility_0010"
  ],
  "abilityObject": {
    "-1954781239_Modifiers": {
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
          "for": "<a class=\"gModGreen\" id=\"mod__1715545326\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub2</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-28797912\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub</a>[<span class=\"descriptionNumberColor\">Free Writing</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When attacking via using Ultimate, ignore the enemy targets' Weakness to deal Toughness Reduction.",
          "type": "Buff",
          "statusName": "Free Writing",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "showAsForcedReduction": true
          },
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
                      "modifier": "<a class=\"gModGreen\" id=\"1715545326\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub2</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1715545326\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub2</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__805201127\">Modifier_FantasticStory_BaseAbility_0050_plus2_sub</a>[<span class=\"descriptionNumberColor\">Picturesque</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Follow-Up ATK DMG dealt increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0052_ADF_1</span>. Follow-Up ATKs' Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0052_ADF_2</span>.",
          "type": "Buff",
          "statusName": "Picturesque",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__225763044\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Arioso</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0051_ADF_1</span>.",
          "type": "Debuff",
          "effectName": "Arioso",
          "statusName": "Arioso",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__937919550\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub</a>[<span class=\"descriptionNumberColor\">Arioso</span>]",
          "stackType": "ReplaceByCaster",
          "description": "If Super Break DMG is dealt to enemies after using an attack, additionally charges Whimsicality by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0051_ADF_2</span> points.",
          "type": "Buff",
          "statusName": "Arioso",
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
                      "value": 1,
                      "variableName": "DV_FeverBreakDmgFlag"
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
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum + DV_FantasticStory_PlusAbility_0051_ADF_2)"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "DV_FeverBreakDmgFlag"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "DV_AttackCount"
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
                  "variableName": "DV_AttackCount"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1558011426\">Modifier_FantasticStory_BaseAbility_0040_plus2_sub</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
          "stackType": "Replace",
          "description": "Increases DMG dealt by Ultimate by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0042_ADF_1</span>. After the Ultimate is cast, Whimsicality additionally gains <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0042_ADF_2</span> point(s) of Charge.",
          "type": "Buff",
          "effectName": "Ultimate DMG Boost",
          "statusName": "Ultimate DMG Boost",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
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
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum + DV_FantasticStory_PlusAbility_0042_ADF_2)"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1083847243\">Modifier_FantasticStory_BaseAbility_0030_plus6_sub</a>",
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
                      "variableName": "_DamageSum",
                      "scope": "ContextModifier",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((_DamageSum * _DamageSumRatio) + DV_FantasticStory_BaseAbility_0030_DamageSum)"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__639067431\">Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
          "stackType": "ReplaceByCaster",
          "description": "This unit has <span class=\"descriptionNumberColor\">EntityStockSPForShow</span> points of extra Energy. This will be consumed first when using the Ultimate.",
          "type": "Other",
          "effectName": "Energy Overflow",
          "statusName": "Energy Overflow"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1117415883\">Modifier_FantasticStory_BaseAbility_0030_plus5_AddStockedSP</a>",
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
                      "variableName": "_CurrentSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EntityStockSP",
                        "compareType": "<=",
                        "value2": {
                          "displayLines": "(EntityMaxSP - _CurrentSP)"
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
                            "displayLines": "EntityStockSP"
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "EntityStockSP"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"639067431\">Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
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
                            "displayLines": "(EntityMaxSP - _CurrentSP)"
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)"
                          },
                          "variableName": "EntityStockSP"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"639067431\">Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "displayLines": "EntityStockSP"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1329142430\">Modifier_FantasticStory_BaseAbility_0030_plus5_AddSP</a>",
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
                      "variableName": "EntityCurrentSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "EntityMaxSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(EntityCurrentSP + (_AddSP * EntityMaxSP))"
                      },
                      "variableName": "EntityCurrentSP"
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
                          "displayLines": "EntityMaxSP"
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
                            "displayLines": "(_AddSP * EntityMaxSP)"
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
                          "value": {
                            "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)"
                          },
                          "variableName": "EntityStockSP"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"639067431\">Modifier_FantasticStory_BaseAbility_0030_plus5_StockSPForShow</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "displayLines": "EntityStockSP"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "EntityCurrentSP"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1737739841\">Modifier_FantasticStory_BaseAbility_0010_plus6_sub</a>",
          "stackType": "ReplaceByCaster",
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
              "target1": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "target2": {
                "name": "Target Name",
                "target": "{{Player Team Ability Target Lock}}"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "displayLines": "(0 - DV_FantasticStory_PlusAbility_0016_ADF_3)"
              }
            }
          },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2046125016\">Modifier_FantasticStory_BaseAbility_0010_plus6_ultraDmgUp</a>[<span class=\"descriptionNumberColor\">Splash</span>]",
                      "duration": {
                        "displayLines": "DV_FantasticStory_PlusAbility_0016_ADF_2"
                      },
                      "valuePerStack": {
                        "DmgAddedRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0016_ADF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1440555734\">Modifier_FantasticStory_BaseAbility_0010_plus5_sub</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2"
                      },
                      "valuePerStack": {
                        "ReceiveDmgRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2"
                      },
                      "valuePerStack": {
                        "ReceiveDmgRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1"
                        }
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
          "stackType": "Replace",
          "stackData": [
            "ReceiveDmgRatio"
          ],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">TotalDmgRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Scalded",
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
                  "value": {
                    "displayLines": "(_Current_Layer * ReceiveDmgRatio)"
                  },
                  "variableName": "TotalDmgRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "displayLines": "TotalDmgRatio"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0053": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0053",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0053"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0052": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0052",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0052"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0052_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0052_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0051": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0051",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0051"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0051_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0051_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0050_Insert": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0050_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_BaseAbility_0050_CountSum",
            "compareType": ">=",
            "value2": {
              "displayLines": "(DV_RangeGap_3 * 2)"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_RangeGap_3 - 1)"
              },
              "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum - DV_RangeGap_3)"
              },
              "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum"
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "ADF_2_get"
          },
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "(TempHP_get * ADF_3_get)"
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_FantasticStory_BaseAbility_0050_Insert_Camera": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0050_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_FantasticStory_BaseAbility_0050": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0050",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0051",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0052",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0053",
          "scope": "ContextCaster"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(BattleEvent_BaseHP * 90)"
          },
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_1",
          "resetValue": {
            "displayLines": "(#ADF_1 * 0.33)"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_2",
          "resetValue": {
            "displayLines": "(#ADF_1 * 0.67)"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_3",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Start Battle Track Progress",
          "progress": 0,
          "count": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2041839191\">Modifier_FantasticStory_BaseAbility_0050</a>",
          "valuePerStack": {
            "ADF_1": {
              "displayLines": "#ADF_1"
            },
            "ADF_2": {
              "displayLines": "#ADF_2"
            },
            "ADF_3": {
              "displayLines": "#ADF_3"
            },
            "TempHP": {
              "displayLines": "BattleEvent_BaseHP"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1584027158\">Modifier_FantasticStory_BaseAbility_0050_sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum + 1)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2041839191\">Modifier_FantasticStory_BaseAbility_0050</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ADF_1",
            "ADF_2",
            "ADF_3",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0051",
            "DV_FantasticStory_PlusAbility_0052",
            "DV_FantasticStory_PlusAbility_0053",
            "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1584027158\">Modifier_FantasticStory_BaseAbility_0050_sub</a>"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0050_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0050_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1584027158\">Modifier_FantasticStory_BaseAbility_0050_sub</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0051",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"937919550\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub</a>[<span class=\"descriptionNumberColor\">Arioso</span>]"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0052",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"805201127\">Modifier_FantasticStory_BaseAbility_0050_plus2_sub</a>[<span class=\"descriptionNumberColor\">Picturesque</span>]"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0053",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-28797912\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub</a>[<span class=\"descriptionNumberColor\">Free Writing</span>]"
                        }
                      ]
                    }
                  ]
                },
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0051",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"225763044\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Arioso</span>]"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "FantasticStory_BaseAbility_0050_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "CharacterAttackFromSelf",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "TempHP_get": {
                                  "displayLines": "TempHP"
                                },
                                "ADF_2_get": {
                                  "displayLines": "ADF_2"
                                },
                                "ADF_3_get": {
                                  "displayLines": "ADF_3"
                                }
                              },
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0050_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            },
                            "ADF_3_get": {
                              "displayLines": "ADF_3"
                            }
                          },
                          "allowAbilityTriggers": false
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0051",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"937919550\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub</a>[<span class=\"descriptionNumberColor\">Arioso</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"225763044\">Modifier_FantasticStory_BaseAbility_0050_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Arioso</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0052",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"805201127\">Modifier_FantasticStory_BaseAbility_0050_plus2_sub</a>[<span class=\"descriptionNumberColor\">Picturesque</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0053",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-28797912\">Modifier_FantasticStory_BaseAbility_0050_plus3_sub</a>[<span class=\"descriptionNumberColor\">Free Writing</span>]"
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0050_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            },
                            "ADF_3_get": {
                              "displayLines": "ADF_3"
                            }
                          },
                          "allowAbilityTriggers": false
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
              "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "displayLines": "DV_RangeGap_1"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                      },
                      "count": {
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                      }
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                      },
                      "count": {
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_1"
                  },
                  "maxValue": {
                    "displayLines": "DV_RangeGap_2"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                      },
                      "count": {
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                      }
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                      },
                      "count": {
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_2"
                  },
                  "maxValue": {
                    "displayLines": "DV_RangeGap_3"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                      },
                      "count": {
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                      }
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1)"
                      },
                      "count": {
                        "displayLines": "((DV_FantasticStory_BaseAbility_0050_CountSum / #ADF_1) * 100)"
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_3"
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 1,
                      "count": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0050_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            },
                            "ADF_3_get": {
                              "displayLines": "ADF_3"
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 1,
                      "count": 100
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "-1954781239_FantasticStory_PlusAbility_0043": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0043",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0043"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0043_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0042": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0042",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0042"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0042_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0042_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0041": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0041",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0041"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0041_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0041_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0040_Insert": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0040_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_0041",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(ADF_2_get + DV_FantasticStory_PlusAbility_0041)"
              },
              "variableName": "ADF_2_get"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_BaseAbility_0040_CountSum",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(DV_RangeGap_3 * 2)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_RangeGap_3 - 1)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum - DV_RangeGap_3)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum"
                }
              ]
            },
            {
              "name": "Set Battle Track Progress",
              "progress": {
                "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))"
              },
              "count": {
                "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)"
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_BaseAbility_0040_CountSum",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(DV_RangeGap_3 * 2)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_RangeGap_3 - 1)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum - DV_RangeGap_3)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum"
                }
              ]
            },
            {
              "name": "Set Battle Track Progress",
              "progress": {
                "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)"
              },
              "count": {
                "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "ADF_2_get"
          },
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "(TempHP_get * ADF_3_get)"
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_FantasticStory_BaseAbility_0040_Insert_Camera": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0040_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_FantasticStory_BaseAbility_0040": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0040",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0041",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0042",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0043",
          "scope": "ContextCaster"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(BattleEvent_BaseHP * 90)"
          },
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_1",
          "resetValue": {
            "displayLines": "(#ADF_1 * 0.33)"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_2",
          "resetValue": {
            "displayLines": "(#ADF_1 * 0.67)"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_3",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Start Battle Track Progress",
          "progress": 0,
          "count": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1941026382\">Modifier_FantasticStory_BaseAbility_0040</a>",
          "valuePerStack": {
            "ADF_1": {
              "displayLines": "#ADF_1"
            },
            "ADF_2": {
              "displayLines": "#ADF_2"
            },
            "ADF_3": {
              "displayLines": "#ADF_3"
            },
            "TempHP": {
              "displayLines": "BattleEvent_BaseHP"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__355925913\">Modifier_FantasticStory_BaseAbility_0040_plus3_sub</a>[<span class=\"descriptionNumberColor\">Bonus Charge</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After attacking enemy targets, Whimsicality additionally gains <span class=\"descriptionNumberColor\">_Extra_Count</span> point(s) of Charge.",
          "type": "Buff",
          "effectName": "Bonus Charge",
          "statusName": "Bonus Charge",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0043_ADF_1"
                  },
                  "variableName": "_Extra_Count"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum + _Extra_Count)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1757806041\">Modifier_FantasticStory_BaseAbility_0040_sub</a>",
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
                          "Follow-up"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_InsertDamageFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum + 1)"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "_InsertDamageFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "variableName": "_InsertDamageFlag"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1941026382\">Modifier_FantasticStory_BaseAbility_0040</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ADF_1",
            "ADF_2",
            "ADF_3",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0041",
            "DV_FantasticStory_PlusAbility_0042",
            "DV_FantasticStory_PlusAbility_0043",
            "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0040_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0040_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0042",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1558011426\">Modifier_FantasticStory_BaseAbility_0040_plus2_sub</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
                          "valuePerStack": {
                            "_DamageUpRatio": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0042_ADF_1"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0043",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"355925913\">Modifier_FantasticStory_BaseAbility_0040_plus3_sub</a>[<span class=\"descriptionNumberColor\">Bonus Charge</span>]",
                          "valuePerStack": {
                            "_Extra_Count": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0043_ADF_1"
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1757806041\">Modifier_FantasticStory_BaseAbility_0040_sub</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "FantasticStory_BaseAbility_0040_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "priorityTag": "DefaultCharacter",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "TempHP_get": {
                                  "displayLines": "TempHP"
                                },
                                "ADF_2_get": {
                                  "displayLines": "ADF_2"
                                },
                                "ADF_3_get": {
                                  "displayLines": "ADF_3"
                                }
                              },
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0040_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "DefaultCharacter",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            },
                            "ADF_3_get": {
                              "displayLines": "ADF_3"
                            }
                          },
                          "allowAbilityTriggers": false
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0041",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1) * 0.33)"
                      },
                      "variableName": "DV_RangeGap_1"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1) * 0.67)"
                      },
                      "variableName": "DV_RangeGap_2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)"
                      },
                      "variableName": "DV_RangeGap_3"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1757806041\">Modifier_FantasticStory_BaseAbility_0040_sub</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0042",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1558011426\">Modifier_FantasticStory_BaseAbility_0040_plus2_sub</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
                          "valuePerStack": {
                            "_DamageUpRatio": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0042_ADF_1"
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0043",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"355925913\">Modifier_FantasticStory_BaseAbility_0040_plus3_sub</a>[<span class=\"descriptionNumberColor\">Bonus Charge</span>]",
                      "valuePerStack": {
                        "_Extra_Count": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0043_ADF_1"
                        }
                      }
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            },
                            "ADF_3_get": {
                              "displayLines": "ADF_3"
                            }
                          },
                          "allowAbilityTriggers": false
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
              "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "displayLines": "DV_RangeGap_1"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)"
                          }
                        }
                      ]
                    }
                  ],
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_1"
                  },
                  "maxValue": {
                    "displayLines": "DV_RangeGap_2"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)"
                          }
                        }
                      ]
                    }
                  ],
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_2"
                  },
                  "maxValue": {
                    "displayLines": "DV_RangeGap_3"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)"
                          }
                        }
                      ]
                    }
                  ],
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0041",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)"
                          },
                          "count": {
                            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_3"
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 1,
                      "count": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0040_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "DefaultCharacter",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            },
                            "ADF_3_get": {
                              "displayLines": "ADF_3"
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 1,
                      "count": 100
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "-1954781239_FantasticStory_PlusAbility_0036": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0036",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0036"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0036_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0035": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0035",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0035"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0035_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0034": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0034",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0034"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0034_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0034_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0033": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0033",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0033"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0033_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0032": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0032",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0032"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0031": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0031",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0031"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0031_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0031_Insert": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0031_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag"
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 5,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": "(TempHP_get * ADF_2_get)"
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_FantasticStory_BaseAbility_0030_Insert": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0030_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_0034",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(ADF_2_get * (1 + DV_FantasticStory_PlusAbility_0034_ADF_2))"
              },
              "variableName": "ADF_2_get"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 5,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": "(TempHP_get * ADF_2_get)"
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_0035",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1329142430\">Modifier_FantasticStory_BaseAbility_0030_plus5_AddSP</a>",
              "valuePerStack": {
                "_AddSP": {
                  "displayLines": "DV_FantasticStory_PlusAbility_0035_ADF_1"
                }
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1117415883\">Modifier_FantasticStory_BaseAbility_0030_plus5_AddStockedSP</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_BaseAbility_0030_DamageSum",
            "compareType": ">=",
            "value2": {
              "displayLines": "(DV_RangeGap_3 * 2)"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_RangeGap_3 - 1)"
              },
              "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0034",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_0030_DamageSum - DV_RangeGap_3)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum"
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_FantasticStory_BaseAbility_0030_Insert_Camera": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0030_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_FantasticStory_BaseAbility_0030": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0030",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0031",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0032",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0033",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0034",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0035",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0036",
          "scope": "ContextCaster"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(BattleEvent_BaseHP * 90)"
          },
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_1",
          "resetValue": {
            "displayLines": "((BattleEvent_BaseHP * #ADF_1) * 0.33)"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_2",
          "resetValue": {
            "displayLines": "((BattleEvent_BaseHP * #ADF_1) * 0.67)"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_RangeGap_3",
          "resetValue": {
            "displayLines": "(BattleEvent_BaseHP * #ADF_1)"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1973742977\">Modifier_FantasticStory_BaseAbility_0030</a>",
          "valuePerStack": {
            "ADF_1": {
              "displayLines": "#ADF_1"
            },
            "ADF_2": {
              "displayLines": "#ADF_2"
            },
            "TempHP": {
              "displayLines": "BattleEvent_BaseHP"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__357438024\">Modifier_FantasticStory_BaseAbility_0030_sub</a>",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                              "value": "DV_FantasticStory_PlusAbility_0031_ADF_1"
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
              "eventTrigger": "Deal Damage End [Owner]: Any",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0034",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "_InsertDamageFlag",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(1 + DV_FantasticStory_PlusAbility_0034_InsertAtkCount)"
                              },
                              "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Damage Data",
                          "variableName": "_DamageSum",
                          "scope": "ContextModifier",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_DamageSum + DV_FantasticStory_BaseAbility_0030_DamageSum)"
                          },
                          "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "DV_FantasticStory_PlusAbility_0033",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "_InsertDamageFlag",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Action Advance/Delay",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "advanceType": "Set",
                              "multiAdd": "(0 - DV_FantasticStory_PlusAbility_0033_ADF_1)"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 1,
                      "variableName": "_InsertDamageFlag"
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
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0032",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Attack-Type Extension",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "typeToExtend": "Ultimate",
                      "extendTypeTo": "Follow-up"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "variableName": "_InsertDamageFlag"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1973742977\">Modifier_FantasticStory_BaseAbility_0030</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ADF_1",
            "ADF_2",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0031",
            "DV_FantasticStory_PlusAbility_0032",
            "DV_FantasticStory_PlusAbility_0033",
            "DV_FantasticStory_PlusAbility_0034",
            "DV_FantasticStory_PlusAbility_0035",
            "DV_FantasticStory_PlusAbility_0036",
            "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
            "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0030_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0030_Insert"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_PlusAbility_0031_Insert"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"357438024\">Modifier_FantasticStory_BaseAbility_0030_sub</a>"
                    }
                  ]
                },
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
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
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0036",
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1083847243\">Modifier_FantasticStory_BaseAbility_0030_plus6_sub</a>",
                      "valuePerStack": {
                        "_DamageSumRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0036_ADF_1"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "allowAbilityTriggers": false
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"357438024\">Modifier_FantasticStory_BaseAbility_0030_sub</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[getBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"357438024\">Modifier_FantasticStory_BaseAbility_0030_sub</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0034",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount",
                          "scope": "ContextCaster"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0035",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)v2}}"
                          },
                          "variableName": "EntityCurrentSP",
                          "scope": "TargetEntity"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)v2}}"
                          },
                          "variableName": "EntityStockSP",
                          "scope": "TargetEntity"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)v2}}"
                          },
                          "variableName": "EntityMaxSP",
                          "scope": "TargetEntity"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0036",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1083847243\">Modifier_FantasticStory_BaseAbility_0030_plus6_sub</a>",
                          "valuePerStack": {
                            "_DamageSumRatio": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0036_ADF_1"
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
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "allowAbilityTriggers": false
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
              "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": {
                    "displayLines": "DV_RangeGap_1"
                  },
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_1"
                  },
                  "maxValue": {
                    "displayLines": "DV_RangeGap_2"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_2"
                  },
                  "maxValue": {
                    "displayLines": "DV_RangeGap_3"
                  },
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_RangeGap_3"
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0031",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "CharacterAttackFromSelf",
                              "ownerState": "Anyone",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "TempHP_get": {
                                  "displayLines": "TempHP"
                                },
                                "ADF_2_get": {
                                  "displayLines": "ADF_2"
                                }
                              },
                              "allowAbilityTriggers": false
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
              "name": "Variable Value Changes",
              "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 2,
                  "includeMaxValueInRange": true
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 3,
                  "maxValue": 3,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            },
                            "ADF_2_get": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "allowAbilityTriggers": false
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
    "-1954781239_FantasticStory_PlusAbility_0028": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0028",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0028"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0028_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0028_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0028_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0027": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0027",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0027"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0027_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0027_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0027_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0027_ADF_4",
          "resetValue": {
            "displayLines": "#ADF_4"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0026": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0026",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0026"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0026_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0026_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0025": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0025",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0025"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_4",
          "resetValue": {
            "displayLines": "#ADF_4"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0025_ADF_5",
          "resetValue": {
            "displayLines": "#ADF_5"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0024": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0024",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0024"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0024_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0023": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0023",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0023"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0023_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0023_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0022": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0022",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0022"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0022_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0022_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0022_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0021": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0021",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0021"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0021_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0020": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0020",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0021",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0022",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0023",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0024",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0025",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0026",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0027",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0028",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_Plus6_WarlockCount",
          "scope": "ContextCaster"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(BattleEvent_BaseHP * 90)"
          },
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1872930168\">Modifier_FantasticStory_BaseAbility_0020</a>",
          "valuePerStack": {
            "ADF_1": {
              "displayLines": "#ADF_1"
            },
            "ADF_2": {
              "displayLines": "#ADF_2"
            },
            "ADF_3": {
              "displayLines": "#ADF_3"
            },
            "TempHP": {
              "displayLines": "BattleEvent_BaseHP"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1420491994\">Modifier_FantasticStory_BaseAbility_0020_sub7</a>",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric",
                                    "invertCondition": true
                                  }
                                ]
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Trigger Modifier Event",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "DOT_TriggerRatio",
                              "eventType": "DOT",
                              "value": {
                                "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_3"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Trigger Modifier Event",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "DOT_TriggerRatio",
                                  "eventType": "DOT",
                                  "value": {
                                    "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_2"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Poison"
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Burn",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Bleed",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Electric",
                                            "invertCondition": true
                                          }
                                        ]
                                      },
                                      {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Poison",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Burn"
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Bleed",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Electric",
                                            "invertCondition": true
                                          }
                                        ]
                                      },
                                      {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Poison",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Burn",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Bleed"
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Electric",
                                            "invertCondition": true
                                          }
                                        ]
                                      },
                                      {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Poison",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Burn",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Bleed",
                                            "invertCondition": true
                                          },
                                          {
                                            "name": "Has Flag",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "flagName": "STAT_DOT_Electric"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Trigger Modifier Event",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "DOT_TriggerRatio",
                                      "eventType": "DOT",
                                      "value": {
                                        "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_1"
                                      }
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1235938185\">Modifier_FantasticStory_BaseAbility_0020_sub8</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Endurance"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1431018009\">Modifier_FantasticStory_BaseAbility_0020_sub6_dot</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "useEntitySnapshot": true,
          "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Gimmick",
          "stackLimit": 5,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1403714375\">Modifier_FantasticStory_BaseAbility_0020_sub6</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1431018009\">Modifier_FantasticStory_BaseAbility_0020_sub6_dot</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]",
                  "duration": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_4"
                  },
                  "stackLimit": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_3"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_Damage": {
                      "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0027_ADF_2)"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1454047232\">Modifier_FantasticStory_BaseAbility_0020_sub5</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0027_ADF_1</span>. Upon Breaking an enemy target's Weakness, applies Wind Shear to all enemies.",
          "type": "Buff",
          "statusName": "Gimmick",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_1"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>[<span class=\"descriptionNumberColor\">Verification</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DmgAddedRatio</span> and increases SPD by <span class=\"descriptionNumberColor\">SpdAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG and SPD Boost",
          "statusName": "Verification",
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
                    "displayLines": "DmgAddedRatio"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "displayLines": "SpdAddedRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-19171630\">Modifier_FantasticStory_BaseAbility_0020_sub3_dot</a>[<span class=\"descriptionNumberColor\">Argument</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "useEntitySnapshot": true,
          "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Argument",
          "stackLimit": 5,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1353381518\">Modifier_FantasticStory_BaseAbility_0020_sub3</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder and Adjacent Targets}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-19171630\">Modifier_FantasticStory_BaseAbility_0020_sub3_dot</a>[<span class=\"descriptionNumberColor\">Argument</span>]",
                  "duration": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_5"
                  },
                  "stackLimit": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_4"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_Damage": {
                      "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0025_ADF_3)"
                    }
                  },
                  "addStacksPerTrigger": 1
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-19171630\">Modifier_FantasticStory_BaseAbility_0020_sub3_dot</a>[<span class=\"descriptionNumberColor\">Argument</span>]",
                  "duration": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_5"
                  },
                  "stackLimit": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_4"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_Damage": {
                      "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0025_ADF_3)"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1561743765\">Modifier_FantasticStory_BaseAbility_0020_sub2_dot</a>[<span class=\"descriptionNumberColor\">Rumor</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "useEntitySnapshot": true,
          "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Rumor",
          "stackLimit": 5,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Poison_PoisonLayer",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1336603899\">Modifier_FantasticStory_BaseAbility_0020_sub2</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1561743765\">Modifier_FantasticStory_BaseAbility_0020_sub2_dot</a>[<span class=\"descriptionNumberColor\">Rumor</span>]",
                  "duration": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0022_ADF_3"
                  },
                  "stackLimit": 5,
                  "valuePerStack": {
                    "Modifier_Poison_Damage": {
                      "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0022_ADF_1)"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__444006453\">Modifier_FantasticStory_BaseAbility_0020_sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                          "value": "ADF_2_get"
                        }
                      ]
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
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
                          "value": "ADF_1_get"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0021",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "list": [
                          "Fire"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Joint-Attack",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Share DMG Taken",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Targets Adjacent to Modifier Holder}}"
                              },
                              "selfSplit": 1,
                              "targetSplit": {
                                "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 "
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "list": [
                          "Physical"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Joint-Attack",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Share DMG Taken",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Targets Adjacent to Modifier Holder}}"
                              },
                              "selfSplit": 1,
                              "targetSplit": {
                                "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 "
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Joint-Attack",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Share DMG Taken",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Targets Adjacent to Modifier Holder}}"
                              },
                              "selfSplit": 1,
                              "targetSplit": {
                                "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 "
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "list": [
                          "Wind"
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Joint-Attack",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Share DMG Taken",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Targets Adjacent to Modifier Holder}}"
                              },
                              "selfSplit": 1,
                              "targetSplit": {
                                "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 "
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0023",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Target Has Lowest/Highest Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "partOf": {
                          "name": "Target Name",
                          "target": "{{Player Team(Exclude Memosprites)}}"
                        },
                        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                        "minOrMax": "Min"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healPercent": {
                            "displayLines": "DV_FantasticStory_PlusAbility_0023_ADF_1"
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "(0 - DV_FantasticStory_PlusAbility_0023_ADF_2)"
                        },
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "living": true
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0024",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 10,
                      "ifTargetFound": [
                        {
                          "name": "Copy Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "source": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagFilter": [
                            "STAT_DOT"
                          ],
                          "chance": {
                            "displayLines": "DV_FantasticStory_PlusAbility_0024_ADF_1"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - ADF_3_get)"
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "living": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-769619478\">Modifier_FantasticStory_BaseAbility_0020_sub_preshow</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Ultimate",
              "Skill",
              "Basic ATK"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "STAT_DOT"
                },
                {
                  "name": "Is Part Of Team",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "team": "Enemy Team"
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "displayLines": "(0 - ADF_3_get)"
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1872930168\">Modifier_FantasticStory_BaseAbility_0020</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ADF_1",
            "ADF_2",
            "ADF_3",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0021",
            "DV_FantasticStory_PlusAbility_0022",
            "DV_FantasticStory_PlusAbility_0023",
            "DV_FantasticStory_PlusAbility_0024",
            "DV_FantasticStory_PlusAbility_0025",
            "DV_FantasticStory_PlusAbility_0026",
            "DV_FantasticStory_PlusAbility_0027",
            "DV_FantasticStory_PlusAbility_0028"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"444006453\">Modifier_FantasticStory_BaseAbility_0020_sub</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "displayLines": "TempHP"
                    },
                    "ADF_1_get": {
                      "displayLines": "ADF_1"
                    },
                    "ADF_2_get": {
                      "displayLines": "ADF_2"
                    },
                    "ADF_3_get": {
                      "displayLines": "ADF_3"
                    }
                  }
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"444006453\">Modifier_FantasticStory_BaseAbility_0020_sub</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
                        },
                        "ADF_1_get": {
                          "displayLines": "ADF_1"
                        },
                        "ADF_2_get": {
                          "displayLines": "ADF_2"
                        },
                        "ADF_3_get": {
                          "displayLines": "ADF_3"
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0025",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1353381518\">Modifier_FantasticStory_BaseAbility_0020_sub3</a>",
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0027",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1235938185\">Modifier_FantasticStory_BaseAbility_0020_sub8</a>"
                        }
                      ]
                    }
                  ]
                },
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-769619478\">Modifier_FantasticStory_BaseAbility_0020_sub_preshow</a>",
                      "valuePerStack": {
                        "ADF_3_get": {
                          "displayLines": "ADF_3"
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0027",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1454047232\">Modifier_FantasticStory_BaseAbility_0020_sub5</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1403714375\">Modifier_FantasticStory_BaseAbility_0020_sub6</a>",
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0028",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1420491994\">Modifier_FantasticStory_BaseAbility_0020_sub7</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "entityType": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0022",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1336603899\">Modifier_FantasticStory_BaseAbility_0020_sub2</a>",
                          "valuePerStack": {
                            "TempHP_get": {
                              "displayLines": "TempHP"
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
              "eventTrigger": "Character Path [Anyone]: Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0026",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Matching Path",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
                      },
                      "variableName": "DV_Plus6_WarlockCount",
                      "path": [
                        "Nihility"
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_Plus6_WarlockCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>[<span class=\"descriptionNumberColor\">Verification</span>]",
                          "valuePerStack": {
                            "DmgAddedRatio": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_1"
                            },
                            "SpdAddedRatio": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_2"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>[<span class=\"descriptionNumberColor\">Verification</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -90,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-769619478\">Modifier_FantasticStory_BaseAbility_0020_sub_preshow</a>",
                  "valuePerStack": {
                    "ADF_3_get": {
                      "displayLines": "ADF_3"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0022",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1336603899\">Modifier_FantasticStory_BaseAbility_0020_sub2</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0025",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1353381518\">Modifier_FantasticStory_BaseAbility_0020_sub3</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0026",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Nihility"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(DV_Plus6_WarlockCount + 1)"
                          },
                          "variableName": "DV_Plus6_WarlockCount"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_Plus6_WarlockCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>[<span class=\"descriptionNumberColor\">Verification</span>]",
                          "valuePerStack": {
                            "DmgAddedRatio": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_1"
                            },
                            "SpdAddedRatio": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_2"
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0027",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1454047232\">Modifier_FantasticStory_BaseAbility_0020_sub5</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1403714375\">Modifier_FantasticStory_BaseAbility_0020_sub6</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1235938185\">Modifier_FantasticStory_BaseAbility_0020_sub8</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0028",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1420491994\">Modifier_FantasticStory_BaseAbility_0020_sub7</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "-1954781239_FantasticStory_PlusAbility_0018": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0018",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0018"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0018_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0017": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0017",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0017"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0017_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0016": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0016",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0016"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0016_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0016_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0016_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0015": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0015",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0015"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0015_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0015_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0014": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0014",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0014"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0014_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0013": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0013",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0013"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0013_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0013_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0012": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0012",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0012"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0012_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_PlusAbility_0011": {
      "fileName": "-1954781239_FantasticStory_PlusAbility_0011",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_0011"
        }
      ],
      "references": []
    },
    "-1954781239_FantasticStory_BaseAbility_0010_Deathrattle_Camera": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0010_Deathrattle_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_Modifier_FantasticStory_BaseAbility_0010_Insert": {
      "fileName": "-1954781239_Modifier_FantasticStory_BaseAbility_0010_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_plus5_get",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "valueType": "Layer",
              "variableName": "Plus5_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Bomb_Damage_get * (1 + (Plus5_Layer * DV_plus5_ADF_1_get)))"
              },
              "variableName": "Plus5_Bomb_Damage"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": "Plus5_Bomb_Damage"
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Plus5_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Plus5_Layer"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Bomb_Damage_get * (1 + (Plus5_Layer * DV_plus5_ADF_1_get)))"
                  },
                  "variableName": "Plus5_Bomb_Damage"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "Plus5_Bomb_Damage"
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_plus7_get",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "(Bomb_Damage_get * (1 + DV_plus7_ADF_1_get))"
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "Bomb_Damage_get"
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-1954781239_FantasticStory_BaseAbility_0010": {
      "fileName": "-1954781239_FantasticStory_BaseAbility_0010",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0011",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0012",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0013",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0014",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0015",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0016",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0017",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_0018",
          "scope": "ContextCaster"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(BattleEvent_BaseHP * 90)"
          },
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-508947277\">Modifier_FantasticStory_BaseAbility_0010</a>",
          "valuePerStack": {
            "ADF_1": {
              "displayLines": "#ADF_1"
            },
            "ADF_2": {
              "displayLines": "#ADF_2"
            },
            "TempHP": {
              "displayLines": "BattleEvent_BaseHP"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2046125016\">Modifier_FantasticStory_BaseAbility_0010_plus6_ultraDmgUp</a>[<span class=\"descriptionNumberColor\">Splash</span>]",
          "stackType": "Replace",
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DmgAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Splash",
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
                    "displayLines": "DmgAddedRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__637313409\">Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp</a>[<span class=\"descriptionNumberColor\">Rupture</span>]",
          "stackType": "Replace",
          "description": "Ultimate deals <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0013_layerDmg</span> more DMG.",
          "type": "Buff",
          "effectName": "Ultimate DMG Boost",
          "statusName": "Rupture",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "DV_FantasticStory_PlusAbility_0013_layerDmg"
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
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "DV_FantasticStory_PlusAbility_0013_layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_PlusAbility_0013_layer * DmgAddedRatio)"
                  },
                  "variableName": "DV_FantasticStory_PlusAbility_0013_layerDmg"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Deathrattle"
          ],
          "description": "When this unit's turn starts or when this unit is defeated, this unit and adjacent targets take a set amount of DMG based on the active number of Shatter stacks.",
          "type": "Debuff",
          "effectName": "Shatter",
          "statusName": "Shatter",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Plus5_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Bomb_Damage * (1 + (Plus5_Layer * DV_FantasticStory_PlusAbility_0015_ADF_1)))"
                      },
                      "variableName": "Plus5_Bomb_Damage"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "Plus5_Bomb_Damage"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 2,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valueType": "Layer",
                              "variableName": "Plus5_Layer",
                              "modifierName": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
                              "multiplier": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "value": 0,
                              "variableName": "Plus5_Layer"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(Bomb_Damage * (1 + (Plus5_Layer * DV_FantasticStory_PlusAbility_0015_ADF_1)))"
                          },
                          "variableName": "Plus5_Bomb_Damage"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "displayLines": "Plus5_Bomb_Damage"
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0017",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder and Adjacent Targets}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "displayLines": "(Bomb_Damage * (1 + DV_FantasticStory_PlusAbility_0017_ADF_1))"
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "displayLines": "Bomb_MaxLayer"
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "displayLines": "Bomb_Damage_Initial"
                            },
                            "Bomb_MaxLayer": {
                              "displayLines": "Bomb_MaxLayer"
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder and Adjacent Targets}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "displayLines": "Bomb_Damage"
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Bomb_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "Bomb_Damage"
                  },
                  "variableName": "Bomb_Damage_Initial"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Bomb_Damage * Bomb_Layer)"
                  },
                  "variableName": "Bomb_Damage"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_0010_Deathrattle_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0013",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"637313409\">Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp</a>[<span class=\"descriptionNumberColor\">Rupture</span>]",
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_PlusAbility_0013_ADF_2"
                      },
                      "valuePerStack": {
                        "DmgAddedRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0013_ADF_1"
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "Bomb_Damage_get": {
                          "displayLines": "Bomb_Damage"
                        },
                        "DV_plus5_get": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0015"
                        },
                        "DV_plus5_ADF_1_get": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1"
                        },
                        "DV_plus5_ADF_2_get": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2"
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0017",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "valuePerStack": {
                            "Bomb_Damage_get": {
                              "displayLines": "Bomb_Damage"
                            },
                            "DV_plus7_get": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0017"
                            },
                            "DV_plus7_ADF_1_get": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0017_ADF_1"
                            }
                          },
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "displayLines": "Bomb_MaxLayer"
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "displayLines": "Bomb_Damage_Initial"
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "valuePerStack": {
                            "Bomb_Damage_get": {
                              "displayLines": "Bomb_Damage"
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0011",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DV_BeingHitCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "displayLines": "ADF_2_get_pre"
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "displayLines": "(TempHP_get_pre * ADF_1_get_pre)"
                            },
                            "Bomb_MaxLayer": {
                              "displayLines": "ADF_2_get_pre"
                            }
                          },
                          "addStacksPerTrigger": 2
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "DV_BeingHitCount"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_FantasticStory_PlusAbility_0014",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "ContextCaster"
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
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "DV_BeingHitCount",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Random Chance",
                                "chance": {
                                  "displayLines": "DV_FantasticStory_PlusAbility_0014"
                                }
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                              "stackLimit": {
                                "displayLines": "ADF_2_get_pre"
                              },
                              "valuePerStack": {
                                "Bomb_Damage": {
                                  "displayLines": "(TempHP_get_pre * ADF_1_get_pre)"
                                },
                                "Bomb_MaxLayer": {
                                  "displayLines": "ADF_2_get_pre"
                                }
                              },
                              "addStacksPerTrigger": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 0,
                              "variableName": "DV_BeingHitCount"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "DV_FantasticStory_PlusAbility_0018",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "ContextCaster"
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "DV_BeingHitCount",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "DV_BeingHitCount"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": {
                                      "displayLines": "DV_FantasticStory_PlusAbility_0018"
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                                      "stackLimit": {
                                        "displayLines": "ADF_2_get_pre"
                                      },
                                      "valuePerStack": {
                                        "Bomb_Damage": {
                                          "displayLines": "(TempHP_get_pre * ADF_1_get_pre)"
                                        },
                                        "Bomb_MaxLayer": {
                                          "displayLines": "ADF_2_get_pre"
                                        }
                                      },
                                      "addStacksPerTrigger": 1
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "DV_BeingHitCount",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                                  "stackLimit": {
                                    "displayLines": "ADF_2_get_pre"
                                  },
                                  "valuePerStack": {
                                    "Bomb_Damage": {
                                      "displayLines": "(TempHP_get_pre * ADF_1_get_pre)"
                                    },
                                    "Bomb_MaxLayer": {
                                      "displayLines": "ADF_2_get_pre"
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "DV_BeingHitCount"
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__891295398\">Modifier_FantasticStory_BaseAbility_0010_sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack Start [Owner]",
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
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>",
                      "valuePerStack": {
                        "TempHP_get_pre": {
                          "displayLines": "TempHP_get"
                        },
                        "ADF_1_get_pre": {
                          "displayLines": "ADF_1_get"
                        },
                        "ADF_2_get_pre": {
                          "displayLines": "ADF_2_get"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0014",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>",
                      "valuePerStack": {
                        "TempHP_get_pre": {
                          "displayLines": "TempHP_get"
                        },
                        "ADF_1_get_pre": {
                          "displayLines": "ADF_1_get"
                        },
                        "ADF_2_get_pre": {
                          "displayLines": "ADF_2_get"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0018",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Follow-up"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>",
                      "valuePerStack": {
                        "TempHP_get_pre": {
                          "displayLines": "TempHP_get"
                        },
                        "ADF_1_get_pre": {
                          "displayLines": "ADF_1_get"
                        },
                        "ADF_2_get_pre": {
                          "displayLines": "ADF_2_get"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-508947277\">Modifier_FantasticStory_BaseAbility_0010</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ADF_1",
            "ADF_2",
            "TempHP"
          ],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_0011",
            "DV_FantasticStory_PlusAbility_0012",
            "DV_FantasticStory_PlusAbility_0013",
            "DV_FantasticStory_PlusAbility_0014",
            "DV_FantasticStory_PlusAbility_0016",
            "DV_FantasticStory_PlusAbility_0018"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"891295398\">Modifier_FantasticStory_BaseAbility_0010_sub</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "displayLines": "TempHP"
                    },
                    "ADF_1_get": {
                      "displayLines": "ADF_1"
                    },
                    "ADF_2_get": {
                      "displayLines": "ADF_2"
                    }
                  }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"891295398\">Modifier_FantasticStory_BaseAbility_0010_sub</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
                        },
                        "ADF_1_get": {
                          "displayLines": "ADF_1"
                        },
                        "ADF_2_get": {
                          "displayLines": "ADF_2"
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0016",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1737739841\">Modifier_FantasticStory_BaseAbility_0010_plus6_sub</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0012",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0011"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "displayLines": "ADF_2"
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "displayLines": "(TempHP * ADF_1)"
                        },
                        "Bomb_MaxLayer": {
                          "displayLines": "ADF_2"
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0015",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1440555734\">Modifier_FantasticStory_BaseAbility_0010_plus5_sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0012",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0011"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                              "stackLimit": {
                                "displayLines": "ADF_2"
                              },
                              "valuePerStack": {
                                "Bomb_Damage": {
                                  "displayLines": "(TempHP * ADF_1)"
                                },
                                "Bomb_MaxLayer": {
                                  "displayLines": "ADF_2"
                                }
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1440555734\">Modifier_FantasticStory_BaseAbility_0010_plus5_sub</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0016",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1737739841\">Modifier_FantasticStory_BaseAbility_0010_plus6_sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}