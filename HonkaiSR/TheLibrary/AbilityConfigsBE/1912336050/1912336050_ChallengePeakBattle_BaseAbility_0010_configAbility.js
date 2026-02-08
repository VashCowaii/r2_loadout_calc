const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0010",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-220577957\">Modifier_ChallengePeakBattle_BaseAbility_0010</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>",
      "stackType": "Replace",
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
                "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_0010_ADF_6",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0010_ADF_6"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_0010_ADF_5",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0010_ADF_5"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_0010_ADF_4",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0010_ADF_4"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_0010_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0010_ADF_3"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_0010_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0010_ADF_2"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1208937842\">Modifier_ChallengePeakBattle_BaseAbility_0010_02</a>",
      "execute": [
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
                  }
                ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
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
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff1_Odds",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff1_Odds",
                  "value": 1
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
                "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff2_Odds",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff2_Odds",
                  "value": 1
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
                "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff3_Odds",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff3_Odds",
                  "value": 1
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
                "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff4_Odds",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff4_Odds",
                  "value": 1
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
                "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff5_Odds",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff5_Odds",
                  "value": 1
                }
              ]
            },
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
                    "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff1_Odds",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff2_Odds",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff3_Odds",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff4_Odds",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Debuff5_Odds",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Random Event",
                  "odds": [
                    {
                      "operator": "Variables[0] (MDF_Debuff1_Odds) || RETURN",
                      "displayLines": "MDF_Debuff1_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff1_Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (MDF_Debuff2_Odds) || RETURN",
                      "displayLines": "MDF_Debuff2_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff2_Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (MDF_Debuff3_Odds) || RETURN",
                      "displayLines": "MDF_Debuff3_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff3_Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (MDF_Debuff4_Odds) || RETURN",
                      "displayLines": "MDF_Debuff4_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff4_Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (MDF_Debuff5_Odds) || RETURN",
                      "displayLines": "MDF_Debuff5_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff5_Odds"
                      ]
                    }
                  ],
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Random Event",
                  "odds": [
                    {
                      "operator": "Variables[0] (MDF_Debuff1_Odds) || RETURN",
                      "displayLines": "MDF_Debuff1_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff1_Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (MDF_Debuff2_Odds) || RETURN",
                      "displayLines": "MDF_Debuff2_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff2_Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (MDF_Debuff3_Odds) || RETURN",
                      "displayLines": "MDF_Debuff3_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff3_Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (MDF_Debuff4_Odds) || RETURN",
                      "displayLines": "MDF_Debuff4_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff4_Odds"
                      ]
                    },
                    {
                      "operator": "Variables[0] (MDF_Debuff5_Odds) || RETURN",
                      "displayLines": "MDF_Debuff5_Odds",
                      "constants": [],
                      "variables": [
                        "MDF_Debuff5_Odds"
                      ]
                    }
                  ],
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0010_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0010_ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_5",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                          "displayLines": "ChallengePeakBattle_0010_ADF_6",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0010_ADF_6"
                          ]
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
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-220577957\">Modifier_ChallengePeakBattle_BaseAbility_0010</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1208937842\">Modifier_ChallengePeakBattle_BaseAbility_0010_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0010_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0010_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0010_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    },
                    "ChallengePeakBattle_0010_ADF_4": {
                      "operator": "Variables[0] (#ADF_4) || RETURN",
                      "displayLines": "#ADF_4",
                      "constants": [],
                      "variables": [
                        "#ADF_4"
                      ]
                    },
                    "ChallengePeakBattle_0010_ADF_5": {
                      "operator": "Variables[0] (#ADF_5) || RETURN",
                      "displayLines": "#ADF_5",
                      "constants": [],
                      "variables": [
                        "#ADF_5"
                      ]
                    },
                    "ChallengePeakBattle_0010_ADF_6": {
                      "operator": "Variables[0] (#ADF_6) || RETURN",
                      "displayLines": "#ADF_6",
                      "constants": [],
                      "variables": [
                        "#ADF_6"
                      ]
                    }
                  }
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