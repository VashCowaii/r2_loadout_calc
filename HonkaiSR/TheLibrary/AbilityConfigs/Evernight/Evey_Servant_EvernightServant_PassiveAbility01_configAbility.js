const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_PassiveAbility01",
  "childAbilityList": [
    "Evey_Servant_EvernightServant_PassiveAbility01",
    "Evey_Servant_EvernightServant_PassiveAbility01_Resummon"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "enable": false
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Partner_CountThresHold",
      "value": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Partner_Count_Max",
      "value": {
        "operator": "Variables[0] (16) || RETURN",
        "displayLines": "16",
        "constants": [],
        "variables": [
          16
        ]
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_STB"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_SizeControl_STB"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_Sync"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_PartnerControl"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_InsertControl"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_View"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_PassiveBonus_Aura"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Partner_Size",
      "value": {
        "operator": "Variables[0] (Init_Count) || RETURN",
        "displayLines": "Init_Count",
        "constants": [],
        "variables": [
          "Init_Count"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Partner_Count",
      "value": {
        "operator": "Variables[0] (Init_Count) || RETURN",
        "displayLines": "Init_Count",
        "constants": [],
        "variables": [
          "Init_Count"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_TryKill"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_HitAnimControl"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_Ability11_StancePreshow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_EvernightServant_Ability11_LoseHPPreshow"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_EvernightServant_PartnerControl",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_Partner_Count_Show",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": {
                "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (0.5) || SUB || RETURN",
                "displayLines": "(_Partner_CountThresHold - 0.5)",
                "constants": [
                  0.5
                ],
                "variables": [
                  "_Partner_CountThresHold"
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (0.5) || SUB || RETURN",
                "displayLines": "(_Partner_CountThresHold - 0.5)",
                "constants": [
                  0.5
                ],
                "variables": [
                  "_Partner_CountThresHold"
                ]
              },
              "maxValue": {
                "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (2) || MUL || Constants[1] (0.5) || SUB || RETURN",
                "displayLines": "((_Partner_CountThresHold * 2) - 0.5)",
                "constants": [
                  2,
                  0.5
                ],
                "variables": [
                  "_Partner_CountThresHold"
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (2) || MUL || Constants[1] (0.5) || SUB || RETURN",
                "displayLines": "((_Partner_CountThresHold * 2) - 0.5)",
                "constants": [
                  2,
                  0.5
                ],
                "variables": [
                  "_Partner_CountThresHold"
                ]
              },
              "maxValue": {
                "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (3) || MUL || Constants[1] (0.5) || SUB || RETURN",
                "displayLines": "((_Partner_CountThresHold * 3) - 0.5)",
                "constants": [
                  3,
                  0.5
                ],
                "variables": [
                  "_Partner_CountThresHold"
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (3) || MUL || Constants[1] (0.5) || SUB || RETURN",
                "displayLines": "((_Partner_CountThresHold * 3) - 0.5)",
                "constants": [
                  3,
                  0.5
                ],
                "variables": [
                  "_Partner_CountThresHold"
                ]
              },
              "maxValue": {
                "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (4) || MUL || Constants[1] (0.5) || SUB || RETURN",
                "displayLines": "((_Partner_CountThresHold * 4) - 0.5)",
                "constants": [
                  4,
                  0.5
                ],
                "variables": [
                  "_Partner_CountThresHold"
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (4) || MUL || Constants[1] (0.5) || SUB || RETURN",
                "displayLines": "((_Partner_CountThresHold * 4) - 0.5)",
                "constants": [
                  4,
                  0.5
                ],
                "variables": [
                  "_Partner_CountThresHold"
                ]
              },
              "maxValue": 9999,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_S03"
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
      "for": "Memosprite_EvernightServant_InsertControl",
      "modifierFlags": [
        "EnduranceLogicOnly"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "_Partner_Count_Show",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (4) || MUL || RETURN",
                  "displayLines": "(_Partner_CountThresHold * 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_Partner_CountThresHold"
                  ]
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal"
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
      "for": "Memosprite_EvernightServant_Sync",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "_Partner_Count_Show",
              "value": {
                "operator": "Variables[0] (Init_Count) || RETURN",
                "displayLines": "Init_Count",
                "constants": [],
                "variables": [
                  "Init_Count"
                ]
              }
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_Partner_Count_Show",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": 99999,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "_Partner_Count_Show",
                  "value": {
                    "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
                    "displayLines": "_Partner_Count_Show",
                    "constants": [],
                    "variables": [
                      "_Partner_Count_Show"
                    ]
                  }
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "_Partner_Count_Show",
                  "value": {
                    "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
                    "displayLines": "_Partner_Count_Show",
                    "constants": [],
                    "variables": [
                      "_Partner_Count_Show"
                    ]
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
      "for": "Memosprite_EvernightServant_View",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Is_S11_Ready",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Is_S11_Ready",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_FollowControl_STB"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_SizeControl_STB"
                }
              ]
            },
            {
              "name": "Define Custom Variable (VFX)",
              "variableName": "Is_S11_Ready",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Enter View-Mode [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Evernight_Group_FollowControl_ViewMode"
            }
          ]
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Is_S11_Ready",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_FollowControl_00"
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_FollowControl_STB"
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
      "for": "Memosprite_EvernightServant_Passive",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Evernight_Ability02_ChangeSkill"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
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
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Evernight_Ability02_ChangeSkill"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_EvernightServant_HitAnimControl",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Follow_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Follow_Flag",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_SizeControl_STB"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Follow_Flag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Follow_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Follow_Flag",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_SizeControl_STB"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Partner_Size"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_EvernightServant_Ability11_StancePreshow",
      "stackData": [],
      "latentQueue": [
        "_Partner_Size"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_EvernightServant_PassiveBonus_Aura",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Summoner}}"
          },
          "modifier": "Memosprite_EvernightServant_PassiveBonus[<span class=\"descriptionNumberColor\">Solitude, Drifting, In Murk</span>]",
          "haloStatus": true,
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
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_EvernightServant_Ability11_LoseHPPreshow",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_EvernightServant_TriggerNormal"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "previewType": null,
                  "previewValue": {
                    "operator": "Variables[0] (MDF_MaxHP) || RETURN",
                    "displayLines": "MDF_MaxHP",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Partner_Size"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_EvernightServant_TryKill",
      "execute": [
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "modifier": "Evernight_TryKillServant_Flag"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Evernight_TryKillServant_Flag"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "_Partner_Count_Show",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable2": "Revive_Count"
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Partner_Size"
      ]
    }
  ]
}