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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__301160822\">_T_Cyrene_Eidolon1_EnergyCheck</a>",
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
                "compareType": ">=",
                "value2": {
                  "displayLines": "3"
                },
                "valueType": "Layer"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2012168482\">_M_Cyrene_Eidolon1_Ability01Prepare</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-2012168482\">_M_Cyrene_Eidolon1_Ability01Prepare</a>"
            },
            {
              "name": "Inject Extra-Turn",
              "actionTag": [
                "CyreneServant_Ability01_Eidolon1"
              ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2012168482\">_M_Cyrene_Eidolon1_Ability01Prepare</a>"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-255863654\">HPSync</a>",
      "parse": [
        {
          "name": "Define Custom Variable with HP%",
          "variableName": "CasterSummonerHPRatio",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "CasterHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "CasterSummonerMaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
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
              "variableName": "CasterSummonerNegativeHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
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
                  "value": {
                    "displayLines": "(CasterSummonerNegativeHP / CasterSummonerMaxHP)"
                  },
                  "variableName": "CasterSummonerNegativeHPRatio"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(CasterSummonerNegativeHPRatio * CasterHP)"
                  },
                  "variableName": "CasterNegativeHP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"133953622\">Memosprite_CyreneServant_NegativeHP</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "CasterNegativeHP"
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
                  "modifier": "<a class=\"gModGreen\" id=\"133953622\">Memosprite_CyreneServant_NegativeHP</a>",
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
                      "variableName": "CasterHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
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
                        "displayLines": "(CasterSummonerHPRatio * CasterHP)"
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
              "modifier": "<a class=\"gModGreen\" id=\"133953622\">Memosprite_CyreneServant_NegativeHP</a>"
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
                  "variableName": "CasterHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                    "displayLines": "(CasterSummonerHPRatio * CasterHP)"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1428811240\">Servant_CyreneServant_AbilityManage</a>",
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
              "displayLines": "CurAmazingCount"
            }
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1599805283\">Memosprite_CyreneServant_Ability01Disable</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1599805283\">Memosprite_CyreneServant_Ability01Disable</a>"
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
              "displayLines": "12"
            }
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"339481432\">Memosprite_CyreneServant_Ability02Disable</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"339481432\">Memosprite_CyreneServant_Ability02Disable</a>"
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
                  "displayLines": "CurAmazingCount"
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
                  "displayLines": "12"
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
              "modifier": "<a class=\"gModGreen\" id=\"2017433273\">Memosprite_CyreneServant_SummonerAbility03Disable</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getSummoner]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2017433273\">Memosprite_CyreneServant_SummonerAbility03Disable</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1634834847\">Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect</a>",
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
            "modifier": "<a class=\"gModGreen\" id=\"-1085868311\">Memosprite_CyreneServant_AmazingBonus</a>"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__344221092\">Servant_CyreneServant_AbilityReady_LightTeamMirrorChosenEffect</a>",
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
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "livingState": "Mask_AliveOnly"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-668366939\">Servant_CyreneServant_AbilityReady_MirrorSetup</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "LightTeamCount",
          "scope": "ContextTaskTemplate"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DarkTeamCount",
          "scope": "ContextTaskTemplate"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "#CL_LightTeamNumber",
          "scope": "ContextCaster",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Demiurge's Player Team Mirror}}"
          },
          "living": true
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "displayLines": "Index"
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
                      "value": 2,
                      "variableName": "LightTeamCount"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CyreneIndex",
                      "resetValue": 2,
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1634834847\">Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variables": {
                        "Index": {
                          "displayLines": "LightTeamCount"
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
                        "displayLines": "LightTeamCount"
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
                              "variableName": "CyreneIndex",
                              "resetValue": 1,
                              "scope": "TargetEntity"
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1634834847\">Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": {
                                  "displayLines": "LightTeamCount"
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
                              "variableName": "CyreneIndex",
                              "resetValue": 3,
                              "scope": "TargetEntity"
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1634834847\">Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect</a>",
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
                        "displayLines": "LightTeamCount"
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
                              "variableName": "CyreneIndex",
                              "resetValue": 1,
                              "scope": "TargetEntity"
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1634834847\">Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": {
                                  "displayLines": "LightTeamCount"
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
                              "variableName": "CyreneIndex",
                              "resetValue": 2,
                              "scope": "TargetEntity"
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1634834847\">Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": {
                                  "displayLines": "LightTeamCount"
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
                              "variableName": "CyreneIndex",
                              "resetValue": 3,
                              "scope": "TargetEntity"
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1634834847\">Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variables": {
                                "Index": {
                                  "displayLines": "LightTeamCount"
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
          "value": 1,
          "variableName": "#CL_MirrorSetupFlag"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1364306036\">ServantCyrene_ChargeEnergy</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurSpecialSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_MaxSpecialSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextTaskTemplate",
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + parameter[0]_AddValue) - _MaxSpecialSP), 0)"
          },
          "variableName": "_ExtraSpecialSP"
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
                "displayLines": "_ExtraSpecialSP"
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
            "displayLines": "parameter[0]_AddValue"
          },
          "isFixed": "(Fixed)",
          "ignoreBlock": true,
          "isSpecialEnergy": true
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-296031576\">ServantCyrene_Eidolon6</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1795139027\">Memosprite_CyreneServant_Eidolon6</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "variables": {
                "parameter[0]_NormalizedValue": {
                  "displayLines": "0.24"
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