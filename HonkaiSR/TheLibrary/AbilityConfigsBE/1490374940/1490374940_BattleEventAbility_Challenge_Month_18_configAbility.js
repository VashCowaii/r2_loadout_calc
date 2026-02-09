const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_18",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 31003,
      "variables": null,
      "whenCreated": [
        {
          "name": "Show Attack Time",
          "time": 0,
          "on": null,
          "show": true
        },
        {
          "name": "Create AV Link",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "linkOrder": -1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-593706658\">BattleEventAbility_Challenge_Month_BETag</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"985901670\">Modifier_BattleEventAbility_Challenge_Month_18</a>",
      "valuePerStack": {
        "BattleEvent_P1_ADF": {
          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
          "displayLines": "#BattleEvent_P1_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P1_ADF"
          ]
        },
        "BattleEvent_P2_ADF": {
          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
          "displayLines": "#BattleEvent_P2_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P2_ADF"
          ]
        },
        "BattleEvent_P3_ADF": {
          "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
          "displayLines": "#BattleEvent_P3_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P3_ADF"
          ]
        }
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "scope": "TargetEntity",
      "variableName": "EntityCurrentSP"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "scope": "TargetEntity",
      "variableName": "EntityStockSP"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "scope": "TargetEntity",
      "variableName": "CurrentLayerAddSP"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "scope": "TargetEntity",
      "variableName": "EntityMaxSP"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1972510028\">Modifier_BattleEventAbility_Challenge_Month_18_Sub3</a>",
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
                  "name": "Define Custom Variable",
                  "variableName": "CurrentLayerAddSP",
                  "value": {
                    "operator": "Variables[0] (CurrentLayerAddSP) || Variables[1] (BattleEvent_P3_ADF_Get) || MUL || RETURN",
                    "displayLines": "(CurrentLayerAddSP * BattleEvent_P3_ADF_Get)",
                    "constants": [],
                    "variables": [
                      "CurrentLayerAddSP",
                      "BattleEvent_P3_ADF_Get"
                    ]
                  }
                },
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
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityCurrentSP",
                  "value": {
                    "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (CurrentLayerAddSP) || ADD || RETURN",
                    "displayLines": "(EntityCurrentSP + CurrentLayerAddSP)",
                    "constants": [],
                    "variables": [
                      "EntityCurrentSP",
                      "CurrentLayerAddSP"
                    ]
                  }
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
                        "operator": "Variables[0] (CurrentLayerAddSP) || RETURN",
                        "displayLines": "CurrentLayerAddSP",
                        "constants": [],
                        "variables": [
                          "CurrentLayerAddSP"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1989287647\">Modifier_BattleEventAbility_Challenge_Month_18_Sub4</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1955732409\">Modifier_BattleEventAbility_Challenge_Month_18_Sub2</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1989287647\">Modifier_BattleEventAbility_Challenge_Month_18_Sub4</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1989287647\">Modifier_BattleEventAbility_Challenge_Month_18_Sub4</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "description": "At the start of each Cycle, regenerate Energy equal to 100% of their respective Max Energy to allies who have <span class=\"descriptionNumberColor\">#BattleEvent_P2_ADF</span> or more stacks of Memory Imprint.",
      "type": "Buff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__985901670\">Modifier_BattleEventAbility_Challenge_Month_18</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "ability": "BattleEventAbility_Camear_AllLightTeam",
              "isTrigger": true
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)v2}}"
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "CurrentLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1972510028\">Modifier_BattleEventAbility_Challenge_Month_18_Sub3</a>",
              "valuePerStack": {
                "BattleEvent_P1_ADF_Get": {
                  "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                  "displayLines": "BattleEvent_P1_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P1_ADF"
                  ]
                },
                "BattleEvent_P2_ADF_Get": {
                  "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF"
                  ]
                },
                "BattleEvent_P3_ADF_Get": {
                  "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                  "displayLines": "BattleEvent_P3_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P3_ADF"
                  ]
                },
                "CurrentLayerAddSP": {
                  "operator": "Variables[0] (CurrentLayer) || RETURN",
                  "displayLines": "CurrentLayer",
                  "constants": [],
                  "variables": [
                    "CurrentLayer"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[removeMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1955732409\">Modifier_BattleEventAbility_Challenge_Month_18_Sub2</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
            },
            {
              "name": "Show Attack Time",
              "time": 0,
              "on": null,
              "show": true
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                    "displayLines": "BattleEvent_P1_ADF",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P1_ADF"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "CurrentLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"1785729743\">Modifier_BattleEventAbility_Challenge_Month_18_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (CurrentLayer) || RETURN",
                    "displayLines": "CurrentLayer",
                    "constants": [],
                    "variables": [
                      "CurrentLayer"
                    ]
                  },
                  "on": null,
                  "show": true
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P1_ADF",
        "BattleEvent_P2_ADF",
        "BattleEvent_P3_ADF"
      ],
      "latentQueue": []
    }
  ]
}