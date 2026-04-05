const configAbility = {
  "fileName": "4014013_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1711107470\">W4_Nikadory_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Nikadory_BattleScore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-95825091\">Monster_W4_Nikadory_BattleScore2Count1</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-146157948\">Monster_W4_Nikadory_BattleScore2Count2</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Death That Halted Battles",
                      "desc": "In a single battle against \"Savage God, Mad King, Incarnation of Strife,\" destroy their \"War Armor\" and \"Titanic Corpus\"",
                      "rarity": "Low"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-146157948\">Monster_W4_Nikadory_BattleScore2Count2</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-95825091\">Monster_W4_Nikadory_BattleScore2Count1</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Death That Halted Battles",
                      "desc": "In a single battle against \"Savage God, Mad King, Incarnation of Strife,\" destroy their \"War Armor\" and \"Titanic Corpus\"",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1727885089\">W4_Nikadory_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Nikadory_BattleScore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1664389231\">Monster_W4_Nikadory_BattleScore1Count</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1664389231\">Monster_W4_Nikadory_BattleScore1Count</a>",
                    "compareType": "=",
                    "value2": 4,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Supreme Glory",
                      "desc": "In a single battle against \"Savage God, Mad King, Incarnation of Strife,\" attain the maximum #1 stacks of \"Glory\" for all ally characters",
                      "rarity": "Low",
                      "params": [
                        2
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1563295566\">Monster_W4_Nikadory_SpecialAICheck</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__437668983\">Monster_W4_Nikadory_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
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
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-994497740\">Monster_W4_Nikadory_RLBoss_Passive</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"437668983\">Monster_W4_Nikadory_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio_PerLayer"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-818020607\">Monster_W4_Nikadory_AddShield</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
              "stackLimit": {
                "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_565",
                  "MDF_BraveLayer"
                ]
              },
              "valuePerStack": {
                "MDF_DamageResistance": {
                  "operator": "Variables[0] (UnusedUnderThisBase_566) || RETURN",
                  "displayLines": "UnusedUnderThisBase_566",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_566"
                  ]
                },
                "MDF_CrackedEffect": {
                  "operator": "Variables[0] (UnusedUnderThisBase_567) || RETURN",
                  "displayLines": "UnusedUnderThisBase_567",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_567"
                  ]
                },
                "MDF_CrackedDamage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_568) || RETURN",
                  "displayLines": "UnusedUnderThisBase_568",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_568"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_565",
                  "MDF_BraveLayer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1717699504\">Monster_W4_Nikadory_UltraPrepare</a>",
      "stackData": [],
      "latentQueue": [
        "Tutorial_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2109179973\">Monster_W4_Nikadory_Main_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": [
        "Tutorial_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1153492503\">Monster_W4_Nikadory_EnhanceShield_Enhance</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ShieldAddMaxLayer",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_CurrentLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "multiplier": 1
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
                "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_CurrentLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentLayer",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                      "displayLines": "MDF_AddMaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_AddMaxLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentLayer",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                            "displayLines": "{[Skill05[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill05[1]]}"
                            ]
                          },
                          "addStacksPerTrigger": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                            "displayLines": "{[Skill05[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill05[1]]}"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Constants[0] (1) || Variables[0] (MDF_CurrentLayer) || SUB || RETURN",
                            "displayLines": "(1 - MDF_CurrentLayer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_CurrentLayer"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_AddMaxLayer) || SUB || RETURN",
                        "displayLines": "(0 - MDF_AddMaxLayer)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_AddMaxLayer"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ShieldAddMaxLayer",
              "value": {
                "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                "displayLines": "MDF_AddMaxLayer",
                "constants": [],
                "variables": [
                  "MDF_AddMaxLayer"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
              "stackLimit": {
                "operator": "Variables[0] (MDF_AddMaxLayer) || Variables[1] ({[Skill05[1]]}) || ADD || RETURN",
                "displayLines": "(MDF_AddMaxLayer + {[Skill05[1]]})",
                "constants": [],
                "variables": [
                  "MDF_AddMaxLayer",
                  "{[Skill05[1]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                "displayLines": "MDF_AddMaxLayer",
                "constants": [],
                "variables": [
                  "MDF_AddMaxLayer"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1187494701\">Monster_W4_Nikadory_Shield_Enhance</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ShieldAddMaxLayer",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_CurrentLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "multiplier": 1
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
                "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_CurrentLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentLayer",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                      "displayLines": "MDF_AddMaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_AddMaxLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentLayer",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                            "displayLines": "{[Skill05[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill05[1]]}"
                            ]
                          },
                          "addStacksPerTrigger": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                            "displayLines": "{[Skill05[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill05[1]]}"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Constants[0] (1) || Variables[0] (MDF_CurrentLayer) || SUB || RETURN",
                            "displayLines": "(1 - MDF_CurrentLayer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_CurrentLayer"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_AddMaxLayer) || SUB || RETURN",
                        "displayLines": "(0 - MDF_AddMaxLayer)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_AddMaxLayer"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ShieldAddMaxLayer",
              "value": {
                "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                "displayLines": "MDF_AddMaxLayer",
                "constants": [],
                "variables": [
                  "MDF_AddMaxLayer"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1631457444\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance_Nikadory</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
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
              "modifier": "<a class=\"gModGreen\" id=\"1187494701\">Monster_W4_Nikadory_Shield_Enhance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1153492503\">Monster_W4_Nikadory_EnhanceShield_Enhance</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1187494701\">Monster_W4_Nikadory_Shield_Enhance</a>",
                  "valuePerStack": {
                    "MDF_AddMaxLayer": {
                      "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                      "displayLines": "MDF_AddMaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_AddMaxLayer"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
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
                "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1153492503\">Monster_W4_Nikadory_EnhanceShield_Enhance</a>",
                  "valuePerStack": {
                    "MDF_AddMaxLayer": {
                      "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                      "displayLines": "MDF_AddMaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_AddMaxLayer"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases max \"War Armor\" and \"Titanic Corpus\" stacks. Dispelled when %CasterName's \"War Armor\" is broken.",
      "type": "Buff",
      "effectName": "Max \"War Armor\" Boost",
      "statusName": "Indomitable"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-146157948\">Monster_W4_Nikadory_BattleScore2Count2</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-95825091\">Monster_W4_Nikadory_BattleScore2Count1</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1664389231\">Monster_W4_Nikadory_BattleScore1Count</a>",
      "stackType": "Replace",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014016,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Victor, Acropolis, and Lord of Strife",
                "isBaseCompare": true
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Distributes the \"All Realms Leveled, All Legions to Dust\" attack unleashed by \"Victor, Acropolis, and Lord of Strife.\""
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Tutorial_Flag"
      ],
      "description": "Distribute the \"All Realms Leveled, All Legions to Dust\" attack unleashed by \"Savage God, Mad King, Incarnation of Strife.\"",
      "type": "Other",
      "effectName": "Distributed Attack",
      "statusName": "Forthcoming Strife"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-832277343\">Monster_W4_Nikadory_ZeroCheck</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-945349590\">Monster_W4_Nikadory_FullPhase1</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1258691339\">Monster_W4_Nikadory_WithHearse</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1873725361\">Monster_W4_Nikadory_InTurn</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014015,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Savage God, Mad King, Incarnation of Strife (Complete)",
                        "isBaseCompare": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014015,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Savage God, Mad King, Incarnation of Strife (Complete)",
                        "isBaseCompare": true
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentTurn",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentTurn",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 3
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_CurrentTurn",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "AIFlag",
                              "value": 5
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
              "name": "Define Custom Variable",
              "variableName": "MDF_CurrentTurn",
              "value": {
                "operator": "Variables[0] (MDF_CurrentTurn) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_CurrentTurn + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_CurrentTurn"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_CurrentTurn",
                "compareType": ">",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentTurn",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentTurn) || Constants[0] (3) || SUB || RETURN",
                    "displayLines": "(MDF_CurrentTurn - 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      "MDF_CurrentTurn"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1873725361\">Monster_W4_Nikadory_InTurn</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 4014015,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Savage God, Mad King, Incarnation of Strife (Complete)",
                        "isBaseCompare": true,
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentTurn",
                        "compareType": ">",
                        "value2": 2
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 4014015,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Savage God, Mad King, Incarnation of Strife (Complete)",
                        "isBaseCompare": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentTurn",
                        "compareType": ">",
                        "value2": 2
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1717699504\">Monster_W4_Nikadory_UltraPrepare</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1873725361\">Monster_W4_Nikadory_InTurn</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2054083377\">Monster_W4_Nikadory_BeingAttacked</a>",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1557319480\">Monster_W4_Nikadory_EnergyReady</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"261985089\">Monster_W4_Nikadory_Energy</a>",
              "valuePerStack": {
                "MDF_SPAddedRatio": {
                  "operator": "Variables[0] (MDF_SPAddedRatio) || RETURN",
                  "displayLines": "MDF_SPAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_SPAddedRatio"
                  ]
                }
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1916138422\">Monster_W4_Nikadory_Ability04AlreadyAttack</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__261985089\">Monster_W4_Nikadory_Energy</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valuePercent": {
                "operator": "Variables[0] (MDF_SPAddedRatio) || RETURN",
                "displayLines": "MDF_SPAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_SPAddedRatio"
                ]
              },
              "isFixed": "(Fixed)"
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "popUpText": "Energy Regeneration",
              "living": true
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_SPAddedRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__729203631\">Monster_W4_Nikadory_Brave_Immune</a>[<span class=\"descriptionNumberColor\">Immune to Crowd Control</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ],
      "description": "Immune to Crowd Control debuffs.",
      "type": "Buff",
      "effectName": "Immune to Crowd Control",
      "statusName": "Immune to Crowd Control"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1462384175\">Monster_W4_Nikadory_Brave_Judge</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Layer",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"729203631\">Monster_W4_Nikadory_Brave_Immune</a>[<span class=\"descriptionNumberColor\">Immune to Crowd Control</span>]"
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
        "Tutorial_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1387796516\">Monster_W4_Nikadory_BraveRefresh</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AllowAddToGridFightBackend"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}.[[getSummoner]]"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                "compareType": ">",
                "value2": 1,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                    "displayLines": "UnusedUnderThisBase_310",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_310"
                    ]
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
                  "target": "{{Modifier Holder}}.[[getMemosprite]]"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                    "displayLines": "UnusedUnderThisBase_310",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_310"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_308) || RETURN",
                      "displayLines": "UnusedUnderThisBase_308",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_308"
                      ]
                    },
                    "MDF_EnergyAddRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_309) || RETURN",
                      "displayLines": "UnusedUnderThisBase_309",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_309"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                      "displayLines": "UnusedUnderThisBase_310",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_310"
                      ]
                    }
                  }
                }
              ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1462384175\">Monster_W4_Nikadory_Brave_Judge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"729203631\">Monster_W4_Nikadory_Brave_Immune</a>[<span class=\"descriptionNumberColor\">Immune to Crowd Control</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
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
                  "name": "Update Modifier Description",
                  "popUpText": "Each stack of \"Glory\" increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span> and Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_EnergyAddRatio</span>. When unleashing Skill or Ultimate, adds 1 stack of \"Glory.\" The memosprite's stacks will be consistent with Memotrainer's, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s). Attacking can dispel a certain stack of \"Titanic Corpus\" corresponding to the number of \"Glory\" stacks."
                }
              ]
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
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
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_EnergyAddRatio) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_EnergyAddRatio * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_EnergyAddRatio",
                  "ModifierLayers"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_BattleScore",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BattleScore",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1664389231\">Monster_W4_Nikadory_BattleScore1Count</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                    "displayLines": "UnusedUnderThisBase_310",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_310"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                    "displayLines": "UnusedUnderThisBase_310",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_310"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FirstChange",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "FirstChange",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ModifierLayers",
                "compareType": "NOT=",
                "value2": {
                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                  "displayLines": "MDF_MaxLayer",
                  "constants": [],
                  "variables": [
                    "MDF_MaxLayer"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
              "stackLimit": {
                "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                "displayLines": "UnusedUnderThisBase_310",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_310"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
              "stackLimit": {
                "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                "displayLines": "UnusedUnderThisBase_310",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_310"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start "
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio_PerLayer",
        "MDF_EnergyAddRatio",
        "MDF_MaxLayer"
      ],
      "latentQueue": [
        "Tutorial_Flag"
      ],
      "description": "Each stack of \"Glory\" increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span> and Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_EnergyAddRatio</span>. When launching Skill or Ultimate, adds 1 stack of \"Glory,\" up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s). Attacking can dispel a certain stack of \"Titanic Corpus\" corresponding to the number of \"Glory\" stacks.",
      "type": "Other",
      "effectName": "Glory",
      "statusName": "Glory",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False",
              "state": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "MaxLayer",
              "variableName": "MDF_MaxLayer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageResistance_PerLayer) || RETURN",
                "displayLines": "MDF_DamageResistance_PerLayer",
                "constants": [],
                "variables": [
                  "MDF_DamageResistance_PerLayer"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "assignState": "True",
              "state": "Active"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_FirstUse",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FirstUse",
                  "value": 2
                },
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FirstUse",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_DamageResistance_PerLayer</span>. When stacks reach 0, action is delayed and this unit immediately loses a certain amount of HP, regenerates Energy for all targets, and dispels \"Titanic Corpus.\" When attacked by targets with \"Glory,\" \"Titanic Corpus\" stacks corresponding to the target's \"Glory\" stacks will be reduced. While this unit has \"Titanic Corpus,\" increases the DMG dealt by the next attack by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span> and causes the attacked target to become Imprisoned.",
      "type": "Other",
      "effectName": "Titanic Corpus",
      "statusName": "Titanic Corpus",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False",
              "state": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "MaxLayer",
              "variableName": "MDF_MaxLayer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_FirstStack",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False",
                  "state": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FirstStack",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                "compareType": "=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageResistance_PerLayer) || RETURN",
                    "displayLines": "MDF_DamageResistance_PerLayer",
                    "constants": [],
                    "variables": [
                      "MDF_DamageResistance_PerLayer"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
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
                    "value1": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-832277343\">Monster_W4_Nikadory_ZeroCheck</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (MDF_CrackedDamageAfter) || RETURN",
                      "displayLines": "MDF_CrackedDamageAfter",
                      "constants": [],
                      "variables": [
                        "MDF_CrackedDamageAfter"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-832277343\">Monster_W4_Nikadory_ZeroCheck</a>"
                }
              ]
            }
          ]
        }
      ],
      "description": "Decreases DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageResistance_PerLayer</span>. Loses 1 stack of \"War Armor\" after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit and delaying their action. The ally unit that destroyed the \"War Armor\" will regenerate Energy. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn.",
      "type": "Other",
      "statusName": "War Armor",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1273411180\">Monster_W4_Nikadory_AlreadyControl</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__965106610\">Monster_W4_Nikadory_Passive</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1471859507\">Monster_W4_Nikadory_Charge</a>"
              },
              "passed": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_BraveLayer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-762548766\">Monster_W4_Nikadory_ShieldReduce</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (ShieldAddMaxLayer) || RETURN",
                          "displayLines": "ShieldAddMaxLayer",
                          "constants": [],
                          "variables": [
                            "ShieldAddMaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "valueType": "Layer",
                          "variableName": "MDF_ShieldLayer",
                          "modifierName": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                          "addStacksPerTrigger": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_ShieldLayer) || SUB || RETURN",
                            "displayLines": "(0 - MDF_ShieldLayer)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_ShieldLayer"
                            ]
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                          "addStacksPerTrigger": {
                            "operator": "Constants[0] (0) || Variables[0] (ShieldAddMaxLayer) || SUB || RETURN",
                            "displayLines": "(0 - ShieldAddMaxLayer)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "ShieldAddMaxLayer"
                            ]
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                      },
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "MDF_ActionDelayRatio"
                        },
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "popUpText": "Action Delayed"
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)v2}}"
                          },
                          "valuePercent": {
                            "operator": "Variables[0] (MDF_EnhanceSPAddedRatio) || RETURN",
                            "displayLines": "MDF_EnhanceSPAddedRatio",
                            "constants": [],
                            "variables": [
                              "MDF_EnhanceSPAddedRatio"
                            ]
                          },
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)v2}}"
                          },
                          "popUpText": "Energy Regeneration",
                          "living": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-146157948\">Monster_W4_Nikadory_BattleScore2Count2</a>"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ReduceLayer",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "End Broken State [Owner]"
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Modifier_Callback_Value",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                        "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_565",
                          "MDF_BraveLayer"
                        ]
                      },
                      "addStacksPerTrigger": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1471859507\">Monster_W4_Nikadory_Charge</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageResistance_PerLayer",
        "MDF_ActionDelayRatio",
        "MDF_CrackedDamage",
        "MDF_CrackedDamageAfter",
        "MDF_SPAddedRatio",
        "MDF_EnhanceSPAddedRatio",
        "MDF_MaxLayer"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-762548766\">Monster_W4_Nikadory_ShieldReduce</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_ReduceLayer"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-545445682\">Monster_W4_Nikadory_EnduranceLockWeakness</a>",
      "modifierFlags": [
        "Endurance",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-208688438\">Monster_W4_Nikadory_Endurance</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1471859507\">Monster_W4_Nikadory_Charge</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014010,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Savage God, Mad King, Incarnation of Strife"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2087329841\">Monster_W4_Nikadory_Charge_UnselectableCheck</a>"
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
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1273411180\">Monster_W4_Nikadory_AlreadyControl</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1849683412\">Monster_W4_Nikadory_WeaponEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                "displayLines": "MDF_DamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                    "displayLines": "UnusedUnderThisBase_310",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_310"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_308) || RETURN",
                      "displayLines": "UnusedUnderThisBase_308",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_308"
                      ]
                    },
                    "MDF_EnergyAddRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_309) || RETURN",
                      "displayLines": "UnusedUnderThisBase_309",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_309"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                      "displayLines": "UnusedUnderThisBase_310",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_310"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 2
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 4014014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Savage God, Mad King, Incarnation of Strife",
                            "isBaseCompare": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All(with Unselectable)}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": ">=",
                            "value2": 1,
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 401402,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null,
                              "isCompareUniqueID": true
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
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
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                    "invertCondition": true,
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1273411180\">Monster_W4_Nikadory_AlreadyControl</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                      "duration": 1,
                      "baseChance": {
                        "operator": "Variables[0] (UnusedUnderThisBase_569) || RETURN",
                        "displayLines": "UnusedUnderThisBase_569",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_569"
                        ]
                      },
                      "immediateEffect": true,
                      "valuePerStack": {
                        "MDF_ActionDelayRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_570) || RETURN",
                          "displayLines": "UnusedUnderThisBase_570",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_570"
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
      ],
      "stackData": [
        "MDF_DamageUpRatio"
      ],
      "latentQueue": [
        "Tutorial_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1389759519\">Monster_W4_Nikadory_Charge_UnselectableFlag</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        },
                        "MDF_EnergyAddRatio": {
                          "operator": "Variables[0] (MDF_EnergyAddRatio) || RETURN",
                          "displayLines": "MDF_EnergyAddRatio",
                          "constants": [],
                          "variables": [
                            "MDF_EnergyAddRatio"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 2
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 4014014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Savage God, Mad King, Incarnation of Strife",
                            "isBaseCompare": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All(with Unselectable)}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": ">=",
                            "value2": 1,
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 401402,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null,
                              "isCompareUniqueID": true
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1385014827\">Monster_W4_Nikadory_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        },
                        "MDF_EnergyAddRatio": {
                          "operator": "Variables[0] (MDF_EnergyAddRatio) || RETURN",
                          "displayLines": "MDF_EnergyAddRatio",
                          "constants": [],
                          "variables": [
                            "MDF_EnergyAddRatio"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 2
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 4014014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Savage God, Mad King, Incarnation of Strife",
                            "isBaseCompare": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All(with Unselectable)}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": ">=",
                            "value2": 1,
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 401402,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null,
                              "isCompareUniqueID": true
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2087329841\">Monster_W4_Nikadory_Charge_UnselectableCheck</a>",
      "execute": [
        {
          "eventTrigger": "Unselectable Adjustment [Owner]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1011587031\">Monster_W4_Nikadory_Ability05Split</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Unselectable Adjustment [Owner]: End",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1389759519\">Monster_W4_Nikadory_Charge_UnselectableFlag</a>",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_308) || RETURN",
                  "displayLines": "UnusedUnderThisBase_308",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_308"
                  ]
                },
                "MDF_EnergyAddRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_309) || RETURN",
                  "displayLines": "UnusedUnderThisBase_309",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_309"
                  ]
                },
                "MDF_MaxLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_310) || RETURN",
                  "displayLines": "UnusedUnderThisBase_310",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_310"
                  ]
                }
              },
              "casterAssign": "CasterSelf"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Tutorial_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-424201711\">Monster_W4_Nikadory_Main3_Delay</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__851529473\">Monster_W4_Nikadory_Main3_SpecialWin</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1360481929\">Monster_W4_Nikadory_Main3_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1471859507\">Monster_W4_Nikadory_Charge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"261985089\">Monster_W4_Nikadory_Energy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1849683412\">Monster_W4_Nikadory_WeaponEffect</a>"
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "advanceType": "Delay",
              "multiAdd": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1822783917\">Standard_Shake_Monster</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Nikadory_SpecialWin_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "priorityTag": "EnemyPhaseChange",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__857944661\">Monster_W4_Nikadory_Main3</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nikador - The Giver: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-424201711\">Monster_W4_Nikadory_Main3_Delay</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.4
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
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
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Nikador - The Giver: Self}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 1
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__203278408\">Monster_W4_Nikadory_Main2_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__841167042\">Monster_W4_Nikadory_Main2</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.4
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1803940540\">Monster_W4_Nikadory_Main</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.6
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.3
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase1"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1781350564\">Monster_W4_Nikadory_Ability11Already</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2115413024\">Monster_W4_Nikadory_Part2EffectWithHearseAbility04</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__55627111\">Monster_W4_Nikadory_Part2EffectWithHearse</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1849683412\">Monster_W4_Nikadory_WeaponEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"55627111\">Monster_W4_Nikadory_Part2EffectWithHearse</a>"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__810487295\">Monster_W4_Nikadory_Part2Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2056345398\">Monster_W4_Nikadory_PartController_RLBoss</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                        "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_565",
                          "MDF_BraveLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageResistance": {
                          "operator": "Variables[0] (UnusedUnderThisBase_566) || RETURN",
                          "displayLines": "UnusedUnderThisBase_566",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_566"
                          ]
                        },
                        "MDF_CrackedEffect": {
                          "operator": "Variables[0] (UnusedUnderThisBase_567) || RETURN",
                          "displayLines": "UnusedUnderThisBase_567",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_567"
                          ]
                        },
                        "MDF_CrackedDamage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_568) || RETURN",
                          "displayLines": "UnusedUnderThisBase_568",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_568"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                        "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_565",
                          "MDF_BraveLayer"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Nikadory_PassiveAbility_RLBoss_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
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
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                            "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_565",
                              "MDF_BraveLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DamageResistance": {
                              "operator": "Variables[0] (UnusedUnderThisBase_566) || RETURN",
                              "displayLines": "UnusedUnderThisBase_566",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_566"
                              ]
                            },
                            "MDF_CrackedEffect": {
                              "operator": "Variables[0] (UnusedUnderThisBase_567) || RETURN",
                              "displayLines": "UnusedUnderThisBase_567",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_567"
                              ]
                            },
                            "MDF_CrackedDamage": {
                              "operator": "Variables[0] (UnusedUnderThisBase_568) || RETURN",
                              "displayLines": "UnusedUnderThisBase_568",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_568"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                            "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_565",
                              "MDF_BraveLayer"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Nikador - The Giver: Self}}"
                          },
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Nikadory_PassiveAbilityWithHearse_Insert",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__342206128\">Monster_W4_Nikadory_PartControllerWithHearse</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 9004111,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      }
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                        "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_565",
                          "MDF_BraveLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageResistance": {
                          "operator": "Variables[0] (UnusedUnderThisBase_566) || RETURN",
                          "displayLines": "UnusedUnderThisBase_566",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_566"
                          ]
                        },
                        "MDF_CrackedEffect": {
                          "operator": "Variables[0] (UnusedUnderThisBase_567) || RETURN",
                          "displayLines": "UnusedUnderThisBase_567",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_567"
                          ]
                        },
                        "MDF_CrackedDamage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_568) || RETURN",
                          "displayLines": "UnusedUnderThisBase_568",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_568"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                        "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_565",
                          "MDF_BraveLayer"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Nikador - The Giver: Self}}"
                      },
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Nikadory_PassiveAbilityWithHearse_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-849627116\">Monster_W4_Nikadory_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                        "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_565",
                          "MDF_BraveLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageResistance": {
                          "operator": "Variables[0] (UnusedUnderThisBase_566) || RETURN",
                          "displayLines": "UnusedUnderThisBase_566",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_566"
                          ]
                        },
                        "MDF_CrackedEffect": {
                          "operator": "Variables[0] (UnusedUnderThisBase_567) || RETURN",
                          "displayLines": "UnusedUnderThisBase_567",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_567"
                          ]
                        },
                        "MDF_CrackedDamage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_568) || RETURN",
                          "displayLines": "UnusedUnderThisBase_568",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_568"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (UnusedUnderThisBase_565) || Variables[1] (MDF_BraveLayer) || ADD || RETURN",
                        "displayLines": "(UnusedUnderThisBase_565 + MDF_BraveLayer)",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_565",
                          "MDF_BraveLayer"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Nikadory_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-12591899\">Enemy_W4_HearsePart_IF_Part2HP</a>",
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
                "operator": "Variables[0] (UnusedUnderThisBase_564) || RETURN",
                "displayLines": "UnusedUnderThisBase_564",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_564"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__65069414\">Enemy_W4_Nikadory_IF_WeakControlPending</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1085270043\">Enemy_W4_HearsePart_IF_Passive</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ShieldBreakBonusFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_BPRecoverValue) || RETURN",
                    "displayLines": "MDF_BPRecoverValue",
                    "constants": [],
                    "variables": [
                      "MDF_BPRecoverValue"
                    ]
                  },
                  "adjustmentType": "+"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ShieldBreakBonusFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_BPRecoverValue) || RETURN",
                    "displayLines": "MDF_BPRecoverValue",
                    "constants": [],
                    "variables": [
                      "MDF_BPRecoverValue"
                    ]
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}} + {{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getSummoner]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_BraveBonusLayer) || RETURN",
                    "displayLines": "MDF_BraveBonusLayer",
                    "constants": [],
                    "variables": [
                      "MDF_BraveBonusLayer"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_KillByHearse",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Nikador: Self}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (MDF_Part02LoseHPRatio) || RETURN",
                        "displayLines": "MDF_Part02LoseHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_Part02LoseHPRatio"
                        ]
                      }
                    },
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue) || RETURN",
                        "displayLines": "MDF_DamageStanceValue",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (MDF_Part01LoseHPRatio) || RETURN",
                        "displayLines": "MDF_Part01LoseHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_Part01LoseHPRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Nikador: Self}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"65069414\">Enemy_W4_Nikadory_IF_WeakControlPending</a>"
                        },
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_DamageStanceValue) || RETURN",
                            "displayLines": "MDF_DamageStanceValue",
                            "constants": [],
                            "variables": [
                              "MDF_DamageStanceValue"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Quantum"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_DamageStanceValue) || RETURN",
                            "displayLines": "MDF_DamageStanceValue",
                            "constants": [],
                            "variables": [
                              "MDF_DamageStanceValue"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Quantum"
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
        "MDF_BPRecoverValue",
        "MDF_Phase01LoseHPRatio",
        "MDF_Phase02LoseHPRatio",
        "MDF_DamageStanceValue"
      ],
      "latentQueue": [
        "_KillByHearse",
        "ShieldBreakBonusFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1839151946\">Enemy_W4_HearsePart_IF_MuteSpeed</a>",
      "modifierFlags": [
        "MuteSpeed"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "W4_HearsePart_00",
              "state": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1558222454\">Enemy_W4_Hearse_IF_Unselectable</a>",
      "modifierFlags": [
        "ImmuneDebuff"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"429388357\">Modifier_Heliobus_Suiyang_Ability_StealBP_Enemy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1278953211\">Modifier_Heliobus_Suiyang_Ability_ActionBonus_Enemy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-210455569\">Modifier_Heliobus_Suiyang_Ability_DeathBonus_Enemy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"87920602\">Modifier_Heliobus_Suiyang_Ability_DamageBurn_Enemy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1274529835\">Modifier_Heliobus_Suiyang_Ability_AttackUp_Enemy</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1597888221\">Enemy_W4_Hearse_IF_BreakState</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1961658270\">Enemy_W4_Hearse_IF_Passive</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "variableName": "MDF_Speed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1169900751\">Monster_W4_Hearse_SetSpeed</a>",
              "valuePerStack": {
                "MDF_Speed": {
                  "operator": "Variables[0] (MDF_Speed) || Constants[0] (0) || MUL || RETURN",
                  "displayLines": "(MDF_Speed * 0)",
                  "constants": [
                    0
                  ],
                  "variables": [
                    "MDF_Speed"
                  ]
                }
              }
            },
            {
              "name": "Create AV Link",
              "from": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "linkOrder": 1,
              "isStart": true,
              "linkFollowerModifications": {
                "OnBreak": "Bit_AutoForceSync"
              },
              "linkOwnerModifications": {
                "OnBreak": "Bit_AutoForceSync"
              }
            },
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action END Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"65069414\">Enemy_W4_Nikadory_IF_WeakControlPending</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nikador: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"65069414\">Enemy_W4_Nikadory_IF_WeakControlPending</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Nikador: Self}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "W4_Hearse_00",
                  "state": false
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Phase2First",
                    "compareType": "=",
                    "value2": 1
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
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "eventTrigger": "Turn [Action-End Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Nikador: Self}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_TurnCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TurnCount",
                          "value": 0
                        },
                        {
                          "name": "Set Action-State",
                          "on": null,
                          "stateName": "W4_Hearse_00"
                        },
                        {
                          "name": "Create AV Link",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "linkOrder": 1,
                          "isStart": true,
                          "linkFollowerModifications": {
                            "OnBreak": "Bit_AutoForceSync"
                          },
                          "linkOwnerModifications": {
                            "OnBreak": "Bit_AutoForceSync"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TurnCount",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Set Action-State",
                      "on": null,
                      "stateName": "W4_Hearse_00"
                    },
                    {
                      "name": "Create AV Link",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "linkOrder": 1,
                      "isStart": true,
                      "linkFollowerModifications": {
                        "OnBreak": "Bit_AutoForceSync"
                      },
                      "linkOwnerModifications": {
                        "OnBreak": "Bit_AutoForceSync"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Phase2First",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Phase2First",
                          "value": 1
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
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>",
                  "variableName": "_KillByHearse",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"637369732\">Monster_W4_HearsePart_Effect</a>"
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ShieldBreakBonusFlag",
                  "value": 0
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
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
                "value1": "Change_In_Current_Value",
                "compareType": "<",
                "value2": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"65069414\">Enemy_W4_Nikadory_IF_WeakControlPending</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nikador: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"65069414\">Enemy_W4_Nikadory_IF_WeakControlPending</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Nikador: Self}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1597888221\">Enemy_W4_Hearse_IF_BreakState</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1597888221\">Enemy_W4_Hearse_IF_BreakState</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1324450026\">Enemy_W4_Hearse_IF_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-311844030\">Enemy_W4_Nikadory_IF_AbilityEX04_TGT</a>[<span class=\"descriptionNumberColor\">Protective Formation</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AllDamageReduce",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio_PerLayer) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AllDamageTypeAddedRatio_PerLayer * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio_PerLayer",
                  "_Layer"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AllDamageTypeAddedRatio",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce_PerLayer) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AllDamageReduce_PerLayer * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce_PerLayer",
                  "_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio_PerLayer</span> and reduces DMG received by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce_PerLayer</span>.",
      "type": "Buff",
      "statusName": "Protective Formation",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__264648512\">Enemy_W4_Nikadory_IF_AbilityEX04_EMY</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1746009287\">TaskList_Monster_W4_Nikadory_IF_AbilityEX04_Refresh</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1746009287\">TaskList_Monster_W4_Nikadory_IF_AbilityEX04_Refresh</a>"
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1746009287\">TaskList_Monster_W4_Nikadory_IF_AbilityEX04_Refresh</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1746009287\">TaskList_Monster_W4_Nikadory_IF_AbilityEX04_Refresh</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}.[[removeUnselectable]]"
              },
              "variableName": "_CharacterNumber",
              "livingTargets": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-311844030\">Enemy_W4_Nikadory_IF_AbilityEX04_TGT</a>[<span class=\"descriptionNumberColor\">Protective Formation</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CharacterNumber",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-311844030\">Enemy_W4_Nikadory_IF_AbilityEX04_TGT</a>[<span class=\"descriptionNumberColor\">Protective Formation</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce_PerLayer": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    },
                    "MDF_AllDamageTypeAddedRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_CharacterNumber) || RETURN",
                    "displayLines": "_CharacterNumber",
                    "constants": [],
                    "variables": [
                      "_CharacterNumber"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageReduce",
        "MDF_AllDamageTypeAddedRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-491014298\">Enemy_W4_Nikadory_IF_HintToastController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "UI Display Event",
              "popUpText": "Consume Skill Points to earn Glory"
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "<=",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "<=",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                        "compareType": "<=",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "The boss's armor is broken, go all out!"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "End Broken State [Owner]",
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
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": null,
                  "compareType": ">=",
                  "value2": 2,
                  "valueType": "Layer"
                }
              },
              "failed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Consume Skill Points to earn Glory"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1037785520\">Enemy_W4_Nikadory_IF_APShow_Act1</a>"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1088118377\">Enemy_W4_Nikadory_IF_APShow_Act2</a>"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1071340758\">Enemy_W4_Nikadory_IF_APShow_Act3</a>"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1121673615\">Enemy_W4_Nikadory_IF_APShow_Act4</a>"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1037785520\">Enemy_W4_Nikadory_IF_APShow_Act1</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1088118377\">Enemy_W4_Nikadory_IF_APShow_Act2</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1071340758\">Enemy_W4_Nikadory_IF_APShow_Act3</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1121673615\">Enemy_W4_Nikadory_IF_APShow_Act4</a>",
                        "invertCondition": true
                      }
                    ]
                  }
                ]
              }
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
                "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
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
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                      "compareType": ">=",
                      "value2": 2,
                      "valueType": "Layer"
                    }
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Attacking enemy targets reduces War Armor"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Consume Skill Points to earn Glory"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1037785520\">Enemy_W4_Nikadory_IF_APShow_Act1</a>"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1088118377\">Enemy_W4_Nikadory_IF_APShow_Act2</a>"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1071340758\">Enemy_W4_Nikadory_IF_APShow_Act3</a>"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1121673615\">Enemy_W4_Nikadory_IF_APShow_Act4</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Destroy summon's War Armor to weaken the boss's abilities"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__837336870\">Enemy_W4_Nikadory_IF_UltraChargeP2</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1849683412\">Monster_W4_Nikadory_WeaponEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
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
                    "value1": "_DoubleChargeStateFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nikador - The Giver: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1597888221\">Enemy_W4_Hearse_IF_BreakState</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Nikador - The Giver: Self}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nikador - The Giver: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1597888221\">Enemy_W4_Hearse_IF_BreakState</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
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
                    "value1": "_DoubleChargeStateFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nikador - The Giver: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1597888221\">Enemy_W4_Hearse_IF_BreakState</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
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
                    "value1": "_DoubleChargeStateFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_FinalCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Nikador - The Giver: Self}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1597888221\">Enemy_W4_Hearse_IF_BreakState</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1417850551\">Enemy_W4_Nikadory_IF_Ability06Charge</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1849683412\">Monster_W4_Nikadory_WeaponEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTypeAddedRatio"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span>. This state is removed when \"War Armor\" stacks are reduced to 0.",
      "type": "Other",
      "effectName": "Ready for Battle",
      "statusName": "Ready for Battle"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2069911522\">Enemy_W4_Nikadory_IF_EnterBattle</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true,
              "toRemove": [
                "STAT_CTRL"
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Nikadory_IF_AbilityP01_Insert01_Part01",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyBattleCry",
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -45
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1178138918\">Enemy_W4_Nikadory_IF_AbilityEX04</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1262027013\">Enemy_W4_Nikadory_IF_AbilityEX03</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1278804632\">Enemy_W4_Nikadory_IF_AbilityEX02</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1228471775\">Enemy_W4_Nikadory_IF_AbilityEX01</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1928829713\">Enemy_W4_Nikadory_IF_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "value": 1,
                      "max": 3
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Nikador: Self}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"837336870\">Enemy_W4_Nikadory_IF_UltraChargeP2</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-907515616\">MoreOneMorePerTurn_4</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 2
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-907515616\">MoreOneMorePerTurn_4</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-907515616\">MoreOneMorePerTurn_4</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1037785520\">Enemy_W4_Nikadory_IF_APShow_Act1</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1088118377\">Enemy_W4_Nikadory_IF_APShow_Act2</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1071340758\">Enemy_W4_Nikadory_IF_APShow_Act3</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1121673615\">Enemy_W4_Nikadory_IF_APShow_Act4</a>"
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"959950668\">TaskList_Monster_W4_Nikadory_IF_Part02APShow_Update</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Nikador - The Giver: Self}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-907515616\">MoreOneMorePerTurn_4</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-907515616\">MoreOneMorePerTurn_4</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "DisableAction"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Current Turn Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          {
                            "name": "Current Turn Owner has Pending"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
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
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__959950668\">TaskList_Monster_W4_Nikadory_IF_Part02APShow_Update</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "variableName": "_SuperShieldPartCount",
              "livingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
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
                "value1": "_SuperShieldPartCount",
                "compareType": "<=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1037785520\">Enemy_W4_Nikadory_IF_APShow_Act1</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_SuperShieldPartCount",
                "compareType": "<=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1088118377\">Enemy_W4_Nikadory_IF_APShow_Act2</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_SuperShieldPartCount",
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1071340758\">Enemy_W4_Nikadory_IF_APShow_Act3</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_SuperShieldPartCount",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1121673615\">Enemy_W4_Nikadory_IF_APShow_Act4</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1423347162\">Enemy_W4_Nikadory_IF_WithHearse</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1873725361\">Monster_W4_Nikadory_InTurn</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1873725361\">Monster_W4_Nikadory_InTurn</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1367674935\">Enemy_W4_Nikadory_IF_Ability14Target</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-850154005\">Enemy_W4_Nikadory_IF_EnduranceLockWeakness</a>",
      "modifierFlags": [
        "Endurance",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-482936145\">Enemy_W4_Nikadory_IF_Endurance</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1121673615\">Enemy_W4_Nikadory_IF_APShow_Act4</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Act4Flag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2098906249\">Standard_MonsterCharge_ActionBarText</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Act4Flag",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2098906249\">Standard_MonsterCharge_ActionBarText</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_KillByHearse",
        "ShieldBreakBonusFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1071340758\">Enemy_W4_Nikadory_IF_APShow_Act3</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Act3Flag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2098906249\">Standard_MonsterCharge_ActionBarText</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Act3Flag",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2098906249\">Standard_MonsterCharge_ActionBarText</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_KillByHearse",
        "ShieldBreakBonusFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1088118377\">Enemy_W4_Nikadory_IF_APShow_Act2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Act2Flag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2098906249\">Standard_MonsterCharge_ActionBarText</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Act2Flag",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2098906249\">Standard_MonsterCharge_ActionBarText</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_KillByHearse",
        "ShieldBreakBonusFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1037785520\">Enemy_W4_Nikadory_IF_APShow_Act1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Act1Flag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2098906249\">Standard_MonsterCharge_ActionBarText</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Act1Flag",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2098906249\">Standard_MonsterCharge_ActionBarText</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_KillByHearse",
        "ShieldBreakBonusFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__551472509\">Enemy_W4_Nikadory_IF_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-482936145\">Enemy_W4_Nikadory_IF_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "<=",
                            "value2": 2
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1085270043\">Enemy_W4_HearsePart_IF_Passive</a>",
                          "variableName": "_KillByHearse",
                          "value": 1
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"637369732\">Monster_W4_HearsePart_Effect</a>"
                        },
                        {
                          "name": "Mark Entity For Immediate Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ShieldBreakBonusFlag",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Nikadory_IF_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
      "stackType": "Replace",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_bpChange",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_bpChange",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (_bpChange) || SUB || RETURN",
                    "displayLines": "(0 - _bpChange)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "_bpChange"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_bpChange) || RETURN",
                    "displayLines": "_bpChange",
                    "constants": [],
                    "variables": [
                      "_bpChange"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_bpChange) || RETURN",
                    "displayLines": "_bpChange",
                    "constants": [],
                    "variables": [
                      "_bpChange"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start "
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_Phase02LoseHPRatio",
        "MDF_Phase01LoseHPRatio",
        "ShieldBreakBonusFlag",
        "_KillByHearse"
      ],
      "description": "Each stack of \"Glory\" increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. Consuming 1 Skill Point adds 1 stack of \"Glory.\" When attacking, reduces stacks of \"War Armor\" or \"Centirefined War Armor\" equal to the current \"Glory\" stacks.",
      "type": "Other",
      "statusName": "Glory",
      "stackLimit": 999,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__281623476\">Enemy_W4_Nikadory_IF_BraveController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                          "displayLines": "{[SkillP03[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP03[0]]}"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Memosprites}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_SummonerBraveLayer",
                      "modifierName": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_SummonerBraveLayer",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                              "displayLines": "{[SkillP03[0]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP03[0]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_SummonerBraveLayer) || RETURN",
                            "displayLines": "_SummonerBraveLayer",
                            "constants": [],
                            "variables": [
                              "_SummonerBraveLayer"
                            ]
                          },
                          "casterAssign": "TargetSelf"
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
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                      "displayLines": "{[SkillP03[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP03[0]]}"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-863627586\">Enemy_W4_Nikadory_IF_BPMax</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Change Skill Point Max",
              "function": "Set",
              "value": 999
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__159012087\">Enemy_W4_Nikadory_IF_Passive</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "MaxLayer",
              "variableName": "_MaxLayer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
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
                    "modifier": "<a class=\"gModGreen\" id=\"159012087\">Enemy_W4_Nikadory_IF_Passive</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                    }
                  ]
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "\"Centirefined War Armor\" has been broken, this unit receives additional minor Imaginary DMG when attacked."
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"159012087\">Enemy_W4_Nikadory_IF_Passive</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                    }
                  ]
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Loses stacks of \"Centirefined War Armor\" based on the attacker's \"Glory\" stacks after being attacked. When at 0 stacks, \"Centirefined War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit, reducing a large amount of their Toughness, greatly delaying their action, restoring Skill Points to targets, and grants the attacker a certain number of stacks of \"Glory.\" After \"Centirefined War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. If \"Centirefined War Armor\" stack is 0 at the end of this unit's turn, it will be restored to maximum stacks."
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Layer) || RETURN",
                    "displayLines": "_Layer",
                    "constants": [],
                    "variables": [
                      "_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "CoolDown"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Layer) || RETURN",
                    "displayLines": "_Layer",
                    "constants": [],
                    "variables": [
                      "_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageReduce"
      ],
      "latentQueue": [
        "AIFlag"
      ],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Loses stacks of \"Centirefined War Armor\" based on the attacker's \"Glory\" stacks after being attacked. When at 0 stacks, \"Centirefined War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit, reducing a large amount of their Toughness, greatly delaying their action, restoring Skill Points to targets, and grants the attacker a certain number of stacks of \"Glory.\" After \"Centirefined War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. If \"Centirefined War Armor\" stack is 0 at the end of this unit's turn, it will be restored to maximum stacks.",
      "type": "Other",
      "statusName": "Centirefined War Armor",
      "stackLimit": 999
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "MaxLayer",
              "variableName": "_MaxLayer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "\"War Armor\" has been broken, this unit receives additional minor Imaginary DMG when attacked."
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Loses stacks of \"War Armor\" based on the attacker's \"Glory\" stacks after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit, reducing their Toughness, delaying their action, and restoring Skill Points to targets. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn."
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Layer) || RETURN",
                    "displayLines": "_Layer",
                    "constants": [],
                    "variables": [
                      "_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "CoolDown"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Layer) || RETURN",
                    "displayLines": "_Layer",
                    "constants": [],
                    "variables": [
                      "_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageReduce"
      ],
      "latentQueue": [],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Loses stacks of \"War Armor\" based on the attacker's \"Glory\" stacks after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit, reducing their Toughness, delaying their action, and restoring Skill Points to targets. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn.",
      "type": "Other",
      "statusName": "War Armor",
      "stackLimit": 999
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "MaxLayer",
              "variableName": "_MaxLayer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "\"War Armor\" has been broken, this unit receives additional minor Imaginary DMG when attacked."
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Loses stacks of \"War Armor\" based on the attacker's \"Glory\" stacks after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit, reducing their Toughness, delaying their action, and restoring Skill Points to targets. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn."
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Layer) || RETURN",
                    "displayLines": "_Layer",
                    "constants": [],
                    "variables": [
                      "_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "CoolDown"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Layer) || RETURN",
                    "displayLines": "_Layer",
                    "constants": [],
                    "variables": [
                      "_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            }
          ]
        }
      ],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. Loses stacks of \"War Armor\" based on the attacker's \"Glory\" stacks after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit, reducing their Toughness, delaying their action, and restoring Skill Points to targets. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn.",
      "type": "Other",
      "statusName": "War Armor",
      "stackLimit": 999
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1562180674\">Enemy_W4_Nikadory_IF_StoneShieldController</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
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
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                    "invertCondition": true
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
                    "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  "passed": [
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
                            "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": ">",
                            "value2": 0,
                            "valueType": "Layer"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            },
                            "valueType": "Layer"
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_AllDamageReduce": {
                                  "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                                  "displayLines": "MDF_AllDamageReduce",
                                  "constants": [],
                                  "variables": [
                                    "MDF_AllDamageReduce"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
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
                            "modifier": "<a class=\"gModGreen\" id=\"159012087\">Enemy_W4_Nikadory_IF_Passive</a>",
                            "invertCondition": true
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": "=",
                            "value2": 0,
                            "valueType": "Layer"
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
                                "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                    "displayLines": "MDF_MaxLayer",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxLayer"
                                    ]
                                  },
                                  "valuePerStack": {
                                    "MDF_AllDamageReduce": {
                                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                                      "displayLines": "MDF_AllDamageReduce",
                                      "constants": [],
                                      "variables": [
                                        "MDF_AllDamageReduce"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": {
                                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                    "displayLines": "MDF_MaxLayer",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxLayer"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1417850551\">Enemy_W4_Nikadory_IF_Ability06Charge</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_AllDamageReduce": {
                          "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                          "displayLines": "MDF_AllDamageReduce",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageReduce"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
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
                        "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_SuperShield_MaxLayer) || RETURN",
                            "displayLines": "MDF_SuperShield_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_SuperShield_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_AllDamageReduce": {
                              "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                              "displayLines": "MDF_AllDamageReduce",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageReduce"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_SuperShield_MaxLayer) || RETURN",
                            "displayLines": "MDF_SuperShield_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_SuperShield_MaxLayer"
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
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_SuperShield_MaxLayer) || RETURN",
                    "displayLines": "MDF_SuperShield_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_SuperShield_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_SuperShield_MaxLayer) || RETURN",
                    "displayLines": "MDF_SuperShield_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_SuperShield_MaxLayer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_OnBeingBreakTriggered",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": "<=",
                            "value2": 0,
                            "valueType": "Layer"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": "<=",
                            "value2": 0,
                            "valueType": "Layer"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                            "compareType": "<=",
                            "value2": 0,
                            "valueType": "Layer"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (MDF_CrackedDamageAfter) || RETURN",
                              "displayLines": "MDF_CrackedDamageAfter",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamageAfter"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "attackType": "Additional DMG"
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (MDF_CrackedDamageAfter) || RETURN",
                              "displayLines": "MDF_CrackedDamageAfter",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamageAfter"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "attackType": "Additional DMG"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_BraveLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_BraveLayer) || RETURN",
                      "displayLines": "_BraveLayer",
                      "constants": [],
                      "variables": [
                        "_BraveLayer"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (MDF_BPRecoverValue) || RETURN",
                        "displayLines": "MDF_BPRecoverValue",
                        "constants": [],
                        "variables": [
                          "MDF_BPRecoverValue"
                        ]
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_ShieldLayer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ShieldBreakBonusFlag",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "True",
                      "state": "CoolDown"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelayRatio"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (_ShieldLayer) || SUB || RETURN",
                        "displayLines": "(0 - _ShieldLayer)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_ShieldLayer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "attackType": "Additional DMG"
                        },
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_DamageStanceValue) || RETURN",
                            "displayLines": "MDF_DamageStanceValue",
                            "constants": [],
                            "variables": [
                              "MDF_DamageStanceValue"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Imaginary"
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "attackType": "Additional DMG"
                        },
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_DamageStanceValue) || RETURN",
                            "displayLines": "MDF_DamageStanceValue",
                            "constants": [],
                            "variables": [
                              "MDF_DamageStanceValue"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Imaginary"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (_BraveLayer) || SUB || RETURN",
                        "displayLines": "(0 - _BraveLayer)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_BraveLayer"
                        ]
                      }
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_BraveLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_BraveLayer) || RETURN",
                      "displayLines": "_BraveLayer",
                      "constants": [],
                      "variables": [
                        "_BraveLayer"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (MDF_BPRecoverValue) || RETURN",
                        "displayLines": "MDF_BPRecoverValue",
                        "constants": [],
                        "variables": [
                          "MDF_BPRecoverValue"
                        ]
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_ShieldLayer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1417850551\">Enemy_W4_Nikadory_IF_Ability06Charge</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "True",
                      "state": "CoolDown"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelayRatio"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (_ShieldLayer) || SUB || RETURN",
                        "displayLines": "(0 - _ShieldLayer)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_ShieldLayer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 3
                      },
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "attackType": "Additional DMG"
                        },
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_DamageStanceValue) || RETURN",
                            "displayLines": "MDF_DamageStanceValue",
                            "constants": [],
                            "variables": [
                              "MDF_DamageStanceValue"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Imaginary"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (_BraveLayer) || SUB || RETURN",
                        "displayLines": "(0 - _BraveLayer)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_BraveLayer"
                        ]
                      }
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_BraveLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_BraveLayer) || RETURN",
                      "displayLines": "_BraveLayer",
                      "constants": [],
                      "variables": [
                        "_BraveLayer"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (MDF_SuperShield_BPRecoverValue) || RETURN",
                        "displayLines": "MDF_SuperShield_BPRecoverValue",
                        "constants": [],
                        "variables": [
                          "MDF_SuperShield_BPRecoverValue"
                        ]
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}} + {{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getSummoner]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_BraveBonusLayer) || RETURN",
                        "displayLines": "MDF_BraveBonusLayer",
                        "constants": [],
                        "variables": [
                          "MDF_BraveBonusLayer"
                        ]
                      },
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_ShieldLayer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ShieldBreakBonusFlag",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "True",
                      "state": "CoolDown"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_SuperShield_ActionDelayRatio"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (_ShieldLayer) || SUB || RETURN",
                        "displayLines": "(0 - _ShieldLayer)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_ShieldLayer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "attackType": "Additional DMG"
                        },
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_SuperShield_DamageStanceValue) || RETURN",
                            "displayLines": "MDF_SuperShield_DamageStanceValue",
                            "constants": [],
                            "variables": [
                              "MDF_SuperShield_DamageStanceValue"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Imaginary"
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            },
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          },
                          "attackType": "Additional DMG"
                        },
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_SuperShield_DamageStanceValue) || RETURN",
                            "displayLines": "MDF_SuperShield_DamageStanceValue",
                            "constants": [],
                            "variables": [
                              "MDF_SuperShield_DamageStanceValue"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Imaginary"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (_BraveLayer) || SUB || RETURN",
                        "displayLines": "(0 - _BraveLayer)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_BraveLayer"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "_OnBeingBreakTriggered",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_BPRecoverValue) || RETURN",
                    "displayLines": "MDF_BPRecoverValue",
                    "constants": [],
                    "variables": [
                      "MDF_BPRecoverValue"
                    ]
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_ShieldLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ShieldBreakBonusFlag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "True",
                  "state": "CoolDown"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Constants[0] (0) || Variables[0] (_ShieldLayer) || SUB || RETURN",
                    "displayLines": "(0 - _ShieldLayer)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "_ShieldLayer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "<",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                          "displayLines": "MDF_CrackedDamage",
                          "constants": [],
                          "variables": [
                            "MDF_CrackedDamage"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "attackType": "Additional DMG"
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                          "displayLines": "MDF_CrackedDamage",
                          "constants": [],
                          "variables": [
                            "MDF_CrackedDamage"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "attackType": "Additional DMG"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "_OnBeingBreakTriggered",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_BPRecoverValue) || RETURN",
                    "displayLines": "MDF_BPRecoverValue",
                    "constants": [],
                    "variables": [
                      "MDF_BPRecoverValue"
                    ]
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_ShieldLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "True",
                  "state": "CoolDown"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Constants[0] (0) || Variables[0] (_ShieldLayer) || SUB || RETURN",
                    "displayLines": "(0 - _ShieldLayer)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "_ShieldLayer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "<",
                    "value2": 3
                  },
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                          "displayLines": "MDF_CrackedDamage",
                          "constants": [],
                          "variables": [
                            "MDF_CrackedDamage"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "attackType": "Additional DMG"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "_OnBeingBreakTriggered",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_SuperShield_BPRecoverValue) || RETURN",
                    "displayLines": "MDF_SuperShield_BPRecoverValue",
                    "constants": [],
                    "variables": [
                      "MDF_SuperShield_BPRecoverValue"
                    ]
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}} + {{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getSummoner]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_BraveBonusLayer) || RETURN",
                        "displayLines": "MDF_BraveBonusLayer",
                        "constants": [],
                        "variables": [
                          "MDF_BraveBonusLayer"
                        ]
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_ShieldLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ShieldBreakBonusFlag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "True",
                  "state": "CoolDown"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_SuperShield_ActionDelayRatio"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Constants[0] (0) || Variables[0] (_ShieldLayer) || SUB || RETURN",
                    "displayLines": "(0 - _ShieldLayer)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "_ShieldLayer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "<",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                          "displayLines": "MDF_CrackedDamage",
                          "constants": [],
                          "variables": [
                            "MDF_CrackedDamage"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "attackType": "Additional DMG"
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                          "displayLines": "MDF_CrackedDamage",
                          "constants": [],
                          "variables": [
                            "MDF_CrackedDamage"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      },
                      "attackType": "Additional DMG"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "_OnBeingBreakTriggered",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1860338310\">Enemy_W4_Nikadory_IF_SuperShieldP2</a>[<span class=\"descriptionNumberColor\">Centirefined War Armor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_SuperShield_MaxLayer) || RETURN",
                    "displayLines": "MDF_SuperShield_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_SuperShield_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_SuperShield_MaxLayer) || RETURN",
                    "displayLines": "MDF_SuperShield_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_SuperShield_MaxLayer"
                    ]
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
                "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
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
                "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1685699403\">Enemy_W4_Nikadory_IF_EnhanceShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-698443266\">Enemy_W4_Nikadory_IF_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxLayer",
        "MDF_ActionDelayRatio",
        "MDF_CrackedDamage",
        "MDF_BPRecoverValue",
        "MDF_AllDamageReduce",
        "MDF_CrackedDamageAfter",
        "MDF_DamageStanceValue",
        "MDF_SuperShield_MaxLayer",
        "MDF_SuperShield_BPRecoverValue",
        "MDF_BraveBonusLayer",
        "MDF_SuperShield_ActionDelayRatio",
        "MDF_SuperShield_DamageStanceValue"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}