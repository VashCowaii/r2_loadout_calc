const configAbility = {
  "fileName": "-379831992_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 13,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "GT_GridFight_SetEnergyBar_Normal",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CrrCount",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (MaxCount) || RETURN",
              "displayLines": "MaxCount",
              "constants": [],
              "variables": [
                "MaxCount"
              ]
            }
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_CrrCount) || RETURN",
                "displayLines": "_CrrCount",
                "constants": [],
                "variables": [
                  "_CrrCount"
                ]
              },
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorState": "Normal"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_CrrCount) || RETURN",
                "displayLines": "_CrrCount",
                "constants": [],
                "variables": [
                  "_CrrCount"
                ]
              },
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorState": "Active"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_GridFight_PFM_CameraShakeBig",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_GridFight_PFM_CameraDarkTeamFar",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_GridFight_PFM_CameraLightTeamNear",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_GridFight_Standard_BonusLightTeam",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "IsCheckTag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (TEMP_OBJECT_UNUSED_5) || RETURN",
                "displayLines": "TEMP_OBJECT_UNUSED_5",
                "constants": [],
                "variables": [
                  "TEMP_OBJECT_UNUSED_5"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "TP_Modifier_Bonus"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "TP_Modifier_Bonus"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team Unselectables}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "TP_Modifier_Bonus"
                        }
                      ]
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ],
          "failed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (TEMP_OBJECT_UNUSED_5) || RETURN",
                "displayLines": "TEMP_OBJECT_UNUSED_5",
                "constants": [],
                "variables": [
                  "TEMP_OBJECT_UNUSED_5"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "Has Currency Wars Trait",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "trait": "TP_Origin_Tag"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "TP_Modifier_Bonus"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "conditions": {
                        "name": "Has Currency Wars Trait",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "trait": "TP_Origin_Tag"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "TP_Modifier_Bonus"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team Unselectables}}"
                      },
                      "conditions": {
                        "name": "Has Currency Wars Trait",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "trait": "TP_Origin_Tag"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "TP_Modifier_Bonus"
                        }
                      ]
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_StageAbility_GridFight_Origin_Bonus_01",
      "parse": [
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TP_Modifier_Bonus"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_StageAbility_GridFight_Origin_Bonus_02",
      "parse": [
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Has Currency Wars Trait",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "trait": "TP_Origin_Tag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TP_Modifier_Bonus"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_StageAbility_GridFight_Origin_Bonus_02_LowestX",
      "parse": [
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
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  {
                    "name": "Sort by Physical Positioning"
                  }
                ]
              },
              "maxTargets": {
                "operator": "Variables[0] (TEMP_OBJECT_UNUSED_6) || RETURN",
                "displayLines": "TEMP_OBJECT_UNUSED_6",
                "constants": [],
                "variables": [
                  "TEMP_OBJECT_UNUSED_6"
                ]
              },
              "conditions": {
                "name": "Has Currency Wars Trait",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "trait": "TP_Origin_Tag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TP_Modifier_Bonus"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_StageAbility_GridFight_Origin_Bonus_02_HighestX",
      "parse": [
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
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  {
                    "name": "Sort by Physical Positioning",
                    "byHighest": true
                  }
                ]
              },
              "maxTargets": {
                "operator": "Variables[0] (TEMP_OBJECT_UNUSED_6) || RETURN",
                "displayLines": "TEMP_OBJECT_UNUSED_6",
                "constants": [],
                "variables": [
                  "TEMP_OBJECT_UNUSED_6"
                ]
              },
              "conditions": {
                "name": "Has Currency Wars Trait",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "trait": "TP_Origin_Tag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TP_Modifier_Bonus"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_StageAbility_GridFight_Origin_Bonus_03",
      "parse": [
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "TP_Modifier_Origin_Member"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TP_Modifier_Bonus"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "GT_StageAbility_GridFight_PursuedDamage_PerformanceDelay",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}"
          },
          "scope": "TargetEntity",
          "variableName": "MDF_PerformanceDelay"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is in Timeline Execution",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}"
                      },
                      "variableName": "MDF_PerformanceDelay",
                      "value": 0.3
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}"
                      },
                      "variableName": "MDF_PerformanceDelay",
                      "value": 0.2
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is in Timeline Execution",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}"
                      },
                      "variableName": "MDF_PerformanceDelay",
                      "value": 0.5
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}"
                      },
                      "variableName": "MDF_PerformanceDelay",
                      "value": 0.3
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
      "name": "CharacterFunctions",
      "functionName": "GridFight_Standard_Basic_MonsterDrop",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "#CL_CoinRandomRotY"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "#CL_OrbRandomRotY"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_CoinDrop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_CoinDrop) || RETURN",
                "displayLines": "MDF_CoinDrop",
                "constants": [],
                "variables": [
                  "MDF_CoinDrop"
                ]
              },
              "Event": [
                {
                  "name": "Define Variable with Random Value",
                  "variableName": "#CL_CoinRandomRotY",
                  "min": -180,
                  "max": 0
                },
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1,
                    1
                  ]
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_OrbDrop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_OrbDrop) || RETURN",
                "displayLines": "MDF_OrbDrop",
                "constants": [],
                "variables": [
                  "MDF_OrbDrop"
                ]
              },
              "Event": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -180,
                      "max": -91
                    },
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -89,
                      "max": 0
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
            "name": "OR",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Orb2Drop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Orb2Drop) || RETURN",
                "displayLines": "MDF_Orb2Drop",
                "constants": [],
                "variables": [
                  "MDF_Orb2Drop"
                ]
              },
              "Event": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -180,
                      "max": -91
                    },
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -89,
                      "max": 0
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
            "name": "OR",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Orb3Drop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Orb3Drop) || RETURN",
                "displayLines": "MDF_Orb3Drop",
                "constants": [],
                "variables": [
                  "MDF_Orb3Drop"
                ]
              },
              "Event": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -180,
                      "max": -91
                    },
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -89,
                      "max": 0
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
            "name": "OR",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Orb4Drop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Orb4Drop) || RETURN",
                "displayLines": "MDF_Orb4Drop",
                "constants": [],
                "variables": [
                  "MDF_Orb4Drop"
                ]
              },
              "Event": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -180,
                      "max": -91
                    },
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -89,
                      "max": 0
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
      "name": "CharacterFunctions",
      "functionName": "GridFight_Standard_Basic_MonsterDrop_ParamEntity",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "#CL_CoinRandomRotY"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "#CL_OrbRandomRotY"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_CoinDrop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_CoinDrop) || RETURN",
                "displayLines": "MDF_CoinDrop",
                "constants": [],
                "variables": [
                  "MDF_CoinDrop"
                ]
              },
              "Event": [
                {
                  "name": "Define Variable with Random Value",
                  "variableName": "#CL_CoinRandomRotY",
                  "min": -180,
                  "max": 0
                },
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1,
                    1
                  ]
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_OrbDrop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_OrbDrop) || RETURN",
                "displayLines": "MDF_OrbDrop",
                "constants": [],
                "variables": [
                  "MDF_OrbDrop"
                ]
              },
              "Event": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -180,
                      "max": -91
                    },
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -89,
                      "max": 0
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
            "name": "OR",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Orb2Drop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Orb2Drop) || RETURN",
                "displayLines": "MDF_Orb2Drop",
                "constants": [],
                "variables": [
                  "MDF_Orb2Drop"
                ]
              },
              "Event": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -180,
                      "max": -91
                    },
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -89,
                      "max": 0
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
            "name": "OR",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Orb3Drop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Orb3Drop) || RETURN",
                "displayLines": "MDF_Orb3Drop",
                "constants": [],
                "variables": [
                  "MDF_Orb3Drop"
                ]
              },
              "Event": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -180,
                      "max": -91
                    },
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -89,
                      "max": 0
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
            "name": "OR",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Orb4Drop",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Orb4Drop) || RETURN",
                "displayLines": "MDF_Orb4Drop",
                "constants": [],
                "variables": [
                  "MDF_Orb4Drop"
                ]
              },
              "Event": [
                {
                  "name": "Random Event",
                  "odds": [
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -180,
                      "max": -91
                    },
                    {
                      "name": "Define Variable with Random Value",
                      "variableName": "#CL_OrbRandomRotY",
                      "min": -89,
                      "max": 0
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
  "references": []
}