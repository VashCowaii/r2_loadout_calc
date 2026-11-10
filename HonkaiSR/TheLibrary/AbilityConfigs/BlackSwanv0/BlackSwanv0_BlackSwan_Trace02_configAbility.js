const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_Trace02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1745857162\">M_BlackSwan_Trace02</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__375131949\">M_BlackSwan_Tree02_AddDOTFlag</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-993235017\">M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 999,
              "variableName": "_count"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_count",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "_maxLimit"
                    },
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"375131949\">M_BlackSwan_Tree02_AddDOTFlag</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_count"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 999,
              "variableName": "_count"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target List}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_count"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 999,
              "variableName": "_count"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 999,
              "variableName": "_count"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-739683640\">M_BlackSwan_Trace02_AddDotOnCreate</a>",
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "displayLines": "Rank06_Chance"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(1 + Rank06_Extra_Layer)"
                      },
                      "variableName": "Rank06_Weighted_Stack_Layer"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "1"
                      },
                      "variableName": "Rank06_Weighted_Stack_Layer"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "displayLines": "0.65"
                  },
                  "stackLimit": {
                    "displayLines": "Max_DOT_Layer"
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "displayLines": "2.4"
                    },
                    "ExtraLayer_DamagePercentage": {
                      "displayLines": "0.12"
                    },
                    "SecondLayer": {
                      "displayLines": "3"
                    },
                    "Spread_DamagePercentage": {
                      "displayLines": "1.8"
                    },
                    "ThirdLayer": {
                      "displayLines": "7"
                    },
                    "DefenceIgnore": {
                      "displayLines": "0.2"
                    },
                    "Cast_By_Level": 0
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "Rank06_Weighted_Stack_Layer"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1745857162\">M_BlackSwan_Trace02</a>",
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-993235017\">M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy</a>",
                  "valuePerStack": {
                    "_maxLimit": {
                      "displayLines": "3"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 99,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "displayLines": "Rank06_Chance"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(1 + Rank06_Extra_Layer)"
                          },
                          "variableName": "Rank06_Weighted_Stack_Layer"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "1"
                          },
                          "variableName": "Rank06_Weighted_Stack_Layer"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "displayLines": "0.65"
                      },
                      "stackLimit": {
                        "displayLines": "Max_DOT_Layer"
                      },
                      "valuePerStack": {
                        "Basic_DamagePercentage": {
                          "displayLines": "2.4"
                        },
                        "ExtraLayer_DamagePercentage": {
                          "displayLines": "0.12"
                        },
                        "SecondLayer": {
                          "displayLines": "3"
                        },
                        "Spread_DamagePercentage": {
                          "displayLines": "1.8"
                        },
                        "ThirdLayer": {
                          "displayLines": "7"
                        },
                        "DefenceIgnore": {
                          "displayLines": "0.2"
                        },
                        "Cast_By_Level": 0
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "Rank06_Weighted_Stack_Layer"
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-739683640\">M_BlackSwan_Trace02_AddDotOnCreate</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"375131949\">M_BlackSwan_Tree02_AddDOTFlag</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "displayLines": "Rank06_Chance"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(1 + Rank06_Extra_Layer)"
                      },
                      "variableName": "Rank06_Weighted_Stack_Layer"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "1"
                      },
                      "variableName": "Rank06_Weighted_Stack_Layer"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "displayLines": "0.65"
                  },
                  "stackLimit": {
                    "displayLines": "Max_DOT_Layer"
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "displayLines": "2.4"
                    },
                    "ExtraLayer_DamagePercentage": {
                      "displayLines": "0.12"
                    },
                    "SecondLayer": {
                      "displayLines": "3"
                    },
                    "Spread_DamagePercentage": {
                      "displayLines": "1.8"
                    },
                    "ThirdLayer": {
                      "displayLines": "7"
                    },
                    "DefenceIgnore": {
                      "displayLines": "0.2"
                    },
                    "Cast_By_Level": 0
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "Rank06_Weighted_Stack_Layer"
                  },
                  "success": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-993235017\">M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy</a>",
                      "adjustmentType": "+",
                      "variableName": "_count",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"375131949\">M_BlackSwan_Tree02_AddDOTFlag</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}