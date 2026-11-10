const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032010,
  "trimCharacterName": 4032010,
  "abilityList": [
    "4032010_Modifiers",
    "4032010_Monster_AML_Minion02_01_AbilityP01",
    "4032010_Monster_AML_Minion02_01_Ability01_Part02",
    "4032010_Monster_AML_Minion02_01_Ability01_Part01",
    "4032010_Handling"
  ],
  "abilityObject": {
    "4032010_Modifiers": {
      "fileName": "4032010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1976044893\">AML_Minion02_01_RageStandby</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1287044096\">AML_Minion02_01_Rage</a>",
                  "valuePerStack": {
                    "PassiveAbilityInitiate_P1_AttackAddedRatio": {
                      "displayLines": "UnusedUnderThisBase_8024"
                    },
                    "PassiveAbilityInitiate_P2_DefenceAddedRatio": {
                      "displayLines": "ENEMIES_OBJECT_UNUSED__187"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1287044096\">AML_Minion02_01_Rage</a>",
          "stackData": [
            "PassiveSkillInitiate_P1_AttackAddedRatio",
            "PassiveSkillInitiate_P2_DefenceAddedRatio"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "attacked",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1287044096\">AML_Minion02_01_Rage</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "attacked",
                      "scope": "TargetEntity"
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
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "PassiveSkillInitiate_P1_AttackAddedRatio"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(0 - PassiveSkillInitiate_P2_DefenceAddedRatio)"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1976044893\">AML_Minion02_01_RageStandby</a>"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "attacked",
                  "resetValue": 1,
                  "scope": "TargetEntity"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__351278960\">Enemy_AML_Minion02_01_RallyHP_Tutorial</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1754811478\">Enemy_AML_Minion02_01_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1286501859\">Enemy_AML_Minion02_01_AbilityP01_AttackUp</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AttackAddedRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
          "description": "The next attack's DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Renewal",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TriggerFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_AllDamageTypeAddedRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TriggerFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "TriggerFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TriggerFlag",
                    "compareType": "=",
                    "value2": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
          "stackType": "Replace",
          "useEntitySnapshot": true,
          "description": "After attacking, restore a portion of Corroded HP. The more targets are attacked, the more HP is restored. When Corrosion is dispelled via restorative means, obtain \"Renewal.\"",
          "type": "Other",
          "statusName": "Corrosion",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage Type",
                    "stageType": "Mainline"
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>"
                }
              ]
            },
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(HealCount + 1)"
                      },
                      "variableName": "HealCount"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Receiving Heal Start [Owner]"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_RallyHP"
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "variableName": "MDF_CurrentHPRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_RallyHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "MDF_RallyHP"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "displayLines": "MDF_Strongth_AllDamageTypeAddedRatio"
                            }
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "variableName": "HealCount"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "MDF_MaxHP_DownScale",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "MDF_CurrentHPRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healer": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healFlat": {
                    "displayLines": "((((HealCount * MDF_HealPercentage) * (MDF_RallyHP - MDF_CurrentHPRatio)) * MDF_CurrentHP_DownScale) * 1)"
                  },
                  "debtHeal": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "variableName": "HealCount"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "onChange": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "variableName": "MDF_CurrentHPRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_RallyHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "MDF_RallyHP"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "displayLines": "MDF_Strongth_AllDamageTypeAddedRatio"
                            }
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "onChange": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "variableName": "MDF_CurrentHPRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_RallyHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "MDF_RallyHP"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "displayLines": "MDF_Strongth_AllDamageTypeAddedRatio"
                            }
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "onChange": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "variableName": "MDF_CurrentHPRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_RallyHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "MDF_RallyHP"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1714614232\">Enemy_AML_Minion02_01_RallyHP_V2_Strongth</a>[<span class=\"descriptionNumberColor\">Renewal</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "displayLines": "MDF_Strongth_AllDamageTypeAddedRatio"
                            }
                          }
                        },
                        "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1719491347\">Enemy_AML_Minion02_01_RallyHP</a>",
          "stackType": "Replace",
          "useEntitySnapshot": true,
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(HealCount + 1)"
                      },
                      "variableName": "HealCount"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_RallyHP"
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "variableName": "MDF_CurrentHPRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_RallyHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "MDF_RallyHP"
                        }
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
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "displayLines": "(HealCount * MDF_HealPercentage)"
                  },
                  "formula": "Heal from Target MaxHP",
                  "debtHeal": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "variableName": "HealCount"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1100776487\">Enemy_AML_Minion02_01_RallyHP_HealMark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "useEntitySnapshot": true,
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "MDF_DefenderCurrentHPRatio_Before",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "MDF_DefenderCurrentHPRatio_After",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_DefenderCurrentHPRatio_After",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "MDF_DefenderCurrentHPRatio_Before"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "MDF_DefenderRallyHP",
                          "scope": "ContextModifier",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "displayLines": "(((1 - MDF_RallyTransferRatio) * (MDF_DefenderCurrentHPRatio_After - MDF_DefenderCurrentHPRatio_Before)) + MDF_DefenderRallyHP)"
                            },
                            "MDF_HealPercentage": {
                              "displayLines": "MDF_Rally_HealPercentage"
                            },
                            "MDF_HealUpRatio": {
                              "displayLines": "MDF_Rally_HealUpRatio"
                            },
                            "MDF_Strongth_AllDamageTypeAddedRatio": {
                              "displayLines": "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "displayLines": "(((1 - MDF_RallyTransferRatio) * MDF_DefenderCurrentHPRatio_After) + (MDF_RallyTransferRatio * MDF_DefenderCurrentHPRatio_Before))"
                            },
                            "MDF_HealPercentage": {
                              "displayLines": "MDF_Rally_HealPercentage"
                            },
                            "MDF_HealUpRatio": {
                              "displayLines": "MDF_Rally_HealUpRatio"
                            },
                            "MDF_Strongth_AllDamageTypeAddedRatio": {
                              "displayLines": "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
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
              "eventTrigger": "Being Attacked [Owner]: Completed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1966517473\">TaskList_Standard_RallyHP_ListenDirtyHPChange</a>",
              "parse": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "MDF_MaxHP_DownScale",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "variableName": "MDF_CurrentHP_DownScale",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "MDF_CurrentHPRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_DirtyRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_DirtyValue",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "((1 - MDF_DirtyRatio) - ((MDF_DirtyValue / MDF_CurrentHP_DownScale) / 1))"
                  },
                  "variableName": "MDF_MaxHP_Dirty_Ratio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "MDF_MaxHP_Dirty_Ratio"
                    }
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
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MDF_MaxHP_Dirty_Ratio"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "displayLines": "MDF_MaxHP_Dirty_Ratio"
                            },
                            "MDF_HealPercentage": {
                              "displayLines": "MDF_Rally_HealPercentage"
                            },
                            "MDF_HealUpRatio": {
                              "displayLines": "MDF_Rally_HealUpRatio"
                            },
                            "MDF_Strongth_AllDamageTypeAddedRatio": {
                              "displayLines": "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1785562897\">TaskList_Standard_RallyHP_ListenMaxHPChange</a>",
              "parse": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "MDF_MaxHP_DownScale",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "variableName": "MDF_CurrentHP_DownScale",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "MDF_CurrentHPRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
                    "compareType": ">",
                    "value2": 1
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
                        "value1": "MDF_CurrentHPRatio",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]",
                          "valuePerStack": {
                            "MDF_RallyHP": 1,
                            "MDF_HealPercentage": {
                              "displayLines": "MDF_Rally_HealPercentage"
                            },
                            "MDF_HealUpRatio": {
                              "displayLines": "MDF_Rally_HealUpRatio"
                            },
                            "MDF_Strongth_AllDamageTypeAddedRatio": {
                              "displayLines": "MDF_Rally_Strongth_AllDamageTypeAddedRatio"
                            }
                          }
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1,
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1966517473\">TaskList_Standard_RallyHP_ListenDirtyHPChange</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1966517473\">TaskList_Standard_RallyHP_ListenDirtyHPChange</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1785562897\">TaskList_Standard_RallyHP_ListenMaxHPChange</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1785562897\">TaskList_Standard_RallyHP_ListenMaxHPChange</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1785562897\">TaskList_Standard_RallyHP_ListenMaxHPChange</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1756618074\">Enemy_AML_Minion02_01_RallyHP_Controller</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_DefenderCurrentHP_Before",
                  "scope": "ContextModifier",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_DefenderCurrentHP_After",
                  "scope": "ContextModifier",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "MDF_DefenderCurrentHP_Before"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1719491347\">Enemy_AML_Minion02_01_RallyHP</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1719491347\">Enemy_AML_Minion02_01_RallyHP</a>",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "displayLines": "MDF_DefenderCurrentHP_Before"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1719491347\">Enemy_AML_Minion02_01_RallyHP</a>",
                          "valuePerStack": {
                            "MDF_RallyHP": {
                              "displayLines": "MDF_DefenderCurrentHP_Before"
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
      ],
      "references": []
    },
    "4032010_Monster_AML_Minion02_01_AbilityP01": {
      "fileName": "4032010_Monster_AML_Minion02_01_AbilityP01",
      "childAbilityList": [
        "4032010_Monster_AML_Minion02_01_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"528776627\">Enemy_AML_Minion02_01_AbilityP01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1754811478\">Enemy_AML_Minion02_01_EffectController</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage Type",
            "stageType": "Mainline"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"351278960\">Enemy_AML_Minion02_01_RallyHP_Tutorial</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__528776627\">Enemy_AML_Minion02_01_AbilityP01</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
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
    },
    "4032010_Monster_AML_Minion02_01_Ability01_Part02": {
      "fileName": "4032010_Monster_AML_Minion02_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "displayLines": "{[SkillP01[0]]}"
            },
            "MDF_Rally_HealPercentage": {
              "displayLines": "{[SkillP01[1]]}"
            },
            "MDF_Rally_HealUpRatio": {
              "displayLines": "{[SkillP01[2]]}"
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "displayLines": "{[SkillP01[3]]}"
            }
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "{[Skill01[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "{[Skill01[1]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "{[Skill01[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "{[Skill01[1]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "{[Skill01[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "{[Skill01[1]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "{[Skill01[0]]}"
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "{[Skill01[1]]}"
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032010_Monster_AML_Minion02_01_Ability01_Part01": {
      "fileName": "4032010_Monster_AML_Minion02_01_Ability01_Part01",
      "childAbilityList": [
        "4032010_Monster_AML_Minion02_01_Ability01_Camera",
        "4032010_Monster_AML_Minion02_01_Ability01_Part01",
        "4032010_Monster_AML_Minion02_01_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Minion02_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "4032010_Handling": {
      "fileName": "4032010_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Common_SequenceThree_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSequenceSkill",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  "Use Sequence Ability Option"
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
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