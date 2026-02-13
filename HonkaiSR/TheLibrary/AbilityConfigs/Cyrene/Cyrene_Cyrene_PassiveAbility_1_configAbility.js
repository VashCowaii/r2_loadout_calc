const configAbility = {
  "fileName": "Cyrene_Cyrene_PassiveAbility_1",
  "childAbilityList": [
    "Cyrene_Cyrene_PassiveAbility_1"
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
      "name": "Change Character UI"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "FieldLifeTime",
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1030329555\">Cyrene_AbilityPreloadCtrl</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1846097202\">Cyrene_PassiveAbility</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
        "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
        "constants": [],
        "variables": [
          "CurSpecialSP",
          "CurOverflowSpecialSP"
        ]
      },
      "displaySubType": "PureNum",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "assignState": "True",
      "bar#": "Number"
    },
    {
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Causality in Trichotomy"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1015949385\">Cyrene_PointB3</a>"
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
          "name": "Define Custom Variable",
          "scope": "AITag",
          "variableName": "DamageCarry",
          "value": 10
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1534801198\">Cyrene_Ability03_LackOfSP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Operation",
              "opMask": "Mask_UIOperate"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Use Operation",
              "opMask": "Mask_UIOperate"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2105697970\">_M_Cyrene_Phainon_ForbidAutoUltraBeforeCyreneUltra</a>",
      "modifierFlags": [
        900,
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1085868311\">Memosprite_CyreneServant_AmazingBonus</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1846097202\">Cyrene_PassiveAbility</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1470142416\">Cyrene_Ability03</a>[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Switch to Action/Ability Context",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Update Energy Value",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 0,
              "adjustment": "Set",
              "ignoreBlock": true
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialSPNeed",
              "value": 24
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_FirstTimeMax",
              "value": 0
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMaxSpecialOverflow</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (27) || Constants[0] (24) || SUB || RETURN",
                "displayLines": "(27 - 24)",
                "constants": [
                  24
                ],
                "variables": [
                  27
                ]
              },
              "isRefresh": true
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 11415,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Child of Remembrance"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1931471655\">Cyrene_Passive_Teamate</a>[<span class=\"descriptionNumberColor\">Future</span>]",
                  "valuePerStack": {
                    "MDF_SPAdd": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]-{{Caster}}-{{Caster}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1931471655\">Cyrene_Passive_Teamate</a>[<span class=\"descriptionNumberColor\">Future</span>]",
              "valuePerStack": {
                "MDF_SPAdd": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
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
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"684175961\">Memosprite_CyreneServant_Energy</a>[<span class=\"descriptionNumberColor\">Story</span>]",
                  "addStacksPerTrigger": 1,
                  "casterAssign": "TargetSelf"
                }
              ]
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1408,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Phainon"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2105697970\">_M_Cyrene_Phainon_ForbidAutoUltraBeforeCyreneUltra</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Ripples Across Time"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-619579107\">Cyrene_ChrysosCheck</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{{{Cyrene}}'s All Player Characters}}-{{Caster}}"
                      },
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Target is Pathstrider",
                            "path": [
                              "Remembrance"
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
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1865411138\">ChrysosMark</a>"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "ChrysosCount",
                          "value": {
                            "operator": "Variables[0] (ChrysosCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(ChrysosCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "ChrysosCount"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ChrysosCount) || RETURN",
                        "displayLines": "ChrysosCount",
                        "constants": [],
                        "variables": [
                          "ChrysosCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
                              "variables": {
                                "parameter[0]_AddValue": {
                                  "operator": "Variables[0] (2) || RETURN",
                                  "displayLines": "2",
                                  "constants": [],
                                  "variables": [
                                    2
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
                              "variables": {
                                "parameter[0]_AddValue": {
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
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
                              "variables": {
                                "parameter[0]_AddValue": {
                                  "operator": "Variables[0] (6) || RETURN",
                                  "displayLines": "6",
                                  "constants": [],
                                  "variables": [
                                    6
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (12) || RETURN",
                          "displayLines": "12",
                          "constants": [],
                          "variables": [
                            12
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]-{{Caster}}-{{Caster}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1931471655\">Cyrene_Passive_Teamate</a>[<span class=\"descriptionNumberColor\">Future</span>]",
                  "valuePerStack": {
                    "MDF_SPAdd": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              }
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "CurSpecialSP",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                    "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                    "constants": [],
                    "variables": [
                      "CurSpecialSP",
                      "CurOverflowSpecialSP"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CurSpecialSP",
                  "value": {
                    "operator": "Variables[0] (CurSpecialSP) || RETURN",
                    "displayLines": "CurSpecialSP",
                    "constants": [],
                    "variables": [
                      "CurSpecialSP"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "CurOverflowSpecialSP",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                    "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                    "constants": [],
                    "variables": [
                      "CurSpecialSP",
                      "CurOverflowSpecialSP"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "SpecialSPNeed",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurSpecialSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (SpecialSPNeed) || RETURN",
                      "displayLines": "SpecialSPNeed",
                      "constants": [],
                      "variables": [
                        "SpecialSPNeed"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1534801198\">Cyrene_Ability03_LackOfSP</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_FirstTimeMax",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_FirstTimeMax",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TutorialSwitch",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "TutorialSwitch",
                          "value": 1
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
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "triggerClampedChanges": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CurSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "operator": "Variables[0] (SpecialSPNeed) || RETURN",
                "displayLines": "SpecialSPNeed",
                "constants": [],
                "variables": [
                  "SpecialSPNeed"
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1534801198\">Cyrene_Ability03_LackOfSP</a>"
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1534801198\">Cyrene_Ability03_LackOfSP</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_FirstTimeMax",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FirstTimeMax",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TutorialSwitch",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TutorialSwitch",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "triggerClampedChanges": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CurOverflowSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"619883840\">Cyrene_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Hearts Gather as One</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DamageIncrease": {
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1030329555\">Cyrene_AbilityPreloadCtrl</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Deleted bullshit"
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            "Deleted bullshit"
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1470142416\">Cyrene_Ability03</a>[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                "Deleted bullshit"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            "Deleted bullshit"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}