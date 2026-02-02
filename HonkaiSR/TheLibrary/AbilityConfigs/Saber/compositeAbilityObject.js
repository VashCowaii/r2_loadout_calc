const compositeAbilityObject = {
  "fullCharacterName": "Saber",
  "trimCharacterName": "Saber",
  "abilityList": [
    "Saber_Saber_TechniqueInLevel",
    "Saber_Saber_PassiveAbility01",
    "Saber_Saber_Ability03_Part02",
    "Saber_Saber_Ability03_Part01",
    "Saber_Saber_Ability03_EnterReady",
    "Saber_Saber_Ability02_Part02",
    "Saber_Saber_Ability02_Part01",
    "Saber_Saber_Ability11_Part02",
    "Saber_Saber_Ability11_Part01",
    "Saber_Saber_Ability01_Part02",
    "Saber_Saber_Ability01_Part01",
    "Saber_Modifiers",
    "Saber_Functions"
  ],
  "abilityObject": {
    "Saber_Saber_TechniqueInLevel": {
      "fileName": "Saber_Saber_TechniqueInLevel",
      "childAbilityList": [
        "Saber_Saber_TechniqueInLevel"
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
          "modifier": "Technique_Saber_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Saber_TechniqueUsage_Bonus[<span class=\"descriptionNumberColor\">Behold, the King of Knights</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Behold, the King of Knights",
          "statusName": "Behold, the King of Knights"
        },
        {
          "name": "Modifier Construction",
          "for": "Technique_Saber_Modifier",
          "execute": [
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_TechniqueUsage_Bonus[<span class=\"descriptionNumberColor\">Behold, the King of Knights</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.35) || RETURN",
                          "displayLines": "0.35",
                          "constants": [],
                          "variables": [
                            0.35
                          ]
                        }
                      }
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "DV_SurgePoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                        "displayLines": "DV_SurgePoint",
                        "constants": [],
                        "variables": [
                          "DV_SurgePoint"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Crown of the Star"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.04) || RETURN",
                              "displayLines": "0.04",
                              "constants": [],
                              "variables": [
                                0.04
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          }
                        }
                      ]
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
                          "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (15) || RETURN",
                            "displayLines": "15",
                            "constants": [],
                            "variables": [
                              15
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.01) || RETURN",
                              "displayLines": "0.01",
                              "constants": [],
                              "variables": [
                                0.01
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
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
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Saber_Saber_PassiveAbility01": {
      "fileName": "Saber_Saber_PassiveAbility01",
      "childAbilityList": [
        "Saber_Activity_FateStory_Saber_Insert_Camera",
        "Saber_Activity_FateStory_Saber_Insert_Part01",
        "Saber_Activity_FateStory_Saber_Insert_Part02",
        "Saber_Saber_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
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
          "modifier": "Saber_AIFlag"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "DV_SurgePoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_SurgePointMax",
          "value": 99
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
            "displayLines": "DV_SurgePointMax",
            "constants": [],
            "variables": [
              "DV_SurgePointMax"
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 4
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Saber_PassiveAbility01"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Knight of the Dragon"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Saber_Trace01_Bonus[<span class=\"descriptionNumberColor\">Knight of the Dragon</span>]",
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Blessing of the Lake"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Saber_00_EntityMaxStockSP",
                  "value": {
                    "operator": "Variables[0] (200) || RETURN",
                    "displayLines": "200",
                    "constants": [],
                    "variables": [
                      200
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Saber_00_EntityMaxStockSP",
                  "value": {
                    "operator": "Variables[0] (120) || RETURN",
                    "displayLines": "120",
                    "constants": [],
                    "variables": [
                      120
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
              "modifier": "Saber_Passive_ReturnSpValue"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Saber_Passive_StockSpValue"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Crown of the Star"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Saber_Trace03"
            }
          ]
        },
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
              "modifier": "Saber_Eidolon1"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Saber_Eidolon4[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]"
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
              "modifier": "Saber_Eidolon6"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Saber_Trace03_CD",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Trace03",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Trace03_Bonus[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Trace02",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_PassiveAbility01",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Saber_SurgeCheck",
                  "variables": {
                    "_MaxSP": 0,
                    "_C_SP": 0,
                    "DV_SurgePointShow": 0,
                    "_SP_R": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
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
                      "modifier": "Saber_Passive_Bonus[<span class=\"descriptionNumberColor\">Dragon Reactor Core</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
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
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "DV_SurgePoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Crown of the Star"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.04) || RETURN",
                              "displayLines": "0.04",
                              "constants": [],
                              "variables": [
                                0.04
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          }
                        }
                      ]
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
                          "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (15) || RETURN",
                            "displayLines": "15",
                            "constants": [],
                            "variables": [
                              15
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.01) || RETURN",
                              "displayLines": "0.01",
                              "constants": [],
                              "variables": [
                                0.01
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                    "displayLines": "DV_SurgePoint",
                    "constants": [],
                    "variables": [
                      "DV_SurgePoint"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Saber_SurgeCheck",
                  "variables": {
                    "_MaxSP": 0,
                    "_C_SP": 0,
                    "DV_SurgePointShow": 0,
                    "_SP_R": 0
                  }
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
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "DV_SurgePoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                        "displayLines": "DV_SurgePoint",
                        "constants": [],
                        "variables": [
                          "DV_SurgePoint"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
                        "displayLines": "DV_SurgePointMax",
                        "constants": [],
                        "variables": [
                          "DV_SurgePointMax"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 4
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Crown of the Star"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.04) || RETURN",
                              "displayLines": "0.04",
                              "constants": [],
                              "variables": [
                                0.04
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        }
                      ]
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
                          "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (15) || RETURN",
                            "displayLines": "15",
                            "constants": [],
                            "variables": [
                              15
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.01) || RETURN",
                              "displayLines": "0.01",
                              "constants": [],
                              "variables": [
                                0.01
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
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
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Blessing of the Lake"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Energy%",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
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
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy Value",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (0.6) || MUL || RETURN",
                        "displayLines": "(_MaxSP * 0.6)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          0.6
                        ]
                      },
                      "adjustment": "Set"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Saber_SurgeCheck",
                  "variables": {
                    "_MaxSP": 0,
                    "_C_SP": 0,
                    "DV_SurgePointShow": 0,
                    "_SP_R": 0
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_SurgePoint",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_SurgePoint",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
                          "counter": {
                            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                            "displayLines": "DV_SurgePoint",
                            "constants": [],
                            "variables": [
                              "DV_SurgePoint"
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
                          "modifier": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Saber_SurgeCheck",
                      "variables": {
                        "_MaxSP": 0,
                        "_C_SP": 0,
                        "DV_SurgePointShow": 0,
                        "_SP_R": 0
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_SurgePoint",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
                          "counter": {
                            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                            "displayLines": "DV_SurgePoint",
                            "constants": [],
                            "variables": [
                              "DV_SurgePoint"
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
                          "modifier": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Saber_SurgeCheck",
                      "variables": {
                        "_MaxSP": 0,
                        "_C_SP": 0,
                        "DV_SurgePointShow": 0,
                        "_SP_R": 0
                      }
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
          "for": "Saber_Energy_Count[<span class=\"descriptionNumberColor\">Core Resonance</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "description": "Currently possesses <span class=\"descriptionNumberColor\">MDF_Layer</span> point(s) of \"Core Resonance.\"",
          "type": "Other",
          "statusName": "Core Resonance"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Trace01_Bonus[<span class=\"descriptionNumberColor\">Knight of the Dragon</span>]",
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
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Knight of the Dragon"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Saber_00_EntityStockSPForShow",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (Saber_00_EntityStockSPForShow) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(Saber_00_EntityStockSPForShow)",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "Saber_00_EntityStockSPForShow"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "description": "<span class=\"descriptionNumberColor\">Saber_00_EntityStockSPForShow</span> overflow Energy accumulated.",
          "type": "Other",
          "statusName": "Blessing of the Lake"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Passive_StockSpValue",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPChangeValue"
                },
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPChangeValueRaw",
                  "type": "RawDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SPChangeValue",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (_SPChangeValueRaw) || RETURN",
                      "displayLines": "_SPChangeValueRaw",
                      "constants": [],
                      "variables": [
                        "_SPChangeValueRaw"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_SPChangeValueRaw",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Saber_00_EntityCurrentSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Saber_00_EntityCurrentSP",
                          "value": {
                            "operator": "Variables[0] (Saber_00_EntityCurrentSP) || Variables[1] (_SPChangeValue) || SUB || Variables[2] (_SPChangeValueRaw) || ADD || RETURN",
                            "displayLines": "((Saber_00_EntityCurrentSP - _SPChangeValue) + _SPChangeValueRaw)",
                            "constants": [],
                            "variables": [
                              "Saber_00_EntityCurrentSP",
                              "_SPChangeValue",
                              "_SPChangeValueRaw"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "Saber_00_EntityMaxSP",
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
                            "value1": "Saber_00_EntityCurrentSP",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (Saber_00_EntityMaxSP) || RETURN",
                              "displayLines": "Saber_00_EntityMaxSP",
                              "constants": [],
                              "variables": [
                                "Saber_00_EntityMaxSP"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "Saber_00_EntityStockSP",
                              "value": {
                                "operator": "Variables[0] (Saber_00_EntityStockSP) || Variables[1] (Saber_00_EntityCurrentSP) || ADD || Variables[2] (Saber_00_EntityMaxSP) || SUB || RETURN",
                                "displayLines": "((Saber_00_EntityStockSP + Saber_00_EntityCurrentSP) - Saber_00_EntityMaxSP)",
                                "constants": [],
                                "variables": [
                                  "Saber_00_EntityStockSP",
                                  "Saber_00_EntityCurrentSP",
                                  "Saber_00_EntityMaxSP"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Saber_00_EntityStockSP",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (Saber_00_EntityMaxStockSP) || RETURN",
                                  "displayLines": "Saber_00_EntityMaxStockSP",
                                  "constants": [],
                                  "variables": [
                                    "Saber_00_EntityMaxStockSP"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "Saber_00_EntityStockSP",
                                  "value": {
                                    "operator": "Variables[0] (Saber_00_EntityMaxStockSP) || RETURN",
                                    "displayLines": "Saber_00_EntityMaxStockSP",
                                    "constants": [],
                                    "variables": [
                                      "Saber_00_EntityMaxStockSP"
                                    ]
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
                                "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Copy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                                  "variable": "Saber_00_EntityStockSPForShow",
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variable2": "_Current_Show_Value"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "_Current_Show_Value",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                      "displayLines": "Saber_00_EntityStockSP",
                                      "constants": [],
                                      "variables": [
                                        "Saber_00_EntityStockSP"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                                      "valuePerStack": {
                                        "value_0_Saber_EntityStockSPForShow": {
                                          "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                          "displayLines": "Saber_00_EntityStockSP",
                                          "constants": [],
                                          "variables": [
                                            "Saber_00_EntityStockSP"
                                          ]
                                        }
                                      }
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]",
                                  "valuePerStack": {
                                    "value_0_Saber_EntityStockSPForShow": {
                                      "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                                      "displayLines": "Saber_00_EntityStockSP",
                                      "constants": [],
                                      "variables": [
                                        "Saber_00_EntityStockSP"
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Passive_ReturnSpValue",
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
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Saber_00_EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Temp_Return_SP",
                      "value": {
                        "operator": "Variables[0] (Saber_00_EntityStockSP) || RETURN",
                        "displayLines": "Saber_00_EntityStockSP",
                        "constants": [],
                        "variables": [
                          "Saber_00_EntityStockSP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Saber_00_EntityStockSP",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Saber_Passive_ExceedSpStatus[<span class=\"descriptionNumberColor\">Blessing of the Lake</span>]"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_Temp_Return_SP) || RETURN",
                        "displayLines": "_Temp_Return_SP",
                        "constants": [],
                        "variables": [
                          "_Temp_Return_SP"
                        ]
                      },
                      "isFixed": "(Fixed)"
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
          "for": "Saber_Eidolon1",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.6"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "DV_SurgePoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                        "displayLines": "DV_SurgePoint",
                        "constants": [],
                        "variables": [
                          "DV_SurgePoint"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Crown of the Star"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.04) || RETURN",
                              "displayLines": "0.04",
                              "constants": [],
                              "variables": [
                                0.04
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        }
                      ]
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
                          "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (15) || RETURN",
                            "displayLines": "15",
                            "constants": [],
                            "variables": [
                              15
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.01) || RETURN",
                              "displayLines": "0.01",
                              "constants": [],
                              "variables": [
                                0.01
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
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
          "for": "Saber_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_PropertyValue)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases Wind RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Increases Wind RES PEN.",
          "statusName": "The Saga of Sixteen Winter Days"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Eidolon4[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Saber_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">The Saga of Sixteen Winter Days</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.04) || RETURN",
                          "displayLines": "0.04",
                          "constants": [],
                          "variables": [
                            0.04
                          ]
                        },
                        "MDF_Value_Base": {
                          "operator": "Variables[0] (0.08) || RETURN",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
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
          "latentQueue": [],
          "description": "Wind RES PEN increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_Ratio</span>.",
          "type": "Buff",
          "statusName": "The Saga of Sixteen Winter Days"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Eidolon6",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
                          "value": "0.2"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                  "counter": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
          "counter": 1,
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                          "function": "Add"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": "Saber_Eidolon6_Count[<span class=\"descriptionNumberColor\">The Long Fated Night</span>]",
                          "value": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (300) || RETURN",
                            "displayLines": "300",
                            "constants": [],
                            "variables": [
                              300
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "After using Ultimate <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s), regenerates a fixed amount of <span class=\"descriptionNumberColor\">#SkillRank_Rank06_P3_Amount</span> Energy.",
          "type": "Other",
          "statusName": "The Long Fated Night"
        }
      ]
    },
    "Saber_Saber_Ability03_Part02": {
      "fileName": "Saber_Saber_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_S03_Stance_Ratio",
          "value": {
            "operator": "Constants[0] (1) || Variables[0] (10) || DIV || RETURN",
            "displayLines": "(1 / 10)",
            "constants": [
              1
            ],
            "variables": [
              10
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (2.8) || RETURN",
              "displayLines": "2.8",
              "constants": [],
              "variables": [
                2.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Ultimate"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (10) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(10 - 1)",
            "constants": [
              1
            ],
            "variables": [
              10
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (1.1) || RETURN",
                      "displayLines": "1.1",
                      "constants": [],
                      "variables": [
                        1.1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value",
                        "_S03_Stance_Ratio"
                      ]
                    },
                    "Tags": [
                      "Ultimate"
                    ]
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (1.1) || RETURN",
                          "displayLines": "1.1",
                          "constants": [],
                          "variables": [
                            1.1
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                          "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value",
                            "_S03_Stance_Ratio"
                          ]
                        },
                        "Tags": [
                          "Ultimate"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP",
            "compareType": ">",
            "value2": 0
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (1.1) || RETURN",
                  "displayLines": "1.1",
                  "constants": [],
                  "variables": [
                    1.1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "_S03_Stance_Ratio"
                  ]
                },
                "Tags": [
                  "Ultimate"
                ]
              }
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
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
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (1.1) || RETURN",
                      "displayLines": "1.1",
                      "constants": [],
                      "variables": [
                        1.1
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Variables[1] (_S03_Stance_Ratio) || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * _S03_Stance_Ratio)",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value",
                        "_S03_Stance_Ratio"
                      ]
                    },
                    "Tags": [
                      "Ultimate"
                    ]
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Saber_Wind_Ability03_buff"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Saber_Saber_Ability03_Part01": {
      "fileName": "Saber_Saber_Ability03_Part01",
      "childAbilityList": [
        "Saber_Saber_Ability03_Camera",
        "Saber_Saber_Ability03_Part01",
        "Saber_Saber_Ability03_Part02",
        "Saber_Saber_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        20,
        40,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Saber_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Saber_Saber_Ability03_EnterReady": {
      "fileName": "Saber_Saber_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Saber_Saber_Ability02_Part02": {
      "fileName": "Saber_Saber_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "S02_Point",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "S02_SP_R",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "S02_MSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "S02_CSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "S02_MSP",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (S02_CSP) || Variables[1] (8) || Variables[2] (S02_Point) || MUL || ADD || Constants[0] (30) || Variables[3] (S02_SP_R) || MUL || ADD || RETURN",
                  "displayLines": "((S02_CSP + (8 * S02_Point)) + (30 * S02_SP_R))",
                  "constants": [
                    30
                  ],
                  "variables": [
                    "S02_CSP",
                    8,
                    "S02_Point",
                    "S02_SP_R"
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "DV_SurgePoint",
                "compareType": "<=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "DV_SurgePoint",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Crown of the Star"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.04) || RETURN",
                      "displayLines": "0.04",
                      "constants": [],
                      "variables": [
                        0.04
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
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
                  "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.01) || RETURN",
                      "displayLines": "0.01",
                      "constants": [],
                      "variables": [
                        0.01
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_SurgePoint",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
                  "displayLines": "DV_SurgePointMax",
                  "constants": [],
                  "variables": [
                    "DV_SurgePointMax"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "DV_SurgePoint",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
                    "displayLines": "DV_SurgePointMax",
                    "constants": [],
                    "variables": [
                      "DV_SurgePointMax"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_SurgePointUse",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_ExtraDmgRatio",
              "value": 0
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_SurgePointUse",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
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
                  "variableName": "DV_ExtraDmgRatio",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePointUse) || Variables[1] (0.07) || Variables[2] (0.14) || ADD || MUL || RETURN",
                    "displayLines": "(DV_SurgePointUse * (0.07 + 0.14))",
                    "constants": [],
                    "variables": [
                      "DV_SurgePointUse",
                      0.07,
                      0.14
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_ExtraDmgRatio",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePointUse) || Variables[1] (0.14) || MUL || RETURN",
                    "displayLines": "(DV_SurgePointUse * 0.14)",
                    "constants": [],
                    "variables": [
                      "DV_SurgePointUse",
                      0.14
                    ]
                  }
                }
              ]
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                1.5,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * ST Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Skill"
            ],
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                0.75,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * Blast Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": [
              "Skill"
            ]
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                1.5,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * ST Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Skill"
            ],
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                0.75,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * Blast Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": [
              "Skill"
            ]
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                1.5,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * ST Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Skill"
            ],
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
              "constants": [
                0.1
              ],
              "variables": [
                0.75,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
              "displayLines": "(0.1 * Blast Toughness Value)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": [
              "Skill"
            ]
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.7) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.7 * (1.5 + DV_ExtraDmgRatio))",
              "constants": [
                0.7
              ],
              "variables": [
                1.5,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.7) || Variables[0] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "(0.7 * ST Toughness Value)",
              "constants": [
                0.7
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Skill"
            ],
            "EnergyGainPercent": "70%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Constants[0] (0.7) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
              "displayLines": "(0.7 * (0.75 + DV_ExtraDmgRatio))",
              "constants": [
                0.7
              ],
              "variables": [
                0.75,
                "DV_ExtraDmgRatio"
              ]
            },
            "Toughness": {
              "operator": "Constants[0] (0.7) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
              "displayLines": "(0.7 * Blast Toughness Value)",
              "constants": [
                0.7
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": [
              "Skill"
            ]
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Check_Surge_Use_Before",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "DV_SurgePoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Constants[0] (0) || Variables[0] (DV_SurgePointUse) || SUB || RETURN",
            "displayLines": "(0 - DV_SurgePointUse)",
            "constants": [
              0
            ],
            "variables": [
              "DV_SurgePointUse"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_SurgePointUse",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (8) || Variables[1] (Check_Surge_Use_Before) || Variables[2] (DV_SurgePoint) || SUB || MUL || RETURN",
                "displayLines": "(8 * (Check_Surge_Use_Before - DV_SurgePoint))",
                "constants": [],
                "variables": [
                  8,
                  "Check_Surge_Use_Before",
                  "DV_SurgePoint"
                ]
              },
              "isFixed": "(Fixed)"
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Saber_Saber_Ability02_Part01": {
      "fileName": "Saber_Saber_Ability02_Part01",
      "childAbilityList": [
        "Saber_Saber_Ability02_Camera",
        "Saber_Saber_Ability02_Part01",
        "Saber_Saber_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Saber_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Saber_Saber_Ability11_Part02": {
      "fileName": "Saber_Saber_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "S11_Alive_Count",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": "Under Control Effect",
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Knight of the Dragon"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": "Under Control Effect",
          "failed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "DV_SurgePoint",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Crown of the Star"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.04) || RETURN",
                      "displayLines": "0.04",
                      "constants": [],
                      "variables": [
                        0.04
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
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
                  "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.01) || RETURN",
                      "displayLines": "0.01",
                      "constants": [],
                      "variables": [
                        0.01
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Basic ATK"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "S11_Alive_Count",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "S11_Alive_Count",
                "compareType": ">",
                "value2": 2
              },
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Basic ATK"
                    ]
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (2.2) || RETURN",
                  "displayLines": "2.2",
                  "constants": [],
                  "variables": [
                    2.2
                  ]
                },
                "Toughness": null,
                "Tags": [
                  "Basic ATK"
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": [
              "Basic ATK"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": "Under Control Effect",
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Saber_Wind_Ability03_buff"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Saber_Saber_Ability11_Part01": {
      "fileName": "Saber_Saber_Ability11_Part01",
      "childAbilityList": [
        "Saber_Saber_Ability11_Camera",
        "Saber_Saber_Ability11_Part01",
        "Saber_Saber_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Saber_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": "Under Control Effect"
        }
      ],
      "references": []
    },
    "Saber_Saber_Ability01_Part02": {
      "fileName": "Saber_Saber_Ability01_Part02",
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Saber_Saber_Ability01_Part01": {
      "fileName": "Saber_Saber_Ability01_Part01",
      "childAbilityList": [
        "Saber_Saber_Ability01_Camera",
        "Saber_Saber_Ability01_Part01",
        "Saber_Saber_Ability01_Part02"
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
          "ability": "Saber_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Saber_Modifiers": {
      "fileName": "Saber_Modifiers",
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
          "for": "Saber_Wind_Ability03_buff",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                    "target": "{{Caster}}"
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
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                },
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_DisableAbility",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Ability03_CD_02",
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
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Knight of the Dragon"
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
          "for": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "When Saber has \"Core Resonance,\" and if using Skill and consuming \"Core Resonance\" can fully regenerate her Energy, consumes \"Mana Burst\" to cause Saber to immediately take action and recover 1 Skill Point for allies.",
          "type": "Other",
          "effectName": "Mana Burst",
          "statusName": "Mana Burst"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Trace03_Bonus[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
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
          "statusName": "Crown of the Star"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Passive_Bonus[<span class=\"descriptionNumberColor\">Dragon Reactor Core</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Dragon Reactor Core"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_AIFlag",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
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
                      "value": "-(MDF_PropertyValue * MDF_Layer)"
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
          "description": "Each stack causes DMG dealt by Saber to ignore <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P2_Ratio</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "The Lost Oath of the Round Table"
        },
        {
          "name": "Modifier Construction",
          "for": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
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
          "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Crown of the Star"
        }
      ],
      "references": []
    },
    "Saber_Functions": {
      "fileName": "Saber_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "function_Saber_SurgeCheck",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_SurgePointShow",
              "value": {
                "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                "displayLines": "DV_SurgePoint",
                "constants": [],
                "variables": [
                  "DV_SurgePoint"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_SP_R",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_C_SP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
            },
            {
              "name": "Update UI Preview",
              "show": "Show",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "previewType": "Energy Gain",
              "previewValue": {
                "operator": "Variables[0] (8) || Variables[1] (DV_SurgePointShow) || MUL || Constants[0] (30) || Variables[2] (_SP_R) || MUL || ADD || RETURN",
                "displayLines": "((8 * DV_SurgePointShow) + (30 * _SP_R))",
                "constants": [
                  30
                ],
                "variables": [
                  8,
                  "DV_SurgePointShow",
                  "_SP_R"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_SurgePoint",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_MaxSP",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_C_SP) || Variables[1] (8) || Variables[2] (DV_SurgePointShow) || MUL || ADD || Constants[0] (30) || Variables[3] (_SP_R) || MUL || ADD || RETURN",
                      "displayLines": "((_C_SP + (8 * DV_SurgePointShow)) + (30 * _SP_R))",
                      "constants": [
                        30
                      ],
                      "variables": [
                        "_C_SP",
                        8,
                        "DV_SurgePointShow",
                        "_SP_R"
                      ]
                    }
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "set": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Ability03_CD_02"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_SurgePoint",
                    "compareType": "<=",
                    "value2": 0
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Saber_Wind_Ability03_buff"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_MaxSP",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (_C_SP) || Variables[1] (8) || Variables[2] (DV_SurgePointShow) || MUL || ADD || Constants[0] (30) || Variables[3] (_SP_R) || MUL || ADD || RETURN",
                      "displayLines": "((_C_SP + (8 * DV_SurgePointShow)) + (30 * _SP_R))",
                      "constants": [
                        30
                      ],
                      "variables": [
                        "_C_SP",
                        8,
                        "DV_SurgePointShow",
                        "_SP_R"
                      ]
                    }
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
                  "display": "Hide",
                  "abilityName": "Skill"
                }
              ],
              "failed": [
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}