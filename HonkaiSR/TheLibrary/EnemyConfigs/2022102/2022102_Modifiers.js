const configAbility = {
  "fileName": "2022102_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1198716470\">Enemy_W2_Xuanlu_IF_AbilityEX04</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1249049327\">Enemy_W2_Xuanlu_IF_AbilityEX03</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1232271708\">Enemy_W2_Xuanlu_IF_AbilityEX02</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1282604565\">Enemy_W2_Xuanlu_IF_AbilityEX01</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-663973739\">Enemy_XP_Elite02_02_IF_Aura_Sub</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-765841098\">Monster_XP_Elite02_02_RLElite_TryAddDirtyHP</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1628418696\">Enemy_XP_Elite02_02_IF_Aura</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-663973739\">Enemy_XP_Elite02_02_IF_Aura_Sub</a>",
          "aliveOnly": "True",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1559685116\">Monster_XP_Elite02_02_IF_DirtyHPListener</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentDirtyHPRatio"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxDirtyHPRatio",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_14088) || RETURN",
                "displayLines": "UnusedUnderThisBase_14088",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_14088"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentDirtyHPRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentDirtyHPRatio",
              "value": {
                "operator": "Variables[0] (MDF_DirtyHPAddedRatio) || RETURN",
                "displayLines": "MDF_DirtyHPAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DirtyHPAddedRatio"
                ]
              },
              "max": {
                "operator": "Variables[0] (MDF_MaxDirtyHPRatio) || RETURN",
                "displayLines": "MDF_MaxDirtyHPRatio",
                "constants": [],
                "variables": [
                  "MDF_MaxDirtyHPRatio"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "ImmuneDebuff"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentDirtyHPRatio",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_14076) || RETURN",
                        "displayLines": "UnusedUnderThisBase_14076",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_14076"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DirtyHPRatio": {
                          "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentDirtyHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDirtyHPRatio"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_14076) || RETURN",
                        "displayLines": "UnusedUnderThisBase_14076",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_14076"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DirtyHPRatio": {
                          "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentDirtyHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDirtyHPRatio"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_14076) || RETURN",
                    "displayLines": "UnusedUnderThisBase_14076",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_14076"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_14080) || RETURN",
                    "displayLines": "UnusedUnderThisBase_14080",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_14080"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DirtyHPRatio": {
                      "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                      "displayLines": "MDF_CurrentDirtyHPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentDirtyHPRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-663973739\">Enemy_XP_Elite02_02_IF_Aura_Sub</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HPRatioBeforeAttacked"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End [EVENT]",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-663973739\">Enemy_XP_Elite02_02_IF_Aura_Sub</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HPRatioAfterAttacked"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_HPRatioAfterAttacked) || Variables[1] (MDF_HPRatioBeforeAttacked) || SUB || RETURN",
                    "displayLines": "(MDF_HPRatioAfterAttacked - MDF_HPRatioBeforeAttacked)",
                    "constants": [],
                    "variables": [
                      "MDF_HPRatioAfterAttacked",
                      "MDF_HPRatioBeforeAttacked"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (MDF_MaxDirtyHPRatio) || RETURN",
                    "displayLines": "MDF_MaxDirtyHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_MaxDirtyHPRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-765841098\">Monster_XP_Elite02_02_RLElite_TryAddDirtyHP</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_14076) || RETURN",
                        "displayLines": "UnusedUnderThisBase_14076",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_14076"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DirtyHPRatio": {
                          "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentDirtyHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDirtyHPRatio"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-765841098\">Monster_XP_Elite02_02_RLElite_TryAddDirtyHP</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_DirtyHPAddFlag",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1045278801\">Monster_XP_Elite02_02_IF_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__225051539\">Enemy_W2_Xuanlu_IF_Ability08Controller</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_CurrentChargeCount) || RETURN",
                "displayLines": "_CurrentChargeCount",
                "constants": [],
                "variables": [
                  "_CurrentChargeCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxChargeCount) || RETURN",
                "displayLines": "MDF_MaxChargeCount",
                "constants": [],
                "variables": [
                  "MDF_MaxChargeCount"
                ]
              },
              "assignState": "True",
              "state": "Active"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill08"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentChargeCount",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_CurrentChargeCount) || RETURN",
                    "displayLines": "_CurrentChargeCount",
                    "constants": [],
                    "variables": [
                      "_CurrentChargeCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxChargeCount) || RETURN",
                    "displayLines": "MDF_MaxChargeCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxChargeCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
                  "displayLines": "SummonList_ADF_4",
                  "constants": [],
                  "variables": [
                    "SummonList_ADF_4"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentChargeCount",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxChargeCount) || RETURN",
                    "displayLines": "MDF_MaxChargeCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxChargeCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_CurrentChargeCount) || RETURN",
                    "displayLines": "_CurrentChargeCount",
                    "constants": [],
                    "variables": [
                      "_CurrentChargeCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxChargeCount) || RETURN",
                    "displayLines": "MDF_MaxChargeCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxChargeCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_CurrentChargeCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxChargeCount) || RETURN",
                      "displayLines": "MDF_MaxChargeCount",
                      "constants": [],
                      "variables": [
                        "MDF_MaxChargeCount"
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
                      "scope": "TargetEntity",
                      "variableName": "CanUseUltra_IF",
                      "value": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_CurrentChargeCount",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_CurrentChargeCount) || RETURN",
                "displayLines": "_CurrentChargeCount",
                "constants": [],
                "variables": [
                  "_CurrentChargeCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxChargeCount) || RETURN",
                "displayLines": "MDF_MaxChargeCount",
                "constants": [],
                "variables": [
                  "MDF_MaxChargeCount"
                ]
              },
              "assignState": "True",
              "state": "Active"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CanUseUltra_IF",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1336581890\">Enemy_W2_Xuanlu_IF_HintToastController</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-497042210\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1419712934\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast_Break</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1303319556\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast_Normal</a>"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Monster_W2_Xuanlu_IF_AbilityP01_EnterBattleSummon_Part01"
                  },
                  {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Monster_W2_Xuanlu_IF_AbilityP01_PartChange01to02"
                  },
                  {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Monster_W2_Xuanlu_IF_AbilityP01_InfiniteSummon"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-497042210\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-497042210\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": [
                  "Break"
                ],
                "checkType": "And"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1419712934\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast_Break</a>"
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1303319556\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast_Normal</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1419712934\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast_Break</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1303319556\">TaskList_Monster_W2_Xuanlu_IF_RefreshHintToast_Normal</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Minions of Modifier Holder}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 1,
                "conditions": {
                  "name": "Compare: Monster Rank",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "compareType": "=",
                  "value2": 3
                }
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Defeat Elite Enemies to weaken the boss"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Minions of Modifier Holder}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"69681613\">Enemy_W2_Xuanlu_IF_Servant_XuanluPartBonus</a>"
                    }
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Defeat the branches to gain a DMG boost"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Defeat the summons to reduce the boss's Toughness"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1861656723\">Enemy_W2_Xuanlu_IF_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"225051539\">Enemy_W2_Xuanlu_IF_Ability08Controller</a>",
                  "variable": "_CurrentChargeCount",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "_CurrentChargeCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CurrentChargeCount",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxChargeCount) || RETURN",
                      "displayLines": "MDF_MaxChargeCount",
                      "constants": [],
                      "variables": [
                        "MDF_MaxChargeCount"
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
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Action-End Phase",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 3
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 6
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 6
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "DisableAction"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
                  }
                ]
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "AIFlag",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 6
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "AIFlag",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 6
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
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "CanUseUltra_IF",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CanUseUltra_IF",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2055606231\">Enemy_W2_Xuanlu_IF_DamageReduceP2_TGT</a>[<span class=\"descriptionNumberColor\">Boss DMG Reduction</span>]",
      "stackType": "Replace",
      "description": "For every \"Right-Hand Man\" on the field, DMG taken by \"Unwaning Ageless Immortal\" reduces by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce_PerLayer</span>.",
      "type": "Buff",
      "effectName": "Boss DMG Reduction",
      "statusName": "Boss DMG Reduction",
      "stackLimit": 2,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AllDamageReduce",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio_PerLayer) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AllDamageTypeAddedRatio_PerLayer * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio_PerLayer",
                  "_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-283015753\">Enemy_W2_Xuanlu_IF_DamageReduceP2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"425327194\">TaskList_Monster_W2_Xuanlu_IF_DamageReduceP2_Refresh</a>"
            }
          ]
        },
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"425327194\">TaskList_Monster_W2_Xuanlu_IF_DamageReduceP2_Refresh</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-880477462\">Enemy_W4_Xuanlu_IF_ServantLV3_01</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-897255081\">Enemy_W4_Xuanlu_IF_ServantLV3_02</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"425327194\">TaskList_Monster_W2_Xuanlu_IF_DamageReduceP2_Refresh</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__425327194\">TaskList_Monster_W2_Xuanlu_IF_DamageReduceP2_Refresh</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}.[[removeUnselectable]]"
              },
              "variableName": "_CharacterNumber",
              "livingTargets": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-880477462\">Enemy_W4_Xuanlu_IF_ServantLV3_01</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-897255081\">Enemy_W4_Xuanlu_IF_ServantLV3_02</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]"
                  }
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2055606231\">Enemy_W2_Xuanlu_IF_DamageReduceP2_TGT</a>[<span class=\"descriptionNumberColor\">Boss DMG Reduction</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CharacterNumber",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2055606231\">Enemy_W2_Xuanlu_IF_DamageReduceP2_TGT</a>[<span class=\"descriptionNumberColor\">Boss DMG Reduction</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce_PerLayer": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_CharacterNumber) || RETURN",
                    "displayLines": "_CharacterNumber",
                    "constants": [],
                    "variables": [
                      "_CharacterNumber"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-897255081\">Enemy_W4_Xuanlu_IF_ServantLV3_02</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "description": "When this target is defeated, deals massive True DMG to \"Unwaning Ageless Immortal\" and massively reduces its Toughness.",
      "type": "Other",
      "effectName": "Right-Hand Man",
      "statusName": "Right-Hand Man"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-880477462\">Enemy_W4_Xuanlu_IF_ServantLV3_01</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "description": "When this target is defeated, deals massive True DMG to \"Unwaning Ageless Immortal\" and massively reduces its Toughness.",
      "type": "Other",
      "effectName": "Right-Hand Man",
      "statusName": "Right-Hand Man"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1633980678\">Enemy_W2_Xuanlu_IF_AbilityP01_ServantLV3_Weakness_02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Ice",
                "Quantum"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1650758297\">Enemy_W2_Xuanlu_IF_AbilityP01_ServantLV3_Weakness_01</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Fire",
                "Physical"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__679693225\">Enemy_W2_Xuanlu_IF_AbilityP01_WeaknessControl</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": []
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-880477462\">Enemy_W4_Xuanlu_IF_ServantLV3_01</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}} + {{Xuanlu: Servant 02}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1650758297\">Enemy_W2_Xuanlu_IF_AbilityP01_ServantLV3_Weakness_01</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-897255081\">Enemy_W4_Xuanlu_IF_ServantLV3_02</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}} + {{Xuanlu: Servant 02}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1633980678\">Enemy_W2_Xuanlu_IF_AbilityP01_ServantLV3_Weakness_02</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1364394188\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub_Sub</a>[<span class=\"descriptionNumberColor\">Dazzling Halo</span>]",
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce_Sub</span> and DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio_Sub</span>.",
      "type": "Buff",
      "statusName": "Dazzling Halo",
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
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio_Sub) || RETURN",
                "displayLines": "MDF_AllDamageTypeAddedRatio_Sub",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio_Sub"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce_Sub) || RETURN",
                "displayLines": "MDF_AllDamageReduce_Sub",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce_Sub"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1640618291\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": [
                  "Break"
                ],
                "checkType": "And"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1364394188\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub_Sub</a>[<span class=\"descriptionNumberColor\">Dazzling Halo</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce_Sub": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    },
                    "MDF_AllDamageTypeAddedRatio_Sub": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1364394188\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub_Sub</a>[<span class=\"descriptionNumberColor\">Dazzling Halo</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1364394188\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub_Sub</a>[<span class=\"descriptionNumberColor\">Dazzling Halo</span>]"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1364394188\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub_Sub</a>[<span class=\"descriptionNumberColor\">Dazzling Halo</span>]",
              "valuePerStack": {
                "MDF_AllDamageReduce_Sub": {
                  "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                  "displayLines": "MDF_AllDamageReduce",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageReduce"
                  ]
                },
                "MDF_AllDamageTypeAddedRatio_Sub": {
                  "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "MDF_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTypeAddedRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1959486176\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1959486176\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04</a>"
                    }
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1959486176\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1640618291\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub</a>",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_9877) || RETURN",
              "displayLines": "UnusedUnderThisBase_9877",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_9877"
              ]
            },
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_9883) || RETURN",
              "displayLines": "UnusedUnderThisBase_9883",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_9883"
              ]
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1640618291\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub</a>"
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1640618291\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1640618291\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04_Sub</a>",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (UnusedUnderThisBase_9877) || RETURN",
                      "displayLines": "UnusedUnderThisBase_9877",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_9877"
                      ]
                    },
                    "MDF_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_9883) || RETURN",
                      "displayLines": "UnusedUnderThisBase_9883",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_9883"
                      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__749231853\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03_Sub</a>[<span class=\"descriptionNumberColor\">Resurrection Halo</span>]",
      "description": "At the start of the turn, slightly restores HP.",
      "type": "Other",
      "effectName": "Resurrection Halo",
      "statusName": "Resurrection Halo",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HealMaxHPRatio) || RETURN",
                "displayLines": "MDF_HealMaxHPRatio",
                "constants": [],
                "variables": [
                  "MDF_HealMaxHPRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-763689856\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03</a>[<span class=\"descriptionNumberColor\">Resurrection Ascension</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-763689856\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03</a>[<span class=\"descriptionNumberColor\">Resurrection Ascension</span>]"
                        }
                      ]
                    }
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-763689856\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03</a>[<span class=\"descriptionNumberColor\">Resurrection Ascension</span>]",
      "description": "When this unit is on the field, all friendly units other than \"Twig of Glorious Blooms\" and \"Unwaning Ageless Immortal\" restore a small amount of HP at the start of their turn.",
      "type": "Other",
      "effectName": "Resurrection Ascension",
      "statusName": "Resurrection Ascension",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}} - {{Xuanlu: Servant Zone 03}} - {{Xuanlu: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"749231853\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03_Sub</a>[<span class=\"descriptionNumberColor\">Resurrection Halo</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_HealMaxHPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_9903) || RETURN",
              "displayLines": "UnusedUnderThisBase_9903",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_9903"
              ]
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"749231853\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03_Sub</a>[<span class=\"descriptionNumberColor\">Resurrection Halo</span>]"
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"749231853\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03_Sub</a>[<span class=\"descriptionNumberColor\">Resurrection Halo</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"749231853\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03_Sub</a>[<span class=\"descriptionNumberColor\">Resurrection Halo</span>]",
                  "valuePerStack": {
                    "MDF_HealMaxHPRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_9903) || RETURN",
                      "displayLines": "UnusedUnderThisBase_9903",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_9903"
                      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__1326470310\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02_Sub</a>[<span class=\"descriptionNumberColor\">Agility Halo</span>]",
      "description": "After being attacked, slightly advances action.",
      "type": "Other",
      "effectName": "Agility Halo",
      "statusName": "Agility Halo",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "(0 - MDF_ActionDelayRatio)"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-746912237\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02</a>[<span class=\"descriptionNumberColor\">Agility Ascension</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-746912237\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02</a>[<span class=\"descriptionNumberColor\">Agility Ascension</span>]"
                    }
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-746912237\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02</a>[<span class=\"descriptionNumberColor\">Agility Ascension</span>]",
      "description": "When this unit is on the field, actions of all friendly units except \"Twig of Marple Leaf\" slightly advance after being attacked.",
      "type": "Other",
      "effectName": "Agility Ascension",
      "statusName": "Agility Ascension",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}} - {{Xuanlu: Servant Zone 02}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1326470310\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02_Sub</a>[<span class=\"descriptionNumberColor\">Agility Halo</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_9882) || RETURN",
              "displayLines": "UnusedUnderThisBase_9882",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_9882"
              ]
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1326470310\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02_Sub</a>[<span class=\"descriptionNumberColor\">Agility Halo</span>]"
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1326470310\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02_Sub</a>[<span class=\"descriptionNumberColor\">Agility Halo</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1326470310\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02_Sub</a>[<span class=\"descriptionNumberColor\">Agility Halo</span>]",
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_9882) || RETURN",
                      "displayLines": "UnusedUnderThisBase_9882",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_9882"
                      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__-401086193\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01_Sub</a>[<span class=\"descriptionNumberColor\">Tranquility Halo</span>]",
      "description": "Ally target units inflicted with the \"Outrage\" state deal greatly reduced DMG to this unit.",
      "type": "Other",
      "effectName": "Tranquility Halo",
      "statusName": "Tranquility Halo",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                      "value": "MDF_AllDamageReduce"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-730134618\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01</a>[<span class=\"descriptionNumberColor\">Tranquility Ascension</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-730134618\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01</a>[<span class=\"descriptionNumberColor\">Tranquility Ascension</span>]"
                    }
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-730134618\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01</a>[<span class=\"descriptionNumberColor\">Tranquility Ascension</span>]",
      "description": "When this unit is on the field, DMG dealt by target units inflicted with the \"Outrage\" state to all friendly units other than \"Twig of Wintry Wind\" is greatly reduced.",
      "type": "Other",
      "effectName": "Tranquility Ascension",
      "statusName": "Tranquility Ascension",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}} - {{Xuanlu: Servant Zone 01}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-401086193\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01_Sub</a>[<span class=\"descriptionNumberColor\">Tranquility Halo</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_9902) || RETURN",
              "displayLines": "UnusedUnderThisBase_9902",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_9902"
              ]
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-401086193\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01_Sub</a>[<span class=\"descriptionNumberColor\">Tranquility Halo</span>]"
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-401086193\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01_Sub</a>[<span class=\"descriptionNumberColor\">Tranquility Halo</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-401086193\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01_Sub</a>[<span class=\"descriptionNumberColor\">Tranquility Halo</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (UnusedUnderThisBase_9902) || RETURN",
                      "displayLines": "UnusedUnderThisBase_9902",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_9902"
                      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__1349189357\">Enemy_W2_Xuanlu_IF_Bonus_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Power of Sustenance</span>]",
      "stackType": "Replace",
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Power of Sustenance",
      "stackLimit": 999,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_Layer) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                "displayLines": "(_Layer * MDF_PropertyValue)",
                "constants": [],
                "variables": [
                  "_Layer",
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__69681613\">Enemy_W2_Xuanlu_IF_Servant_XuanluPartBonus</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-809289172\">Enemy_W2_Xuanlu_IF_Bonus_SpecialMark</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"69681613\">Enemy_W2_Xuanlu_IF_Servant_XuanluPartBonus</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1349189357\">Enemy_W2_Xuanlu_IF_Bonus_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Power of Sustenance</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (AbilityP04_P1_Bonus_DamageAddedRatio) || RETURN",
                      "displayLines": "AbilityP04_P1_Bonus_DamageAddedRatio",
                      "constants": [],
                      "variables": [
                        "AbilityP04_P1_Bonus_DamageAddedRatio"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-908719542\">Enemy_W2_Xuanlu_IF_Servant_CustomLocationConfig</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-924434401\">Enemy_W2_Xuanlu_IF_Servant</a>",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOrLimbo",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamageRatio) || RETURN",
                      "displayLines": "MDF_DamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageRatio"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "attackType": "Additional DMG"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-905544261\">Enemy_W2_Xuanlu_IF_WeakControl</a>"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue) || RETURN",
                        "displayLines": "MDF_DamageStanceValue",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      },
                      "bypassBreakMute": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue) || RETURN",
                        "displayLines": "MDF_DamageStanceValue",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
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
      "for": "<a class=\"gModGreen\" id=\"mod__374159355\">Enemy_W2_Xuanlu_IF_TurnOwnerDelay</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "set": {
                "operator": "Variables[0] (MDF_BossBreakCurrentDelay) || Constants[0] (0.01) || ADD || RETURN",
                "displayLines": "(MDF_BossBreakCurrentDelay + 0.01)",
                "constants": [
                  0.01
                ],
                "variables": [
                  "MDF_BossBreakCurrentDelay"
                ]
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__873052273\">Enemy_W2_Xuanlu_IF_SummonController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-809289172\">Enemy_W2_Xuanlu_IF_Bonus_SpecialMark</a>",
              "valuePerStack": {
                "AbilityP04_P1_Bonus_DamageAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_9904) || RETURN",
                  "displayLines": "UnusedUnderThisBase_9904",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_9904"
                  ]
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
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Minions of Modifier Holder}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"427800791\">Enemy_W2_Xuanlu_IF_MinionsSuperArmorController</a>",
                  "valuePerStack": {
                    "MDF_MinionsSuperArmor_AllDamageReduce": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13793) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13793",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13793"
                      ]
                    },
                    "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_13759) || RETURN",
                      "displayLines": "UnusedUnderThisBase_13759",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_13759"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-924434401\">Enemy_W2_Xuanlu_IF_Servant</a>",
                      "valuePerStack": {
                        "MDF_DamageRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9879) || RETURN",
                          "displayLines": "UnusedUnderThisBase_9879",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_9879"
                          ]
                        },
                        "MDF_DamageStanceValue": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9884) || RETURN",
                          "displayLines": "UnusedUnderThisBase_9884",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_9884"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-924434401\">Enemy_W2_Xuanlu_IF_Servant</a>",
                      "valuePerStack": {
                        "MDF_DamageRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9885) || RETURN",
                          "displayLines": "UnusedUnderThisBase_9885",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_9885"
                          ]
                        },
                        "MDF_DamageStanceValue": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9901) || RETURN",
                          "displayLines": "UnusedUnderThisBase_9901",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_9901"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                          "displayLines": "SummonList_ADF_1",
                          "constants": [],
                          "variables": [
                            "SummonList_ADF_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
                          "displayLines": "SummonList_ADF_2",
                          "constants": [],
                          "variables": [
                            "SummonList_ADF_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                          "displayLines": "SummonList_ADF_3",
                          "constants": [],
                          "variables": [
                            "SummonList_ADF_3"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
                          "displayLines": "SummonList_ADF_4",
                          "constants": [],
                          "variables": [
                            "SummonList_ADF_4"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
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
                      "modifier": "<a class=\"gModGreen\" id=\"69681613\">Enemy_W2_Xuanlu_IF_Servant_XuanluPartBonus</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonList_ADF_5) || RETURN",
                          "displayLines": "SummonList_ADF_5",
                          "constants": [],
                          "variables": [
                            "SummonList_ADF_5"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonList_ADF_6) || RETURN",
                          "displayLines": "SummonList_ADF_6",
                          "constants": [],
                          "variables": [
                            "SummonList_ADF_6"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
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
                      "modifier": "<a class=\"gModGreen\" id=\"-908719542\">Enemy_W2_Xuanlu_IF_Servant_CustomLocationConfig</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                      "displayLines": "SummonList_ADF_1",
                      "constants": [],
                      "variables": [
                        "SummonList_ADF_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-730134618\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01</a>[<span class=\"descriptionNumberColor\">Tranquility Ascension</span>]"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-730134618\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_01</a>[<span class=\"descriptionNumberColor\">Tranquility Ascension</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
                      "displayLines": "SummonList_ADF_2",
                      "constants": [],
                      "variables": [
                        "SummonList_ADF_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-746912237\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02</a>[<span class=\"descriptionNumberColor\">Agility Ascension</span>]"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-746912237\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_02</a>[<span class=\"descriptionNumberColor\">Agility Ascension</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                      "displayLines": "SummonList_ADF_3",
                      "constants": [],
                      "variables": [
                        "SummonList_ADF_3"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-763689856\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03</a>[<span class=\"descriptionNumberColor\">Resurrection Ascension</span>]"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-763689856\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_03</a>[<span class=\"descriptionNumberColor\">Resurrection Ascension</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1198716470\">Enemy_W2_Xuanlu_IF_AbilityEX04</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                              "displayLines": "SummonList_ADF_1",
                              "constants": [],
                              "variables": [
                                "SummonList_ADF_1"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          },
                          {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
                              "displayLines": "SummonList_ADF_2",
                              "constants": [],
                              "variables": [
                                "SummonList_ADF_2"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          },
                          {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                              "displayLines": "SummonList_ADF_3",
                              "constants": [],
                              "variables": [
                                "SummonList_ADF_3"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
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
                          "modifier": "<a class=\"gModGreen\" id=\"1959486176\">Enemy_W2_Xuanlu_IF_Servant_XuanluPart_Aura_EX04</a>"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-809289172\">Enemy_W2_Xuanlu_IF_Bonus_SpecialMark</a>",
                  "valuePerStack": {
                    "AbilityP04_P1_Bonus_DamageAddedRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_9904) || RETURN",
                      "displayLines": "UnusedUnderThisBase_9904",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_9904"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "StrongChallengeEX_Test_StageAbility_001_EX_BeingBreak"
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
                  "variableName": "MDF_BossBreakCurrentDelay",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"374159355\">Enemy_W2_Xuanlu_IF_TurnOwnerDelay</a>",
                          "valuePerStack": {
                            "MDF_BossBreakCurrentDelay": {
                              "operator": "Variables[0] (MDF_BossBreakCurrentDelay) || RETURN",
                              "displayLines": "MDF_BossBreakCurrentDelay",
                              "constants": [],
                              "variables": [
                                "MDF_BossBreakCurrentDelay"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "set": {
                        "operator": "Variables[0] (MDF_BossBreakCurrentDelay) || Constants[0] (0.01) || ADD || RETURN",
                        "displayLines": "(MDF_BossBreakCurrentDelay + 0.01)",
                        "constants": [
                          0.01
                        ],
                        "variables": [
                          "MDF_BossBreakCurrentDelay"
                        ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__1108369769\">Enemy_W2_Xuanlu_IF_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting in Limbo [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "InsertCheck",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-924434401\">Enemy_W2_Xuanlu_IF_Servant</a>"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck",
                  "value": 0
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-514199936\">Enemy_W2_Xuanlu_DisableAction</a>"
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Xuanlu_IF_AbilityP01_PartChange01to02",
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1785429522\">Enemy_W2_Xuanlu_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Synchronized Vulnerability</span>]",
      "modifierFlags": [
        "STAT_AITargetKeepActionDelay"
      ],
      "description": "\"Unwaning Ageless Immortal\" is currently in the \"Safeguard Breach\" state. DMG taken by this unit increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
      "type": "Debuff",
      "statusName": "Synchronized Vulnerability",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__924404347\">Enemy_W2_Xuanlu_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Synchronized DMG Reduction</span>]",
      "modifierFlags": [],
      "description": "\"Unwaning Ageless Immortal\" is currently in the \"Steadfast Safeguard\" state. DMG taken by this unit reduces by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>.",
      "type": "Buff",
      "statusName": "Synchronized DMG Reduction",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": "Thin"
                      },
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": [
                          "LargeMonster",
                          "LargeAvatar",
                          "LargeFakeAvatar"
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 5
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ]
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": ">=",
                        "value2": 5
                      }
                    ]
                  }
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__427800791\">Enemy_W2_Xuanlu_IF_MinionsSuperArmorController</a>",
      "modifierFlags": [
        "CustomEvent_MonsterChangePhaseTrigger"
      ],
      "stackData": [
        "MDF_MinionsSuperArmor_AllDamageReduce",
        "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Xuanlu: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-627803266\">Standard_SuperArmor_IF</a>[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"924404347\">Enemy_W2_Xuanlu_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Synchronized DMG Reduction</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_MinionsSuperArmor_AllDamageReduce"
                      ]
                    }
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
                  "target": "{{Xuanlu: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"714067831\">Standard_SuperArmorBreak_IF</a>[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1785429522\">Enemy_W2_Xuanlu_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Synchronized Vulnerability</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageTypeTakenRatio) || RETURN",
                      "displayLines": "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1785429522\">Enemy_W2_Xuanlu_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Synchronized Vulnerability</span>]"
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"924404347\">Enemy_W2_Xuanlu_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Synchronized DMG Reduction</span>]",
              "valuePerStack": {
                "MDF_AllDamageReduce": {
                  "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                  "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                  "constants": [],
                  "variables": [
                    "MDF_MinionsSuperArmor_AllDamageReduce"
                  ]
                }
              }
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-286610159\">Enemy_W2_Xuanlu_IF_EnterBattleSummon</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"924404347\">Enemy_W2_Xuanlu_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Synchronized DMG Reduction</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1785429522\">Enemy_W2_Xuanlu_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Synchronized Vulnerability</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageTypeTakenRatio) || RETURN",
                      "displayLines": "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-286610159\">Enemy_W2_Xuanlu_IF_EnterBattleSummon</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1785429522\">Enemy_W2_Xuanlu_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Synchronized Vulnerability</span>]"
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-627803266\">Standard_SuperArmor_IF</a>[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"924404347\">Enemy_W2_Xuanlu_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Synchronized DMG Reduction</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageReduce": {
                          "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                          "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                          "constants": [],
                          "variables": [
                            "MDF_MinionsSuperArmor_AllDamageReduce"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-905544261\">Enemy_W2_Xuanlu_IF_WeakControl</a>",
      "modifierFlags": [
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__677221093\">Enemy_W2_Xuanlu_IF_Ability07_WeaknessControl</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]",
      "stackType": "Replace",
      "description": "DEF increases. Toughness cannot be reduced.",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "Hardy Leaf Sheath",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-905544261\">Enemy_W2_Xuanlu_IF_WeakControl</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-905544261\">Enemy_W2_Xuanlu_IF_WeakControl</a>"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                "displayLines": "MDF_DefenceAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DefenceAddedRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-286610159\">Enemy_W2_Xuanlu_IF_EnterBattleSummon</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W2_Xuanlu_IF_AbilityP01_InfiniteSummon",
                  "priorityTag": "EnemyDeathEffect",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true,
              "toRemove": [
                "STAT_CTRL"
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W2_Xuanlu_IF_AbilityP01_EnterBattleSummon_Part01",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyBattleCry",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -45
        }
      ]
    }
  ],
  "references": []
}