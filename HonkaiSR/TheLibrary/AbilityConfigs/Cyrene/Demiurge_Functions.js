const configAbility = {
  "fileName": "Demiurge_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 8,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "_T_Cyrene_Eidolon1_EnergyCheck",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "valueType": "Layer"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "_M_Cyrene_Eidolon1_Ability01Prepare",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
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
              "modifier": "_M_Cyrene_Eidolon1_Ability01Prepare"
            },
            {
              "name": "Inject Extra-Turn",
              "actionTag": "CyreneServant_Ability01_Eidolon1",
              "forceAction": true,
              "abilityName": "Servant_CyreneServant_FormationReset",
              "conditions": {
                "name": "Insert Ability Condition",
                "type": "SameTagInsertUnusedCount",
                "typeValue": 1
              },
              "castTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "afterInjection": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "_M_Cyrene_Eidolon1_Ability01Prepare"
                }
              ],
              "ignoreCost": true
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "HPSync",
      "parse": [
        {
          "name": "Define Custom Variable with HP%",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "CasterSummonerHPRatio"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "CasterSummonerMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is NegativeHP Enabled",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterSummonerNegativeHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CasterSummonerNegativeHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CasterSummonerNegativeHPRatio",
                  "value": {
                    "operator": "Variables[0] (CasterSummonerNegativeHP) || Variables[1] (CasterSummonerMaxHP) || DIV || RETURN",
                    "displayLines": "(CasterSummonerNegativeHP / CasterSummonerMaxHP)",
                    "constants": [],
                    "variables": [
                      "CasterSummonerNegativeHP",
                      "CasterSummonerMaxHP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CasterNegativeHP",
                  "value": {
                    "operator": "Variables[0] (CasterSummonerNegativeHPRatio) || Variables[1] (CasterHP) || MUL || RETURN",
                    "displayLines": "(CasterSummonerNegativeHPRatio * CasterHP)",
                    "constants": [],
                    "variables": [
                      "CasterSummonerNegativeHPRatio",
                      "CasterHP"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CyreneServant_NegativeHP",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (CasterNegativeHP) || RETURN",
                      "displayLines": "CasterNegativeHP",
                      "constants": [],
                      "variables": [
                        "CasterNegativeHP"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CyreneServant_NegativeHP",
                  "valuePerStack": {
                    "MDF_PropertyValue": 0
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterSummonerHPRatio",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "setValue": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "setValue": {
                        "operator": "Variables[0] (CasterSummonerHPRatio) || Variables[1] (CasterHP) || MUL || RETURN",
                        "displayLines": "(CasterSummonerHPRatio * CasterHP)",
                        "constants": [],
                        "variables": [
                          "CasterSummonerHPRatio",
                          "CasterHP"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_NegativeHP"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CasterSummonerHPRatio",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": 1
                }
              ],
              "failed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": {
                    "operator": "Variables[0] (CasterSummonerHPRatio) || Variables[1] (CasterHP) || MUL || RETURN",
                    "displayLines": "(CasterSummonerHPRatio * CasterHP)",
                    "constants": [],
                    "variables": [
                      "CasterSummonerHPRatio",
                      "CasterHP"
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
      "name": "CharacterFunctions",
      "functionName": "Servant_CyreneServant_AbilityManage",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (CurAmazingCount) || RETURN",
              "displayLines": "CurAmazingCount",
              "constants": [],
              "variables": [
                "CurAmazingCount"
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
              "modifier": "Memosprite_CyreneServant_Ability01Disable"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_Ability01Disable"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (12) || RETURN",
              "displayLines": "12",
              "constants": [],
              "variables": [
                12
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
              "modifier": "Memosprite_CyreneServant_Ability02Disable"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_Ability02Disable"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (CurAmazingCount) || RETURN",
                  "displayLines": "CurAmazingCount",
                  "constants": [],
                  "variables": [
                    "CurAmazingCount"
                  ]
                }
              },
              {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (12) || RETURN",
                  "displayLines": "12",
                  "constants": [],
                  "variables": [
                    12
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getSummoner]]"
              },
              "modifier": "Memosprite_CyreneServant_SummonerAbility03Disable"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getSummoner]]"
              },
              "modifier": "Memosprite_CyreneServant_SummonerAbility03Disable"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Group",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "group": "Chrysos"
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
            "modifier": "Memosprite_CyreneServant_AmazingBonus"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorChosenEffect",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Demiurge's Player Team Mirror}}"
          },
          "maxTargets": 3,
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
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variable": "CyreneIndex",
              "target2": null,
              "variable2": "Index",
              "scope": "ContextTaskTemplate"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_CyreneServant_AbilityReady_MirrorSetup",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextTaskTemplate",
          "variableName": "LightTeamCount"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextTaskTemplate",
          "variableName": "DarkTeamCount"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Demiurge's Player Team Mirror}}"
          },
          "variableName": "#CL_LightTeamNumber",
          "livingTargets": true,
          "context": "ContextCaster"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (Index) || RETURN",
            "displayLines": "Index",
            "constants": [],
            "variables": [
              "Index"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Demiurge's Player Team Mirror}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextTaskTemplate",
                      "variableName": "LightTeamCount",
                      "value": 2
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CyreneIndex",
                      "value": 2
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variables": {
                        "Index": {
                          "operator": "Variables[0] (LightTeamCount) || RETURN",
                          "displayLines": "LightTeamCount",
                          "constants": [],
                          "variables": [
                            "LightTeamCount"
                          ]
                        }
                      }
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
                    "target": "{{Demiurge's Player Team Mirror}}"
                  },
                  "maxTargets": 2,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "LightTeamCount",
                      "context": "ContextTaskTemplate",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (LightTeamCount) || RETURN",
                        "displayLines": "LightTeamCount",
                        "constants": [],
                        "variables": [
                          "LightTeamCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "CyreneIndex",
                              "value": 1
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": {
                                  "operator": "Variables[0] (LightTeamCount) || RETURN",
                                  "displayLines": "LightTeamCount",
                                  "constants": [],
                                  "variables": [
                                    "LightTeamCount"
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
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "CyreneIndex",
                              "value": 3
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": 3
                              }
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
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Demiurge's Player Team Mirror}}"
                  },
                  "maxTargets": 3,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "LightTeamCount",
                      "context": "ContextTaskTemplate",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (LightTeamCount) || RETURN",
                        "displayLines": "LightTeamCount",
                        "constants": [],
                        "variables": [
                          "LightTeamCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "CyreneIndex",
                              "value": 1
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": {
                                  "operator": "Variables[0] (LightTeamCount) || RETURN",
                                  "displayLines": "LightTeamCount",
                                  "constants": [],
                                  "variables": [
                                    "LightTeamCount"
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
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "CyreneIndex",
                              "value": 2
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": {
                                  "operator": "Variables[0] (LightTeamCount) || RETURN",
                                  "displayLines": "LightTeamCount",
                                  "constants": [],
                                  "variables": [
                                    "LightTeamCount"
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
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "CyreneIndex",
                              "value": 3
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": {
                                  "operator": "Variables[0] (LightTeamCount) || RETURN",
                                  "displayLines": "LightTeamCount",
                                  "constants": [],
                                  "variables": [
                                    "LightTeamCount"
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
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeBattleEvents]].[[regardPartAsOwner]]"
          },
          "maxTargets": 5,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DarkTeamCount",
              "context": "ContextTaskTemplate",
              "value": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextOwner",
          "variableName": "#CL_MirrorSetupFlag",
          "value": 1
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "ServantCyrene_ChargeEnergy",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "_CurSpecialSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "_MaxSpecialSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextTaskTemplate",
          "variableName": "_ExtraSpecialSP",
          "value": {
            "operator": "Variables[0] (MAX) || Variables[1] (_CurSpecialSP) || Variables[2] (parameter[0]_AddValue) || ADD || Variables[3] (_MaxSpecialSP) || SUB || Constants[0] (0) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + parameter[0]_AddValue) - _MaxSpecialSP), 0)",
            "constants": [
              0
            ],
            "variables": [
              "MAX",
              "_CurSpecialSP",
              "parameter[0]_AddValue",
              "_MaxSpecialSP"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_ExtraSpecialSP",
            "compareType": ">",
            "value2": 0,
            "contextScope": "ContextTaskTemplate"
          },
          "passed": [
            {
              "name": "Define Custom Property",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_ExtraSpecialSP) || RETURN",
                "displayLines": "_ExtraSpecialSP",
                "constants": [],
                "variables": [
                  "_ExtraSpecialSP"
                ]
              }
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "value": {
            "operator": "Variables[0] (parameter[0]_AddValue) || RETURN",
            "displayLines": "parameter[0]_AddValue",
            "constants": [],
            "variables": [
              "parameter[0]_AddValue"
            ]
          },
          "isFixed": "(Fixed)",
          "ignoreBlock": true,
          "isSpecialEnergy": true
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "ServantCyrene_Eidolon6",
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Rank04Count",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Rank04Count",
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
              "modifier": "Memosprite_CyreneServant_Eidolon6",
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
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "ReduceActionDelay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "variables": {
                "parameter[0]_NormalizedValue": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}