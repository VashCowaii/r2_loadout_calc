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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__713542553\">GT_GridFight_SetEnergyBar_Normal</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CrrCount",
            "compareType": "<",
            "value2": {
              "displayLines": "MaxCount"
            }
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "_CrrCount"
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
                "displayLines": "_CrrCount"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1439408409\">GT_GridFight_PFM_CameraShakeBig</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-94694499\">GT_GridFight_PFM_CameraDarkTeamFar</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1338172648\">GT_GridFight_PFM_CameraLightTeamNear</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-2140960208\">GT_GridFight_Standard_BonusLightTeam</a>",
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
                "displayLines": "TEMP_OBJECT_UNUSED_5"
              },
              "caseTasks": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "displayLines": "TEMP_OBJECT_UNUSED_5"
              },
              "caseTasks": [
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
                        "traitName": "TP_Origin_Tag"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
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
                        "traitName": "TP_Origin_Tag"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
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
                        "traitName": "TP_Origin_Tag"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1222829193\">GT_StageAbility_GridFight_Origin_Bonus_01</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1172496336\">GT_StageAbility_GridFight_Origin_Bonus_02</a>",
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
                "traitName": "TP_Origin_Tag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-524077135\">GT_StageAbility_GridFight_Origin_Bonus_02_LowestX</a>",
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
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  "Sort by Physical Positioning"
                ]
              },
              "maxTargets": {
                "displayLines": "TEMP_OBJECT_UNUSED_6"
              },
              "conditions": {
                "name": "Has Currency Wars Trait",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "traitName": "TP_Origin_Tag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__660398765\">GT_StageAbility_GridFight_Origin_Bonus_02_HighestX</a>",
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
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  {
                    "name": "Sort by Physical Positioning",
                    "sortByHighest": true
                  }
                ]
              },
              "maxTargets": {
                "displayLines": "TEMP_OBJECT_UNUSED_6"
              },
              "conditions": {
                "name": "Has Currency Wars Trait",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "traitName": "TP_Origin_Tag"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1189273955\">GT_StageAbility_GridFight_Origin_Bonus_03</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-741732955\">TP_Modifier_Origin_Member</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-2092817578\">GT_StageAbility_GridFight_PursuedDamage_PerformanceDelay</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}"
          },
          "variableName": "MDF_PerformanceDelay",
          "scope": "TargetEntity"
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
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "livingState": "Mask_AliveOnly"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": "Active: Fast-Forward Animations",
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
                      "value": 0.3,
                      "variableName": "MDF_PerformanceDelay"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}"
                      },
                      "value": 0.2,
                      "variableName": "MDF_PerformanceDelay"
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
                      "value": 0.5,
                      "variableName": "MDF_PerformanceDelay"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)}}.[[living]] + {{Currency Wars Full OffFieldList}}"
                      },
                      "value": 0.3,
                      "variableName": "MDF_PerformanceDelay"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1957296310\">GridFight_Standard_Basic_MonsterDrop</a>",
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
                "displayLines": "MDF_CoinDrop"
              },
              "execute": [
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
                "displayLines": "MDF_OrbDrop"
              },
              "execute": [
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
                "displayLines": "MDF_Orb2Drop"
              },
              "execute": [
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
                "displayLines": "MDF_Orb3Drop"
              },
              "execute": [
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
                "displayLines": "MDF_Orb4Drop"
              },
              "execute": [
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-688010457\">GridFight_Standard_Basic_MonsterDrop_ParamEntity</a>",
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
                "displayLines": "MDF_CoinDrop"
              },
              "execute": [
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
                "displayLines": "MDF_OrbDrop"
              },
              "execute": [
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
                "displayLines": "MDF_Orb2Drop"
              },
              "execute": [
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
                "displayLines": "MDF_Orb3Drop"
              },
              "execute": [
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
                "displayLines": "MDF_Orb4Drop"
              },
              "execute": [
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