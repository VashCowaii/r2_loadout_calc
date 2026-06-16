const configAbility = {
  "fileName": "1687681259_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__248924014\">Modifier_FantasticStory_BaseAbility_2260_ExceedSP</a>",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__152784140\">Modifier_FantasticStory_BaseAbility_2260_ReturnSP</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"248924014\">Modifier_FantasticStory_BaseAbility_2260_ExceedSP</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"248924014\">Modifier_FantasticStory_BaseAbility_2260_ExceedSP</a>",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-20290721\">Modifier_FantasticStory_BaseAbility_2260_AddSP</a>",
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
                    "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (EntityMaxSP) || Variables[2] (BattleEvent_P1_ADF_Get) || MUL || ADD || RETURN",
                    "displayLines": "(EntityCurrentSP + (EntityMaxSP * BattleEvent_P1_ADF_Get))",
                    "constants": [],
                    "variables": [
                      "EntityCurrentSP",
                      "EntityMaxSP",
                      "BattleEvent_P1_ADF_Get"
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
                        "operator": "Variables[0] (EntityMaxSP) || Variables[1] (BattleEvent_P1_ADF_Get) || MUL || RETURN",
                        "displayLines": "(EntityMaxSP * BattleEvent_P1_ADF_Get)",
                        "constants": [],
                        "variables": [
                          "EntityMaxSP",
                          "BattleEvent_P1_ADF_Get"
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
                      "modifier": "<a class=\"gModGreen\" id=\"248924014\">Modifier_FantasticStory_BaseAbility_2260_ExceedSP</a>",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__276558114\">Modifier_FantasticStory_BaseAbility_2260_Plus4AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Mirthful Cadence</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using Basic ATK or Skill to attack, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2264_ADF_4</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Mirthful Cadence"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-883208577\">Modifier_FantasticStory_BaseAbility_2260_Plus4AddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"276558114\">Modifier_FantasticStory_BaseAbility_2260_Plus4AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Mirthful Cadence</span>]",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"961960822\">Modifier_FantasticStory_BaseAbility_2260_plus4_sub</a>[<span class=\"descriptionNumberColor\">Mirthful Cadence</span>]",
          "haloStatus": true
        }
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DV_TargetCount"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2264_ADF_4) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2264_ADF_4 * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2264_ADF_4",
                      "DV_TargetCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2264_ADF_4) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2264_ADF_4)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2264_ADF_4"
                        ]
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2264_ADF_4) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2264_ADF_4)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2264_ADF_4"
                        ]
                      },
                      "type": "Special"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetCount",
                  "value": 0
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>"
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2264_ADF_3) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2264_ADF_3",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2264_ADF_3"
                    ]
                  },
                  "adjustment": "Add"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__367329133\">Modifier_FantasticStory_BaseAbility_2260_plus4_dmgUp</a>[<span class=\"descriptionNumberColor\">Indulgence</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DmgTakenUp</span>.",
      "type": "Debuff",
      "statusName": "Indulgence",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DmgTakenUp) || RETURN",
                "displayLines": "MDF_DmgTakenUp",
                "constants": [],
                "variables": [
                  "MDF_DmgTakenUp"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__961960822\">Modifier_FantasticStory_BaseAbility_2260_plus4_sub</a>[<span class=\"descriptionNumberColor\">Mirthful Cadence</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using an Elation Skill to attack an enemy target, inflicts the \"Indulgence\" effect on the attacked enemy target, increasing the DMG taken by this target by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2264_ADF_1</span> for <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2264_ADF_2</span> turn(s).",
      "type": "Buff",
      "statusName": "Mirthful Cadence",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"367329133\">Modifier_FantasticStory_BaseAbility_2260_plus4_dmgUp</a>[<span class=\"descriptionNumberColor\">Indulgence</span>]",
                  "duration": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2264_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2264_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2264_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DmgTakenUp": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2264_ADF_1) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_2264_ADF_1",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_2264_ADF_1"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-241712163\">Modifier_FantasticStory_BaseAbility_2260_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Variation</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each time after an attack is used, allies will additionally accumulate <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2263_ADF_5</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Variation"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1220904932\">Modifier_FantasticStory_BaseAbility_2260_Plus3AddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-241712163\">Modifier_FantasticStory_BaseAbility_2260_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Variation</span>]",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-232885525\">Modifier_FantasticStory_BaseAbility_2260_plus3_sub</a>[<span class=\"descriptionNumberColor\">Variation</span>]",
          "haloStatus": true
        }
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>",
                    "invertCondition": true
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
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2263_ADF_5) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2263_ADF_5)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2263_ADF_5"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2263_ADF_5) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2263_ADF_5",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2263_ADF_5"
                        ]
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2263_ADF_5) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2263_ADF_5",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2263_ADF_5"
                        ]
                      },
                      "type": "Special"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1024424636\">Modifier_FantasticStory_BaseAbility_2260_Plus2AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Fugato</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After every instance of DoT dealt, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2262_ADF_2</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Fugato"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1363585741\">Modifier_FantasticStory_BaseAbility_2260_Plus2AddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1024424636\">Modifier_FantasticStory_BaseAbility_2260_Plus2AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Fugato</span>]",
          "haloStatus": true
        }
      ],
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Anyone]: Any",
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
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
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
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2262_ADF_2) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2262_ADF_2)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2262_ADF_2"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2262_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2262_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2262_ADF_2"
                        ]
                      },
                      "type": "FeverSpecial",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2262_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2262_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2262_ADF_2"
                        ]
                      },
                      "type": "FeverSpecial"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1872663559\">Modifier_FantasticStory_BaseAbility_2260_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Toccata</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using an Ultimate or Follow-Up ATK to attack, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2261_ADF_4</span> Grit Value for allies with every enemy target hit.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Toccata"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1046935358\">Modifier_FantasticStory_BaseAbility_2260_Plus1AddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1872663559\">Modifier_FantasticStory_BaseAbility_2260_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Toccata</span>]",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1540437577\">Modifier_FantasticStory_BaseAbility_2260_plus1_sub</a>[<span class=\"descriptionNumberColor\">Toccata</span>]",
          "haloStatus": true
        }
      ],
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Anyone]: Any",
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
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
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
                  "name": "Define Custom Variable",
                  "variableName": "DV_InsertFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_InsertFlag",
              "value": 0
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_InsertFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DV_TargetCount"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2261_ADF_4) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2261_ADF_4 * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2261_ADF_4",
                      "DV_TargetCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2261_ADF_4) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2261_ADF_4)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2261_ADF_4"
                        ]
                      },
                      "type": "Special",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2261_ADF_4) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2261_ADF_4)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2261_ADF_4"
                        ]
                      },
                      "type": "Special"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetCount",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_InsertFlag",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1437509790\">Modifier_FantasticStory_BaseAbility_2260_plus3_defDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
      "description": "Each stack decreases DEF by <span class=\"descriptionNumberColor\">MDF_DefDown</span>. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Debuff",
      "statusName": "DEF Reduction",
      "execute": [
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_DefDown) || Variables[1] (MDF_Layer) || MUL || SUB || RETURN",
                "displayLines": "(0 - (MDF_DefDown * MDF_Layer))",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_DefDown",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-232885525\">Modifier_FantasticStory_BaseAbility_2260_plus3_sub</a>[<span class=\"descriptionNumberColor\">Variation</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using Basic ATK, Skill, or Ultimate to attack an enemy target, there is a <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2263_ADF_1</span> base chance to reduce the attacked enemy target's DEF by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2263_ADF_2</span> for <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2263_ADF_3</span> turn(s). This effect can stack up to <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2263_ADF_4</span> time(s).",
      "type": "Buff",
      "statusName": "Variation",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1437509790\">Modifier_FantasticStory_BaseAbility_2260_plus3_defDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                  "duration": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2263_ADF_3) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2263_ADF_3",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2263_ADF_3"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2263_ADF_1) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2263_ADF_1",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2263_ADF_1"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2263_ADF_4) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2263_ADF_4",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2263_ADF_4"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DefDown": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2263_ADF_2) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_2263_ADF_2",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_2263_ADF_2"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2263_ADF_4) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_2263_ADF_4",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_2263_ADF_4"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1,
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1490655604\">Modifier_FantasticStory_BaseAbility_2260_plus2_sub</a>[<span class=\"descriptionNumberColor\">Fugato</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using an attack, additionally causes 1 random DoT debuff currently applied to the attacked target to immediately produce DMG equal to <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2261_ADF_1</span> of its original DMG.",
      "type": "Buff",
      "statusName": "Fugato",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2262_ADF_1) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_2262_ADF_1",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_2262_ADF_1"
                ]
              },
              "max": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1540437577\">Modifier_FantasticStory_BaseAbility_2260_plus1_sub</a>[<span class=\"descriptionNumberColor\">Toccata</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Ultimate DMG and Follow-Up ATK DMG dealt increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2261_ADF_1</span>.",
      "type": "Buff",
      "statusName": "Toccata",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate",
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
                      "value": "DV_FantasticStory_PlusAbility_2261_ADF_1"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-91374911\">Modifier_FantasticStory_BaseAbility_2260_ResDown_Track</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"989147193\">Modifier_FantasticStory_BaseAbility_2260_ResDown</a>[<span class=\"descriptionNumberColor\">Dejection</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2261",
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
                      "modifier": "<a class=\"gModGreen\" id=\"989147193\">Modifier_FantasticStory_BaseAbility_2260_ResDown</a>[<span class=\"descriptionNumberColor\">Dejection</span>]",
                      "duration": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_EnterFever_P4_LifeTime) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2260_EnterFever_P4_LifeTime",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2260_EnterFever_P4_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_EnterFever_P5_MaxLayer) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2260_EnterFever_P5_MaxLayer",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2260_EnterFever_P5_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ResDown": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_EnterFever_P3_ResDown) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2260_EnterFever_P3_ResDown",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2260_EnterFever_P3_ResDown"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_EnterFever_P5_MaxLayer) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2260_EnterFever_P5_MaxLayer",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2260_EnterFever_P5_MaxLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2261_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2261_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2261_ADF_2"
                        ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"989147193\">Modifier_FantasticStory_BaseAbility_2260_ResDown</a>[<span class=\"descriptionNumberColor\">Dejection</span>]",
                      "duration": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_EnterFever_P4_LifeTime) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2260_EnterFever_P4_LifeTime",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2260_EnterFever_P4_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2261) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2261",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2261"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ResDown": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_EnterFever_P3_ResDown) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2260_EnterFever_P3_ResDown",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2260_EnterFever_P3_ResDown"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2261) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_2261",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_2261"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
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
      "for": "<a class=\"gModGreen\" id=\"mod__989147193\">Modifier_FantasticStory_BaseAbility_2260_ResDown</a>[<span class=\"descriptionNumberColor\">Dejection</span>]",
      "stackType": "Replace",
      "stackData": [
        "MDF_ResDown",
        "MDF_MaxLayer"
      ],
      "description": "Each stack decreases All-Type RES by <span class=\"descriptionNumberColor\">MDF_ResDown</span>. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Debuff",
      "statusName": "Dejection",
      "execute": [
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ResDown) || INVERT || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(-MDF_ResDown * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_ResDown",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-369186009\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever_StatusRes</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_DebuffCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_DebuffThreshold) || RETURN",
                  "displayLines": "MDF_DebuffThreshold",
                  "constants": [],
                  "variables": [
                    "MDF_DebuffThreshold"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_DmgTakenUp"
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_StatusResDown) || SUB || RETURN",
                "displayLines": "(0 - MDF_StatusResDown)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_StatusResDown"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DV_DebuffCount"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DV_DebuffCount"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DV_DebuffCount"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2031644054\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn_Track</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_TriggerCount",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger"
                      ]
                    }
                  },
                  {
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TriggerCount",
                  "value": {
                    "operator": "Variables[0] (DV_TriggerCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DV_TriggerCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_TriggerCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_EnterFeverValue",
                      "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                      "displayLines": "DV_EnterFeverValue",
                      "constants": [],
                      "variables": [
                        "DV_EnterFeverValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": 100,
                      "max": 100,
                      "delta": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio) || MUL || RETURN",
                        "displayLines": "(DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio)",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue",
                          "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio"
                        ]
                      },
                      "type": "FeverSpecial",
                      "phaseType": "P1"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                        "displayLines": "DV_EnterFeverValue",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue"
                        ]
                      },
                      "delta": {
                        "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio) || MUL || RETURN",
                        "displayLines": "(DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio)",
                        "constants": [],
                        "variables": [
                          "DV_EnterFeverValue",
                          "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio"
                        ]
                      },
                      "type": "FeverSpecial"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1976624211\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Whenever a debuff is applied to an enemy target, allies additionally accumulate <span class=\"descriptionNumberColor\">DV_Ratio</span> point(s) of Grit Value. This effect can be triggered up to <span class=\"descriptionNumberColor\">DV_MaxTrigger</span> time(s) per enemy target.",
      "type": "Buff",
      "statusName": "Grit Mechanics"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1886108113\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Effect RES decreases by <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown</span>. When afflicted with <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold</span> or more debuffs, DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp</span>.",
      "type": "Debuff",
      "statusName": "Concordant Truce"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__221092080\">Modifier_FantasticStory_BaseAbility_2260_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG received increases by <span class=\"descriptionNumberColor\">DV_Ratio_Get</span>. Every time this unit is inflicted with a debuff, inflicts 1 stack of \"Dejection\" on this unit.",
      "type": "Debuff",
      "statusName": "Surging Grit",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DV_Ratio_Get) || RETURN",
                "displayLines": "DV_Ratio_Get",
                "constants": [],
                "variables": [
                  "DV_Ratio_Get"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-91374911\">Modifier_FantasticStory_BaseAbility_2260_ResDown_Track</a>",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1490655604\">Modifier_FantasticStory_BaseAbility_2260_plus2_sub</a>[<span class=\"descriptionNumberColor\">Fugato</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2262",
            "compareType": "=",
            "value2": 1
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_BaseAbility_CountSum",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTemp) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_CountSumTemp",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_CountSumTemp"
                ]
              }
            },
            {
              "name": "Update Surging Grit[PF]",
              "current": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_CountSum"
                ]
              },
              "max": {
                "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                "displayLines": "DV_EnterFeverValue",
                "constants": [],
                "variables": [
                  "DV_EnterFeverValue"
                ]
              },
              "delta": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_CountSum"
                ]
              },
              "type": "FeverBack"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1085123526\">Modifier_FantasticStory_BaseAbility_2260_ListenBEDelay</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>"
            }
          ]
        },
        {
          "eventTrigger": "AV Forcibly Changed [Global]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DV_CurrentDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_BaseAbility_CountSumTemp",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTempMax) || RETURN",
                  "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax",
                  "constants": [],
                  "variables": [
                    "DV_FantasticStory_BaseAbility_CountSumTempMax"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Update Surging Grit[PF]",
                  "current": {
                    "operator": "Variables[0] (DV_CurrentDelay) || Constants[0] (10) || MUL || RETURN",
                    "displayLines": "(DV_CurrentDelay * 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "DV_CurrentDelay"
                    ]
                  },
                  "max": 100,
                  "extra": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "DV_FantasticStory_BaseAbility_CountSumTemp"
                    ]
                  },
                  "phaseType": "P1",
                  "reachedLimit": true
                }
              ],
              "failed": [
                {
                  "name": "Update Surging Grit[PF]",
                  "current": {
                    "operator": "Variables[0] (DV_CurrentDelay) || Constants[0] (10) || MUL || RETURN",
                    "displayLines": "(DV_CurrentDelay * 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "DV_CurrentDelay"
                    ]
                  },
                  "max": 100,
                  "extra": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "DV_FantasticStory_BaseAbility_CountSumTemp"
                    ]
                  },
                  "phaseType": "P1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>"
    }
  ],
  "references": []
}