const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 1687681259,
  "trimCharacterName": 1687681259,
  "abilityList": [
    "1687681259_Modifiers",
    "1687681259_FantasticStory_PlusAbility_2264",
    "1687681259_FantasticStory_PlusAbility_2263",
    "1687681259_FantasticStory_PlusAbility_2262",
    "1687681259_FantasticStory_PlusAbility_2261",
    "1687681259_FantasticStory_BaseAbility_2260_Insert",
    "1687681259_FantasticStory_BaseAbility_2260_EnterFever",
    "1687681259_FantasticStory_BaseAbility_2260_BeforeFever",
    "1687681259_FantasticStory_BaseAbility_2260_BaseAddOn",
    "1687681259_FantasticStory_BaseAbility_2260",
    "1687681259_FantasticStory_BaseAbility_2250",
    "1687681259_BE_BattleEvents"
  ],
  "abilityObject": {
    "1687681259_Modifiers": {
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
            "DEF_DOWN"
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
    },
    "1687681259_FantasticStory_PlusAbility_2264": {
      "fileName": "1687681259_FantasticStory_PlusAbility_2264",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_2264",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2264_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2264_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2264_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2264_ADF_4",
          "value": {
            "operator": "Variables[0] (#ADF_4) || RETURN",
            "displayLines": "#ADF_4",
            "constants": [],
            "variables": [
              "#ADF_4"
            ]
          }
        }
      ],
      "references": []
    },
    "1687681259_FantasticStory_PlusAbility_2263": {
      "fileName": "1687681259_FantasticStory_PlusAbility_2263",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_2263",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2263_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2263_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2263_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2263_ADF_4",
          "value": {
            "operator": "Variables[0] (#ADF_4) || RETURN",
            "displayLines": "#ADF_4",
            "constants": [],
            "variables": [
              "#ADF_4"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2263_ADF_5",
          "value": {
            "operator": "Variables[0] (#ADF_5) || RETURN",
            "displayLines": "#ADF_5",
            "constants": [],
            "variables": [
              "#ADF_5"
            ]
          }
        }
      ],
      "references": []
    },
    "1687681259_FantasticStory_PlusAbility_2262": {
      "fileName": "1687681259_FantasticStory_PlusAbility_2262",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_2262",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2262_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2262_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        }
      ],
      "references": []
    },
    "1687681259_FantasticStory_PlusAbility_2261": {
      "fileName": "1687681259_FantasticStory_PlusAbility_2261",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_2261",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2261_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2261_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2261_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2261_ADF_4",
          "value": {
            "operator": "Variables[0] (#ADF_4) || RETURN",
            "displayLines": "#ADF_4",
            "constants": [],
            "variables": [
              "#ADF_4"
            ]
          }
        }
      ],
      "references": []
    },
    "1687681259_FantasticStory_BaseAbility_2260_Insert": {
      "fileName": "1687681259_FantasticStory_BaseAbility_2260_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_TargetDebuffCountMax",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 30501,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "noTargetFound": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 30501,
              "variables": {
                "DV_BE_BaseSpeed": {
                  "operator": "Variables[0] (DV_FeverBESpeed) || RETURN",
                  "displayLines": "DV_FeverBESpeed",
                  "constants": [],
                  "variables": [
                    "DV_FeverBESpeed"
                  ]
                }
              },
              "whenCreated": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1085123526\">Modifier_FantasticStory_BaseAbility_2260_ListenBEDelay</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "DV_TargetDebuffCount"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>",
              "counter": {
                "operator": "Variables[0] (DV_TargetDebuffCount) || RETURN",
                "displayLines": "DV_TargetDebuffCount",
                "constants": [],
                "variables": [
                  "DV_TargetDebuffCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_TargetDebuffCount",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (DV_TargetDebuffCountMax) || RETURN",
                  "displayLines": "DV_TargetDebuffCountMax",
                  "constants": [],
                  "variables": [
                    "DV_TargetDebuffCountMax"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetDebuffCountMax",
                  "value": {
                    "operator": "Variables[0] (DV_TargetDebuffCount) || RETURN",
                    "displayLines": "DV_TargetDebuffCount",
                    "constants": [],
                    "variables": [
                      "DV_TargetDebuffCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_TargetDebuffCountMax",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (DV_TargetDebuffCountMax) || RETURN",
                "displayLines": "DV_TargetDebuffCountMax",
                "constants": [],
                "variables": [
                  "DV_TargetDebuffCountMax"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
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
                              "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2260_EnterFever_P1_FixedDmgRatio) || MUL || RETURN",
                              "displayLines": "(BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2260_EnterFever_P1_FixedDmgRatio)",
                              "constants": [],
                              "variables": [
                                "BattleEvent_BaseHP",
                                "DV_FantasticStory_BaseAbility_2260_EnterFever_P1_FixedDmgRatio"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          }
                        },
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>",
                          "function": "Add"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1935126530\">Modifier_FantasticStory_BaseAbility_2260_FeverDmgCount</a>"
            },
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_CountSum",
          "value": {
            "operator": "Constants[0] (0) || RETURN",
            "displayLines": "0",
            "constants": [
              0
            ],
            "variables": []
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "1687681259_FantasticStory_BaseAbility_2260_EnterFever": {
      "fileName": "1687681259_FantasticStory_BaseAbility_2260_EnterFever",
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
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_EnterFever_P1_FixedDmgRatio",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || RETURN",
            "displayLines": "ADF_1_Get",
            "constants": [],
            "variables": [
              "ADF_1_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_EnterFever_P2_DmgTakenUp",
          "value": {
            "operator": "Variables[0] (ADF_2_Get) || RETURN",
            "displayLines": "ADF_2_Get",
            "constants": [],
            "variables": [
              "ADF_2_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_EnterFever_P3_ResDown",
          "value": {
            "operator": "Variables[0] (ADF_3_Get) || RETURN",
            "displayLines": "ADF_3_Get",
            "constants": [],
            "variables": [
              "ADF_3_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_EnterFever_P4_LifeTime",
          "value": {
            "operator": "Variables[0] (ADF_4_Get) || RETURN",
            "displayLines": "ADF_4_Get",
            "constants": [],
            "variables": [
              "ADF_4_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_EnterFever_P5_MaxLayer",
          "value": {
            "operator": "Variables[0] (ADF_5_Get) || RETURN",
            "displayLines": "ADF_5_Get",
            "constants": [],
            "variables": [
              "ADF_5_Get"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"77328185\">Modifier_FantasticStory_BaseAbility_2260_EnterFever</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__77328185\">Modifier_FantasticStory_BaseAbility_2260_EnterFever</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"221092080\">Modifier_FantasticStory_BaseAbility_2260_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                      "valuePerStack": {
                        "DV_Ratio_Get": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_EnterFever_P2_DmgTakenUp) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2260_EnterFever_P2_DmgTakenUp",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2260_EnterFever_P2_DmgTakenUp"
                          ]
                        }
                      }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"221092080\">Modifier_FantasticStory_BaseAbility_2260_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                      "valuePerStack": {
                        "DV_Ratio_Get": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_EnterFever_P2_DmgTakenUp) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2260_EnterFever_P2_DmgTakenUp",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2260_EnterFever_P2_DmgTakenUp"
                          ]
                        }
                      }
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"221092080\">Modifier_FantasticStory_BaseAbility_2260_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "1687681259_FantasticStory_BaseAbility_2260_BeforeFever": {
      "fileName": "1687681259_FantasticStory_BaseAbility_2260_BeforeFever",
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
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || RETURN",
            "displayLines": "ADF_1_Get",
            "constants": [],
            "variables": [
              "ADF_1_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp",
          "value": {
            "operator": "Variables[0] (ADF_2_Get) || RETURN",
            "displayLines": "ADF_2_Get",
            "constants": [],
            "variables": [
              "ADF_2_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold",
          "value": {
            "operator": "Variables[0] (ADF_3_Get) || RETURN",
            "displayLines": "ADF_3_Get",
            "constants": [],
            "variables": [
              "ADF_3_Get"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"743348896\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__743348896\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1886108113\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-369186009\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever_StatusRes</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_StatusResDown": {
                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown) || RETURN",
                  "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown",
                  "constants": [],
                  "variables": [
                    "DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown"
                  ]
                },
                "MDF_DmgTakenUp": {
                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp) || RETURN",
                  "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp",
                  "constants": [],
                  "variables": [
                    "DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp"
                  ]
                },
                "MDF_DebuffThreshold": {
                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold) || RETURN",
                  "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold",
                  "constants": [],
                  "variables": [
                    "DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "1687681259_FantasticStory_BaseAbility_2260_BaseAddOn": {
      "fileName": "1687681259_FantasticStory_BaseAbility_2260_BaseAddOn",
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
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || Constants[0] (100) || DIV || RETURN",
            "displayLines": "(ADF_1_Get / 100)",
            "constants": [
              100
            ],
            "variables": [
              "ADF_1_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger",
          "value": {
            "operator": "Variables[0] (ADF_2_Get) || RETURN",
            "displayLines": "ADF_2_Get",
            "constants": [],
            "variables": [
              "ADF_2_Get"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"785773494\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__785773494\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1976624211\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "DV_Ratio": {
                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio) || Constants[0] (100) || MUL || RETURN",
                  "displayLines": "(DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio * 100)",
                  "constants": [
                    100
                  ],
                  "variables": [
                    "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio"
                  ]
                },
                "DV_MaxTrigger": {
                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger) || RETURN",
                  "displayLines": "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger",
                  "constants": [],
                  "variables": [
                    "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2031644054\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn_Track</a>",
              "haloStatus": true
            }
          ]
        }
      ]
    },
    "1687681259_FantasticStory_BaseAbility_2260": {
      "fileName": "1687681259_FantasticStory_BaseAbility_2260",
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
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_CountSum"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_EnterFeverValue",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || RETURN",
            "displayLines": "ADF_1_Get",
            "constants": [],
            "variables": [
              "ADF_1_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_BeforeFeverEliteDmgRatio",
          "value": {
            "operator": "Variables[0] (ADF_3_Get) || RETURN",
            "displayLines": "ADF_3_Get",
            "constants": [],
            "variables": [
              "ADF_3_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_BeforeFeverKillChargeRatio",
          "value": {
            "operator": "Variables[0] (ADF_4_Get) || RETURN",
            "displayLines": "ADF_4_Get",
            "constants": [],
            "variables": [
              "ADF_4_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FeverKillReturnRatio",
          "value": {
            "operator": "Variables[0] (ADF_5_Get) || RETURN",
            "displayLines": "ADF_5_Get",
            "constants": [],
            "variables": [
              "ADF_5_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FeverBESpeed",
          "value": {
            "operator": "Variables[0] (ADF_6_Get) || RETURN",
            "displayLines": "ADF_6_Get",
            "constants": [],
            "variables": [
              "ADF_6_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_CountSumTempMax",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || Variables[1] (ADF_2_Get) || MUL || RETURN",
            "displayLines": "(ADF_1_Get * ADF_2_Get)",
            "constants": [],
            "variables": [
              "ADF_1_Get",
              "ADF_2_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2261"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2262"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2263"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2264"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BattleEvent_BaseHP",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
            "displayLines": "(BattleEvent_BaseHP * 90)",
            "constants": [
              90
            ],
            "variables": [
              "BattleEvent_BaseHP"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag"
        },
        {
          "name": "Update Surging Grit[PF]",
          "max": {
            "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
            "displayLines": "DV_EnterFeverValue",
            "constants": [],
            "variables": [
              "DV_EnterFeverValue"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1884804088\">Modifier_FantasticStory_BaseAbility_2260</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-185070171\">Modifier_FantasticStory_BaseAbility_2260_sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_AllDarkTeam_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_2260_Insert"
                },
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1046935358\">Modifier_FantasticStory_BaseAbility_2260_Plus1AddOn</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2262",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1363585741\">Modifier_FantasticStory_BaseAbility_2260_Plus2AddOn</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2263",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1220904932\">Modifier_FantasticStory_BaseAbility_2260_Plus3AddOn</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2264",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-883208577\">Modifier_FantasticStory_BaseAbility_2260_Plus4AddOn</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
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
                          "abilityName": "FantasticStory_BaseAbility_2260_Insert",
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
                          "allowAbilityTriggers": false
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
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
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
                          "abilityName": "FantasticStory_BaseAbility_2260_Insert",
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
                          "allowAbilityTriggers": false
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
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
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
                          "abilityName": "FantasticStory_BaseAbility_2260_Insert",
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
              "variableName": "DV_FantasticStory_BaseAbility_CountSum",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                    "displayLines": "DV_EnterFeverValue",
                    "constants": [],
                    "variables": [
                      "DV_EnterFeverValue"
                    ]
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag",
                      "value": 1
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
                          "abilityName": "FantasticStory_BaseAbility_2260_Insert",
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1884804088\">Modifier_FantasticStory_BaseAbility_2260</a>",
          "stackType": "ReplaceByCaster",
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_2261",
            "DV_FantasticStory_PlusAbility_2262",
            "DV_FantasticStory_PlusAbility_2263",
            "DV_FantasticStory_PlusAbility_2264",
            "DV_FantasticStory_BaseAbility_TriggerFlag"
          ],
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 8003060,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Fictional Ensemble"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Max Wave Count",
                          "add": -99
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1135719358\">MDF_NoScore</a>"
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1135719358\">MDF_NoScore</a>"
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1496517518\">Modifier_FantasticStory_BaseAbility_2260_aura</a>"
                              },
                              "passed": [
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
                                          "modifier": "<a class=\"gModGreen\" id=\"-1085123526\">Modifier_FantasticStory_BaseAbility_2260_ListenBEDelay</a>"
                                        }
                                      }
                                    ]
                                  },
                                  "variableName": "DV_Delay",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
                                  "value": {
                                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTemp) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_BeforeFeverKillChargeRatio) || MUL || ADD || RETURN",
                                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSumTemp + (DV_EnterFeverValue * DV_BeforeFeverKillChargeRatio))",
                                    "constants": [],
                                    "variables": [
                                      "DV_FantasticStory_BaseAbility_CountSumTemp",
                                      "DV_EnterFeverValue",
                                      "DV_BeforeFeverKillChargeRatio"
                                    ]
                                  }
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
                                      "name": "Define Custom Variable",
                                      "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
                                      "value": {
                                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTempMax) || RETURN",
                                        "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax",
                                        "constants": [],
                                        "variables": [
                                          "DV_FantasticStory_BaseAbility_CountSumTempMax"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": {
                                        "operator": "Variables[0] (DV_Delay) || Constants[0] (10) || MUL || RETURN",
                                        "displayLines": "(DV_Delay * 10)",
                                        "constants": [
                                          10
                                        ],
                                        "variables": [
                                          "DV_Delay"
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
                                        "operator": "Variables[0] (DV_Delay) || Constants[0] (10) || MUL || RETURN",
                                        "displayLines": "(DV_Delay * 10)",
                                        "constants": [
                                          10
                                        ],
                                        "variables": [
                                          "DV_Delay"
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
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                                  "value": {
                                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_FeverKillReturnRatio) || MUL || ADD || RETURN",
                                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_EnterFeverValue * DV_FeverKillReturnRatio))",
                                    "constants": [],
                                    "variables": [
                                      "DV_FantasticStory_BaseAbility_CountSum",
                                      "DV_EnterFeverValue",
                                      "DV_FeverKillReturnRatio"
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
                                        "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FeverKillReturnRatio) || MUL || RETURN",
                                        "displayLines": "(DV_EnterFeverValue * DV_FeverKillReturnRatio)",
                                        "constants": [],
                                        "variables": [
                                          "DV_EnterFeverValue",
                                          "DV_FeverKillReturnRatio"
                                        ]
                                      },
                                      "type": "Normal",
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
                                        "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FeverKillReturnRatio) || MUL || RETURN",
                                        "displayLines": "(DV_EnterFeverValue * DV_FeverKillReturnRatio)",
                                        "constants": [],
                                        "variables": [
                                          "DV_EnterFeverValue",
                                          "DV_FeverKillReturnRatio"
                                        ]
                                      },
                                      "type": "Normal"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": ">=",
                                "value2": 3
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "DV_maxHP",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
                                      "operator": "Variables[0] (DV_maxHP) || Variables[1] (DV_BeforeFeverEliteDmgRatio) || MUL || RETURN",
                                      "displayLines": "(DV_maxHP * DV_BeforeFeverEliteDmgRatio)",
                                      "constants": [],
                                      "variables": [
                                        "DV_maxHP",
                                        "DV_BeforeFeverEliteDmgRatio"
                                      ]
                                    },
                                    "notAHit": true,
                                    "dmgFormulaFinal": "Converted DMG Base",
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "True DMG"
                                  }
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{Enemy Team All(with Unselectable)}}"
                                  },
                                  "searchRandom": true,
                                  "maxTargets": 1,
                                  "conditions": {
                                    "name": "Enemy ID",
                                    "ID": 8003060,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "characterName": "Fictional Ensemble"
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "DV_maxHP",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
                                          "operator": "Variables[0] (DV_maxHP) || Constants[0] (20) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                                          "displayLines": "((DV_maxHP / 20) + 0.0009999999)",
                                          "constants": [
                                            20,
                                            0.0009999999
                                          ],
                                          "variables": [
                                            "DV_maxHP"
                                          ]
                                        },
                                        "notAHit": true,
                                        "dmgFormulaFinal": "Converted DMG Base",
                                        "Toughness": null,
                                        "Tags": null,
                                        "attackType": "True DMG"
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 8003060,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Fictional Ensemble"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-185070171\">Modifier_FantasticStory_BaseAbility_2260_sub</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 8003060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Fictional Ensemble"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]"
                    },
                    {
                      "name": "Boss Bar Display",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "display": true
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After being defeated, deal DMG based on a certain percentage of their Max HP to the Elite enemy target.",
          "type": "Buff",
          "effectName": "Fate's Convergence",
          "statusName": "Fate's Convergence"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]",
          "stackType": "ReplaceByCaster",
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_TriggerFlag",
            "DV_FantasticStory_PlusAbility_2264",
            "DV_FantasticStory_PlusAbility_2263",
            "DV_FantasticStory_PlusAbility_2262",
            "DV_FantasticStory_PlusAbility_2261"
          ],
          "description": "After non-Elite enemy targets are defeated, receive DMG based on a certain percentage of this unit's Max HP.",
          "type": "Buff",
          "effectName": "Binding Obligation",
          "statusName": "Binding Obligation",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Sever Group Relationship",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "relatedGroup": "HPParentChild"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Establish Group Relationship",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}} - {{Modifier Holder}}"
                  },
                  "relatedGroup": "HPParentChild"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}} - {{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    "1687681259_FantasticStory_BaseAbility_2250": {
      "fileName": "1687681259_FantasticStory_BaseAbility_2250",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Variable with Buff Configs",
          "finalKeyArray": [
            {
              "name": "ADF_1",
              "value": 100
            },
            {
              "name": "ADF_2",
              "value": 0.3
            },
            {
              "name": "ADF_3",
              "value": 0.03
            },
            {
              "name": "ADF_4",
              "value": 0.05
            },
            {
              "name": "ADF_5",
              "value": 0.05
            },
            {
              "name": "ADF_6",
              "value": 100
            },
            {
              "name": "ADF_7",
              "value": 1
            },
            {
              "name": "ADF_8",
              "value": 10
            },
            {
              "name": "ADF_9",
              "value": 0.3
            },
            {
              "name": "ADF_10",
              "value": 0.2
            },
            {
              "name": "ADF_11",
              "value": 0.8
            },
            {
              "name": "ADF_12",
              "value": 0.5
            },
            {
              "name": "ADF_13",
              "value": 0.01
            },
            {
              "name": "ADF_14",
              "value": 2
            },
            {
              "name": "ADF_15",
              "value": 20
            },
            {
              "name": "ADF_16",
              "value": 4
            }
          ]
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2260",
          "parameters": {
            "ADF_1_Get": {
              "operator": "Variables[0] (ADF_1) || RETURN",
              "displayLines": "ADF_1",
              "constants": [],
              "variables": [
                "ADF_1"
              ]
            },
            "ADF_2_Get": {
              "operator": "Variables[0] (ADF_2) || RETURN",
              "displayLines": "ADF_2",
              "constants": [],
              "variables": [
                "ADF_2"
              ]
            },
            "ADF_3_Get": {
              "operator": "Variables[0] (ADF_3) || RETURN",
              "displayLines": "ADF_3",
              "constants": [],
              "variables": [
                "ADF_3"
              ]
            },
            "ADF_4_Get": {
              "operator": "Variables[0] (ADF_4) || RETURN",
              "displayLines": "ADF_4",
              "constants": [],
              "variables": [
                "ADF_4"
              ]
            },
            "ADF_5_Get": {
              "operator": "Variables[0] (ADF_5) || RETURN",
              "displayLines": "ADF_5",
              "constants": [],
              "variables": [
                "ADF_5"
              ]
            },
            "ADF_6_Get": {
              "operator": "Variables[0] (ADF_6) || RETURN",
              "displayLines": "ADF_6",
              "constants": [],
              "variables": [
                "ADF_6"
              ]
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2260_BaseAddOn",
          "parameters": {
            "ADF_1_Get": {
              "operator": "Variables[0] (ADF_7) || RETURN",
              "displayLines": "ADF_7",
              "constants": [],
              "variables": [
                "ADF_7"
              ]
            },
            "ADF_2_Get": {
              "operator": "Variables[0] (ADF_8) || RETURN",
              "displayLines": "ADF_8",
              "constants": [],
              "variables": [
                "ADF_8"
              ]
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2260_BeforeFever",
          "parameters": {
            "ADF_1_Get": {
              "operator": "Variables[0] (ADF_9) || RETURN",
              "displayLines": "ADF_9",
              "constants": [],
              "variables": [
                "ADF_9"
              ]
            },
            "ADF_2_Get": {
              "operator": "Variables[0] (ADF_10) || RETURN",
              "displayLines": "ADF_10",
              "constants": [],
              "variables": [
                "ADF_10"
              ]
            },
            "ADF_3_Get": {
              "operator": "Variables[0] (ADF_16) || RETURN",
              "displayLines": "ADF_16",
              "constants": [],
              "variables": [
                "ADF_16"
              ]
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2260_EnterFever",
          "parameters": {
            "ADF_1_Get": {
              "operator": "Variables[0] (ADF_11) || RETURN",
              "displayLines": "ADF_11",
              "constants": [],
              "variables": [
                "ADF_11"
              ]
            },
            "ADF_2_Get": {
              "operator": "Variables[0] (ADF_12) || RETURN",
              "displayLines": "ADF_12",
              "constants": [],
              "variables": [
                "ADF_12"
              ]
            },
            "ADF_3_Get": {
              "operator": "Variables[0] (ADF_13) || RETURN",
              "displayLines": "ADF_13",
              "constants": [],
              "variables": [
                "ADF_13"
              ]
            },
            "ADF_4_Get": {
              "operator": "Variables[0] (ADF_14) || RETURN",
              "displayLines": "ADF_14",
              "constants": [],
              "variables": [
                "ADF_14"
              ]
            },
            "ADF_5_Get": {
              "operator": "Variables[0] (ADF_15) || RETURN",
              "displayLines": "ADF_15",
              "constants": [],
              "variables": [
                "ADF_15"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "1687681259_BE_BattleEvents": {
      "fileName": "1687681259_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 30501,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEvent_FantasticStory_BaseAbility_Standard"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "barType": 3
        }
      ],
      "references": []
    }
  }
}