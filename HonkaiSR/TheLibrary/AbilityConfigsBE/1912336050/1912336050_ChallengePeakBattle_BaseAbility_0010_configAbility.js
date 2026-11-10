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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "-ChallengePeakBattle_0010_ADF_6"
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "statValue": {
                "displayLines": "-ChallengePeakBattle_0010_ADF_5"
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "-ChallengePeakBattle_0010_ADF_4"
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "statValue": {
                "displayLines": "-ChallengePeakBattle_0010_ADF_3"
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "-ChallengePeakBattle_0010_ADF_2"
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
                    "entityType": "Memosprite"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                  "value": 0,
                  "variableName": "MDF_Debuff1_Odds"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff1_Odds"
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
                  "value": 0,
                  "variableName": "MDF_Debuff2_Odds"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff2_Odds"
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
                  "value": 0,
                  "variableName": "MDF_Debuff3_Odds"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff3_Odds"
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
                  "value": 0,
                  "variableName": "MDF_Debuff4_Odds"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff4_Odds"
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
                  "value": 0,
                  "variableName": "MDF_Debuff5_Odds"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff5_Odds"
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
                  "value": 1,
                  "variableName": "MDF_Debuff1_Odds"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff2_Odds"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff3_Odds"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff4_Odds"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_Debuff5_Odds"
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
                    "entityType": "Memosprite"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Random Event",
                  "odds": [
                    {
                      "displayLines": "MDF_Debuff1_Odds"
                    },
                    {
                      "displayLines": "MDF_Debuff2_Odds"
                    },
                    {
                      "displayLines": "MDF_Debuff3_Odds"
                    },
                    {
                      "displayLines": "MDF_Debuff4_Odds"
                    },
                    {
                      "displayLines": "MDF_Debuff5_Odds"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                      "displayLines": "MDF_Debuff1_Odds"
                    },
                    {
                      "displayLines": "MDF_Debuff2_Odds"
                    },
                    {
                      "displayLines": "MDF_Debuff3_Odds"
                    },
                    {
                      "displayLines": "MDF_Debuff4_Odds"
                    },
                    {
                      "displayLines": "MDF_Debuff5_Odds"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                        "displayLines": "ChallengePeakBattle_0010_ADF_1"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_1"
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_2"
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_3"
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_4"
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_5"
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "displayLines": "ChallengePeakBattle_0010_ADF_6"
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
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0010_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "ChallengePeakBattle_0010_ADF_3": {
                      "displayLines": "#ADF_3"
                    },
                    "ChallengePeakBattle_0010_ADF_4": {
                      "displayLines": "#ADF_4"
                    },
                    "ChallengePeakBattle_0010_ADF_5": {
                      "displayLines": "#ADF_5"
                    },
                    "ChallengePeakBattle_0010_ADF_6": {
                      "displayLines": "#ADF_6"
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