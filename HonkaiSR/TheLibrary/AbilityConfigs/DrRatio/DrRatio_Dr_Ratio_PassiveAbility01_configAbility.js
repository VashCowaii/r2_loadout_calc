const configAbility = {
  "fileName": "DrRatio_Dr_Ratio_PassiveAbility01",
  "childAbilityList": [
    "DrRatio_Dr_Ratio_PassiveAbility01",
    "DrRatio_Dr_Ratio_PassiveAbility01_Insert_Part01",
    "DrRatio_Dr_Ratio_PassiveAbility01_Insert_Part02",
    "DrRatio_Dr_Ratio_PassiveAbility01_Insert_Camera",
    "DrRatio_Dr_Ratio_PassiveAbility01_Insert_Camera01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 5,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Dr_Ratio_Rank06_Skill03_InsertMaxCount",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (_Dr_Ratio_Rank06_Skill03_InsertMaxCount) || RETURN",
            "displayLines": "_Dr_Ratio_Rank06_Skill03_InsertMaxCount",
            "constants": [],
            "variables": [
              "_Dr_Ratio_Rank06_Skill03_InsertMaxCount"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Dr_Ratio_PassiveInsertListen"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Deduction"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Dr_Ratio_PointB3_Modifier",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            },
            "MDF_PropertyValueMax": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_PointB3DebuffCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
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
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          {
            "name": "Trace Activated",
            "conditionList": "Summation"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Dr_Ratio_Eidolon1"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Eidolon1",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Dr_Ratio_Ability03_PointB1_Bonus[<span class=\"descriptionNumberColor\">Summation</span>]",
              "stackLimit": {
                "operator": "Variables[0] (6) || Variables[1] (4) || ADD || RETURN",
                "displayLines": "(6 + 4)",
                "constants": [],
                "variables": [
                  6,
                  4
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue01": {
                  "operator": "Variables[0] (0.025) || RETURN",
                  "displayLines": "0.025",
                  "constants": [],
                  "variables": [
                    0.025
                  ]
                },
                "MDF_PropertyValue02": {
                  "operator": "Variables[0] (0.05) || RETURN",
                  "displayLines": "0.05",
                  "constants": [],
                  "variables": [
                    0.05
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              }
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Passive_SpecialMark",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": "Owner of this Modifier",
              "variableName": "MDF_SpecialMark_DebuffNumber"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "MDF_SpecialMark_DebuffNumber",
                "compareType": ">=",
                "value2": 3,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SpecialMark_DebuffChance",
                  "value": 100
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SpecialMark_DebuffChance",
                  "value": {
                    "operator": "Variables[0] (MDF_DebuffChance) || Variables[1] (MDF_SpecialMark_DebuffNumber) || Variables[2] (MDF_DebuffAddChance) || MUL || ADD || Constants[0] (100) || MUL || RETURN",
                    "displayLines": "((MDF_DebuffChance + (MDF_SpecialMark_DebuffNumber * MDF_DebuffAddChance)) * 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "MDF_DebuffChance",
                      "MDF_SpecialMark_DebuffNumber",
                      "MDF_DebuffAddChance"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_SpecialMark_DebuffChance",
                    "compareType": ">=",
                    "value2": 100,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SpecialMark_DebuffChance",
                      "value": 100
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Type Was",
                "statusType": "Debuff"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_SpecialMark_DebuffNumber"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_SpecialMark_DebuffNumber",
                    "compareType": ">=",
                    "value2": 3,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SpecialMark_DebuffChance",
                      "value": 100
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SpecialMark_DebuffChance",
                      "value": {
                        "operator": "Variables[0] (MDF_DebuffChance) || Variables[1] (MDF_SpecialMark_DebuffNumber) || Variables[2] (MDF_DebuffAddChance) || MUL || ADD || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((MDF_DebuffChance + (MDF_SpecialMark_DebuffNumber * MDF_DebuffAddChance)) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "MDF_DebuffChance",
                          "MDF_SpecialMark_DebuffNumber",
                          "MDF_DebuffAddChance"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_SpecialMark_DebuffChance",
                        "compareType": ">=",
                        "value2": 100,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SpecialMark_DebuffChance",
                          "value": 100
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
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Type Was",
                "statusType": "Debuff"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_SpecialMark_DebuffNumber"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_SpecialMark_DebuffNumber",
                    "compareType": ">=",
                    "value2": 3,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SpecialMark_DebuffChance",
                      "value": 100
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SpecialMark_DebuffChance",
                      "value": {
                        "operator": "Variables[0] (MDF_DebuffChance) || Variables[1] (MDF_SpecialMark_DebuffNumber) || Variables[2] (MDF_DebuffAddChance) || MUL || ADD || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((MDF_DebuffChance + (MDF_SpecialMark_DebuffNumber * MDF_DebuffAddChance)) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "MDF_DebuffChance",
                          "MDF_SpecialMark_DebuffNumber",
                          "MDF_DebuffAddChance"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_SpecialMark_DebuffChance",
                        "compareType": ">=",
                        "value2": 100,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SpecialMark_DebuffChance",
                          "value": 100
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
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "MDF_SpecialMark_DebuffChance",
                "compareType": ">=",
                "value2": 100,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target is Unselectable",
                        "target": "Owner of this Modifier",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Current Action Owner",
                        "target2": "Caster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": "Current Visual Target(All)",
                        "conditions": {
                          "name": "Compare: Target",
                          "target": "Owner of this Modifier",
                          "target2": "Use Prior Target(s) Defined"
                        }
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "States_Active"
                        },
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "Select_Selected"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "States_Active"
                        },
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "Select_UnSelected"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
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
                        "name": "Target is Unselectable",
                        "target": "Owner of this Modifier",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Current Action Owner",
                        "target2": "Caster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": "Current Visual Target(All)",
                        "conditions": {
                          "name": "Compare: Target",
                          "target": "Owner of this Modifier",
                          "target2": "Use Prior Target(s) Defined"
                        }
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "States_Normal"
                        },
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "Select_Selected"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "States_Normal"
                        },
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "Select_UnSelected"
                        }
                      ]
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
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_PassiveInsertListen",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": "Use Prior Target(s) Defined",
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Dr_Ratio_Passive_SpecialMark",
                  "valuePerStack": {
                    "MDF_DebuffChance": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
                      ]
                    },
                    "MDF_DebuffAddChance": {
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
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Dr_RatioAttack",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Dr_Ratio_Insert_Flag_Caster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL"
                      },
                      "failed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Dr_Ratio_InsertAbility"
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Hostile Entities (AOE)",
              "modifier": "Dr_Ratio_Passive_SpecialMark",
              "valuePerStack": {
                "MDF_DebuffChance": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "MDF_DebuffAddChance": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Dr_RatioAttack",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "Dr_Ratio_Insert_Flag_Caster"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Dr_Ratio_InsertAbility"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Dr_RatioAttack",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "Dr_Ratio_Insert_Flag_Caster"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Dr_Ratio_InsertAbility"
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
    }
  ]
}