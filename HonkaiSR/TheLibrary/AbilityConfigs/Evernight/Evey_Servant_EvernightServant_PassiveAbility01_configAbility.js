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
      "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1946909591\">function_Evernight_Group_SizeControl_STB</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1561903532\">Memosprite_EvernightServant_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1745226180\">Memosprite_EvernightServant_Sync</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1040270840\">Memosprite_EvernightServant_PartnerControl</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1298744969\">Memosprite_EvernightServant_InsertControl</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"51738454\">Memosprite_EvernightServant_View</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1232599773\">Memosprite_EvernightServant_PassiveBonus_Aura</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1842559180\">Memosprite_EvernightServant_TryKill</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2112363426\">Memosprite_EvernightServant_HitAnimControl</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"339933329\">Memosprite_EvernightServant_Ability11_StancePreshow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1971728394\">Memosprite_EvernightServant_Ability11_LoseHPPreshow</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1040270840\">Memosprite_EvernightServant_PartnerControl</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1298744969\">Memosprite_EvernightServant_InsertControl</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1745226180\">Memosprite_EvernightServant_Sync</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__51738454\">Memosprite_EvernightServant_View</a>",
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1946909591\">function_Evernight_Group_SizeControl_STB</a>"
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
              "functionName": "<a class=\"gTempYellow\" id=\"724548436\">function_Evernight_Group_FollowControl_ViewMode</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1711321550\">function_Evernight_Group_FollowControl_00</a>"
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1561903532\">Memosprite_EvernightServant_Passive</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"132344239\">Evernight_Ability02_ChangeSkill</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"132344239\">Evernight_Ability02_ChangeSkill</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2112363426\">Memosprite_EvernightServant_HitAnimControl</a>",
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1946909591\">function_Evernight_Group_SizeControl_STB</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1946909591\">function_Evernight_Group_SizeControl_STB</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__339933329\">Memosprite_EvernightServant_Ability11_StancePreshow</a>",
      "stackData": [],
      "latentQueue": [
        "_Partner_Size"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1232599773\">Memosprite_EvernightServant_PassiveBonus_Aura</a>",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1678641611\">Memosprite_EvernightServant_PassiveBonus</a>[<span class=\"descriptionNumberColor\">Solitude, Drifting, In Murk</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1971728394\">Memosprite_EvernightServant_Ability11_LoseHPPreshow</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"683715754\">Memosprite_EvernightServant_TriggerNormal</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1842559180\">Memosprite_EvernightServant_TryKill</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-1586544037\">Evernight_TryKillServant_Flag</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1586544037\">Evernight_TryKillServant_Flag</a>"
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