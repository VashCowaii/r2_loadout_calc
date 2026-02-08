const configAbility = {
  "fileName": "Qingque_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
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
                      "target": "{{Current Action Target List}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1539822909\">QingQue_Passive_Hu_Flag</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Qingque_Eidolon4_ATK_Special",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Skill Point User}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Qingque_Eidolon4_ATK",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Skill Point User}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
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
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ],
      "description": "Launches 1 Follow-Up ATK immediately after using Basic ATK or Enhanced Basic ATK on an enemy, dealing Quantum DMG equal to 100% of Basic ATK DMG or Enhanced Basic ATK DMG.",
      "type": "Buff",
      "statusName": "Self-Sufficer"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-514950186\">Qingque_SpeedUpPointB3</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                "displayLines": "MDF_SpeedUp",
                "constants": [],
                "variables": [
                  "MDF_SpeedUp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedUp"
      ],
      "latentQueue": [],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedUp</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1715908114\">QingQue_Passive_Hu_01</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-202055066\">QingQue_Passive_Hu_Flag_Yu</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__757701155\">QingQue_Passive_Hu_Flag_Tiao</a>",
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1600165622\">QingQue_Passive_Hu_Flag_Tong</a>",
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-797865006\">QingQue_Passive_Hu_Flag_Wan</a>",
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1539822909\">QingQue_Passive_Hu_Flag</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__723752004\">MWQingque_Attack_Transfer</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Basic ATK"
            },
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Skill"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1430814127\">QingQue_Passive_Yu</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__659202160\">QingQue_Passive_Tiao</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tiao",
                  "value": {
                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(QingQue_Tiao + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Tiao"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1184170005\">QingQue_Passive_Tong</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tong",
                  "value": {
                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(QingQue_Tong + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Tong"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1921510139\">QingQue_Passive_Wan</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Wan",
                  "value": {
                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(QingQue_Wan + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Wan"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1424511139\">QingQue_PassiveCount</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1539822909\">QingQue_Passive_Hu_Flag</a>",
              "removeAllInstances": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
              "valuePerStack": {
                "AbilityRank_Eidolon2_P1_SPAdd": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 4
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tiao",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tong",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "QingQue_CardCount",
                        "compareType": "=",
                        "value2": 4
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                          "displayLines": "MDF_PropertyValue01",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue01"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-797865006\">QingQue_Passive_Hu_Flag_Wan</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Wan",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_CardCount",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 4
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_CardCount",
                            "compareType": "=",
                            "value2": 4
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                              "displayLines": "MDF_PropertyValue01",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue01"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1600165622\">QingQue_Passive_Hu_Flag_Tong</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
                          "removeAllInstances": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Tong",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_CardCount",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 4
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_CardCount",
                                "compareType": "=",
                                "value2": 4
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
                              "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                                  "displayLines": "MDF_PropertyValue01",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PropertyValue01"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"757701155\">QingQue_Passive_Hu_Flag_Tiao</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
                              "removeAllInstances": true
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_CardCount",
                              "value": 0
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
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1715908114\">QingQue_Passive_Hu_01</a>"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Qingque_Bonus",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            "Refresh QingQue Bar-State"
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1998273394\">QingQue_PassiveCount_Teammate</a>",
              "valuePerStack": {
                "QingQue_CardCount_Teammate": {
                  "operator": "Variables[0] (QingQue_CardCount) || RETURN",
                  "displayLines": "QingQue_CardCount",
                  "constants": [],
                  "variables": [
                    "QingQue_CardCount"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1998273394\">QingQue_PassiveCount_Teammate</a>"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue01"
      ],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1998273394\">QingQue_PassiveCount_Teammate</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
                  "valuePerStack": {
                    "AbilityRank_Eidolon2_P1_SPAdd": {
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
            "Refresh QingQue Bar-State"
          ]
        }
      ],
      "stackData": [
        "QingQue_CardCount_Teammate"
      ],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1659019084\">Qingque_ChangeCard</a>"
                    }
                  ]
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
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (SkillRank_Rank02_P1_SPAdd) || RETURN",
                    "displayLines": "SkillRank_Rank02_P1_SPAdd",
                    "constants": [],
                    "variables": [
                      "SkillRank_Rank02_P1_SPAdd"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1659019084\">Qingque_ChangeCard</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_CardCount",
                "compareType": "<",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.33
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_CardCount",
                  "value": {
                    "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(QingQue_CardCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_CardCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_CardCount",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 4
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 4
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 4
                              },
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_CardCount",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || ADD || RETURN",
                                    "displayLines": "(QingQue_CardCount + 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_CardCount"
                                    ]
                                  }
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.33
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
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
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Wan",
                                        "compareType": ">=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_CardCount",
                                        "compareType": "=",
                                        "value2": 5
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_CardCount",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_CardCount - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_CardCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Tong",
                                        "compareType": "=",
                                        "value2": 0
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Wan",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Wan - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Wan"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tiao",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                  "displayLines": "QingQue_Tong",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tong"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
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
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">=",
                                            "value2": 1
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tiao",
                                            "compareType": ">=",
                                            "value2": 1
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                  "displayLines": "QingQue_Tong",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tong"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Random Chance",
                                                    "chance": 0.5
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tiao",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tiao - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tiao"
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
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Tong",
                                        "compareType": ">=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_CardCount",
                                        "compareType": "=",
                                        "value2": 5
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_CardCount",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_CardCount - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_CardCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Wan",
                                        "compareType": "=",
                                        "value2": 0
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tong",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tong - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tong"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tiao",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                  "displayLines": "QingQue_Tong",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tong"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
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
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">=",
                                            "value2": 1
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tiao",
                                            "compareType": ">=",
                                            "value2": 1
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Wan) || RETURN",
                                                  "displayLines": "QingQue_Wan",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Wan"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Random Chance",
                                                    "chance": 0.5
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tiao",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tiao - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tiao"
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
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Tiao",
                                        "compareType": ">=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_CardCount",
                                        "compareType": "=",
                                        "value2": 5
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_CardCount",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_CardCount - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_CardCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "QingQue_Wan",
                                        "compareType": "=",
                                        "value2": 0
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                              "displayLines": "QingQue_Tiao",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tiao"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tiao",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tiao - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tiao"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tong",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tong - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tong"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
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
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">=",
                                            "value2": 1
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">=",
                                            "value2": 1
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">",
                                            "value2": {
                                              "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                              "displayLines": "QingQue_Tong",
                                              "constants": [],
                                              "variables": [
                                                "QingQue_Tong"
                                              ]
                                            }
                                          },
                                          "passed": [
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "QingQue_Tong",
                                              "value": {
                                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(QingQue_Tong - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "QingQue_Tong"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Wan) || RETURN",
                                                  "displayLines": "QingQue_Wan",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Wan"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Random Chance",
                                                    "chance": 0.5
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
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
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "SkillRank_Rank02_P1_SPAdd"
      ],
      "latentQueue": [
        "QingQue_CardCount_Teammate",
        "QingQue_BPCoolDown"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
      "stackType": "ReplaceByCaster",
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
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"723752004\">MWQingque_Attack_Transfer</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_BPCount",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ],
      "description": "Basic ATK is Enhanced and increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Hidden Hand"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-954959718\">QingQue_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-954959718\">QingQue_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "removeAllInstances": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
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
                "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_DamageAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddedRatio"
      ],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ],
      "description": "Each stack increases DMG by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>, up to 4 stacks.",
      "type": "Buff",
      "statusName": "DMG Boost",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__823901022\">QingQue_Ability11PreShowModifier</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "QingQue_BPCoolDown"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Basic ATK"
        ],
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-514950186\">Qingque_SpeedUpPointB3</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.1(SPD Change)"
        }
      }
    }
  ],
  "references": []
}