const configAbility = {
  "fileName": "4034018_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2042695212\">Enemy_W4_FireProwler_10_Main03_Charge_Ability031</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1366758659\">Enemy_W4_FireProwler_11_Main03_SuperArmor</a>",
      "modifierFlags": [
        "MuteHitH",
        "STAT_SuperArmor"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class",
              "class": "A"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_27"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_27"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": "Thin"
                      },
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": [
                          "LargeMonster",
                          "LargeAvatar",
                          "LargeFakeAvatar"
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 5
                      }
                    ]
                  }
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
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ]
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": ">=",
                        "value2": 5
                      }
                    ]
                  }
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeResistance) || RETURN",
                "displayLines": "MDF_AllDamageTypeResistance",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeResistance"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTypeResistance"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1250426902\">Enemy_W4_FireProwler_11_Main03_Repeat</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Target Parameter",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "paramTarget": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MMonster_W4_FireProwler_01_Repeat_DynamicTarget"
            },
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Speed) || RETURN",
                "displayLines": "MDF_Speed",
                "constants": [],
                "variables": [
                  "MDF_Speed"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1805457294\">Enemy_W4_FireProwler_10_Main03_AbilityEX04</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1889345389\">Enemy_W4_FireProwler_10_Main03_AbilityEX03</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1906123008\">Enemy_W4_FireProwler_10_Main03_AbilityEX02</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1855790151\">Enemy_W4_FireProwler_10_Main03_AbilityEX01</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2076183646\">Enemy_W4_FireProwler_10_Main03_HintToastController</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  }
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
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Defeat clone to reduce the boss's Toughness"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                    "compareType": ">=",
                    "value2": 1,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Defeat clones to weaken the boss's ability"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1744861792\">Enemy_W4_FireProwler_11_Main03_Bonus_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Multiple",
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
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1238955533\">Enemy_W4_FireProwler_11_Main03_Bonus_SpecialMark</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1327135332\">TaskList_Monster_W4_FireProwler_11_Main03_Bonus_SpecialMark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Got a Queued Kill [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-889467975\">TaskList_Monster_W4_FireProwler_11_Main03_Bonus_InsertAction</a>"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1327135332\">TaskList_Monster_W4_FireProwler_11_Main03_Bonus_SpecialMark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1327135332\">TaskList_Monster_W4_FireProwler_11_Main03_Bonus_SpecialMark</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1327135332\">TaskList_Monster_W4_FireProwler_11_Main03_Bonus_SpecialMark</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-889467975\">TaskList_Monster_W4_FireProwler_11_Main03_Bonus_InsertAction</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "FireProwler_IF",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "afterInjection": []
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "FireProwler_IF",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "afterInjection": []
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
      "for": "<a class=\"gModGreen\" id=\"mod__-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] ({[SkillP03[1]]}) || SUB || RETURN",
                "displayLines": "(0 - {[SkillP03[1]]})",
                "constants": [
                  0
                ],
                "variables": [
                  "{[SkillP03[1]]}"
                ]
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "multiBase": {
                "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                "displayLines": "{[SkillP03[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillP03[0]]}"
                ]
              }
            }
          ]
        }
      ],
      "description": "After launching an attack, it is absorbed by \"%CasterName\" to grant 1 stack of \"Calamity Power.\" When an ally character defeats a target, immediately grants 1 extra turn.",
      "type": "Other",
      "statusName": "Complete Vessel"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-781486647\">Enemy_W4_FireProwler_11_Main03_NextWave</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1139595755\">Enemy_W4_FireProwler_10_Main03_ListenPartDieLoseHP</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1299205182\">Enemy_W4_FireProwler_11_Main03_HPBack</a>[<span class=\"descriptionNumberColor\">Shackled</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[2]]}"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "Unknown",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1047244331\">Enemy_W4_FireProwler_10_Main03_ListenPartDieLoseHP_Mark</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[2]]}"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "Unknown",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1047244331\">Enemy_W4_FireProwler_10_Main03_ListenPartDieLoseHP_Mark</a>",
      "stackType": "Multiple",
      "stackData": [],
      "latentQueue": [
        "HPBack_TimePowerCount",
        "HPBack"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2118081652\">Enemy_W4_FireProwler_10_Main03_TimePowerListener</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
              "addStacksPerTrigger": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 0,
              "assignState": "True",
              "barType": "FireProwler",
              "trigger": "Step_01"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SummonCount",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_SummonCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_SummonCount"
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
                    "value1": "MDF_SummonCount",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SummonCount",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                  "multiplier": 1
                },
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
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4034018,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "???",
                        "isBaseCompare": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_01"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_01"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_02"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_03"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_03"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || RETURN",
                            "displayLines": "MDF_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Count"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_Count) || RETURN",
                            "displayLines": "MDF_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Count"
                            ]
                          },
                          "assignState": "True",
                          "barType": "FireProwler",
                          "trigger": "Step_03"
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
                        "value1": "MDF_Count",
                        "compareType": ">=",
                        "value2": 0
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
                            "value1": "MDF_Count",
                            "compareType": "<=",
                            "value2": 4
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_01"
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
                                "value1": "MDF_Count",
                                "compareType": "<",
                                "value2": 8
                              },
                              "passed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_02"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_03"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__114418173\">Enemy_W4_FireProwler_10_Main03_OffTeamFormation</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add to Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2020371850\">Enemy_W4_FireProwler_10_Main03_NormalState</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
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
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                    "displayLines": "MDF_CurrentStance",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentStance"
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
                  "ToughnessDMGType": "Physical"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_CurrentStance"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1844358773\">Enemy_W4_FireProwler_11_Main03_Activated03</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (SummonIndex) || RETURN",
                "displayLines": "SummonIndex",
                "constants": [],
                "variables": [
                  "SummonIndex"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelay1",
                      "isStartingDelay": true
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelay2",
                      "isStartingDelay": true
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "MDF_ActionDelay3",
                      "isStartingDelay": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [
        "SummonIndex",
        "MDF_ActionDelay1_Weight",
        "MDF_ActionDelay1",
        "MDF_ActionDelay2_Weight",
        "MDF_ActionDelay2",
        "MDF_ActionDelay3_Weight",
        "MDF_ActionDelay3"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1827581154\">Enemy_W4_FireProwler_11_Main03_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When \"%CasterName\" uses \"Fading Fate,\" also use \"Fading Fate\" at the same time.",
      "type": "Other",
      "effectName": "Simultaneously use \"Fading Fate\"",
      "statusName": "Mutual Sacrifice"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1810803535\">Enemy_W4_FireProwler_11_Main03_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ],
      "description": "When \"%CasterName\" uses \"Demise's Storm,\" also use \"Demise's Storm\" at the same time.",
      "type": "Other",
      "effectName": "Simultaneously use \"Demise's Storm\"",
      "statusName": "Mutual Sacrifice"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1978943753\">Enemy_W4_FireProwler_10_Main03_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "flagName": "DisableAction"
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
                    "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
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
                          "value": 1
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
                            "value2": 3,
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
                        },
                        {
                          "name": "Remove Events/Bonuses",
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
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2048796603\">Enemy_W4_FireProwler_10_Main03_EffectController</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
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
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4034018,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "???",
                    "isBaseCompare": true,
                    "invertCondition": true
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
      "for": "<a class=\"gModGreen\" id=\"mod__2022798929\">Enemy_W4_FireProwler_10_Main03_ChangePhaseController</a>",
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
                "value1": "ChangePhase",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1639750956\">Enemy_W4_FireProwler_10_Main03_TimePower</a>"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"114418173\">Enemy_W4_FireProwler_10_Main03_OffTeamFormation</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ChangePhase"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_FireProwler_10_Main03_ChangePhase1",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1639750956\">Enemy_W4_FireProwler_10_Main03_TimePower</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1299205182\">Enemy_W4_FireProwler_11_Main03_HPBack</a>[<span class=\"descriptionNumberColor\">Shackled</span>]",
      "modifierFlags": [
        "Deathrattle"
      ],
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
                "modifier": "<a class=\"gModGreen\" id=\"-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]",
                "justAddedOrActive": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "HPBack",
              "value": 1
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
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1639750956\">Enemy_W4_FireProwler_10_Main03_TimePower</a>"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "value1": "HPBack",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        }
                      },
                      "abilityName": "Monster_W4_FireProwler_10_Main03_HPBack",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "variableName": "HPBack",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_FireProwler_01_NoDeathRattle",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_LoseHPRatio"
      ],
      "latentQueue": [],
      "description": "After receiving a killing blow, if \"%CasterName\" is in the \"Shackle Shatter\" state, be instantly resummoned and enter the \"Shackled\" state, but this causes \"%CasterName\" to lose 1 \"Calamity Power\" stack and a certain proportion of HP.",
      "type": "Other",
      "effectName": "Shackled",
      "statusName": "Shackled"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-952344169\">Enemy_W4_FireProwler_10_Main03_Endurance</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__917444423\">Enemy_W4_FireProwler_10_Main03_Limit_EffectBody</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "LMCountDown",
        "InsertFlag_LMin",
        "InsertFlag_LMout",
        "AIFlag",
        "SkillFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1240010895\">Enemy_W4_FireProwler_10_Main03_Limit_EnvirEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "LMCountDown",
        "InsertFlag_LMin",
        "InsertFlag_LMout"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-965589179\">Enemy_W4_FireProwler_10_Main03_Limit_EffectLoop</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "LMRatio",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.95,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.9,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.85,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.8,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.75,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.7,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.65,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.6,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.55,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.5,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.45,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.4,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.35,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.3,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.25,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.2,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.15,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.1,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0.05,
              "maxValue": 1,
              "includeMaxValueInRange": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Toughness Count",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_StanceCount"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CurrentStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_MaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LMMaxValue",
              "value": {
                "operator": "Variables[0] (_CurrentStance) || Variables[1] (_MaxStance) || Variables[2] (_StanceCount) || Constants[0] (1) || SUB || MUL || ADD || RETURN",
                "displayLines": "(_CurrentStance + (_MaxStance * (_StanceCount - 1)))",
                "constants": [
                  1
                ],
                "variables": [
                  "_CurrentStance",
                  "_MaxStance",
                  "_StanceCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LMCurrentValue",
              "value": {
                "operator": "Variables[0] (_CurrentStance) || Variables[1] (_MaxStance) || Variables[2] (_StanceCount) || Constants[0] (1) || SUB || MUL || ADD || RETURN",
                "displayLines": "(_CurrentStance + (_MaxStance * (_StanceCount - 1)))",
                "constants": [
                  1
                ],
                "variables": [
                  "_CurrentStance",
                  "_MaxStance",
                  "_StanceCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "LMRatio",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-965589179\">Enemy_W4_FireProwler_10_Main03_Limit_EffectLoop</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1639750956\">Enemy_W4_FireProwler_10_Main03_TimePower</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2118081652\">Enemy_W4_FireProwler_10_Main03_TimePowerListener</a>",
              "valuePerStack": {
                "MDF_MaxCount": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                }
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
              "modifier": "<a class=\"gModGreen\" id=\"-965589179\">Enemy_W4_FireProwler_10_Main03_Limit_EffectLoop</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"917444423\">Enemy_W4_FireProwler_10_Main03_Limit_EffectBody</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1240010895\">Enemy_W4_FireProwler_10_Main03_Limit_EnvirEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"114418173\">Enemy_W4_FireProwler_10_Main03_OffTeamFormation</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2118081652\">Enemy_W4_FireProwler_10_Main03_TimePowerListener</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                "displayLines": "MDF_SpeedAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1639750956\">Enemy_W4_FireProwler_10_Main03_TimePower</a>"
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"114418173\">Enemy_W4_FireProwler_10_Main03_OffTeamFormation</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Taking Toughness DMG [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable with Toughness Count",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_StanceCount"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CurrentStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LMCurrentValue",
              "value": {
                "operator": "Variables[0] (_CurrentStance) || Variables[1] (_MaxStance) || Variables[2] (_StanceCount) || Constants[0] (1) || SUB || MUL || ADD || RETURN",
                "displayLines": "(_CurrentStance + (_MaxStance * (_StanceCount - 1)))",
                "constants": [
                  1
                ],
                "variables": [
                  "_CurrentStance",
                  "_MaxStance",
                  "_StanceCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "LMRatio",
              "value": {
                "operator": "Variables[0] (LMCurrentValue) || Variables[1] (LMMaxValue) || DIV || RETURN",
                "displayLines": "(LMCurrentValue / LMMaxValue)",
                "constants": [],
                "variables": [
                  "LMCurrentValue",
                  "LMMaxValue"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1047244331\">Enemy_W4_FireProwler_10_Main03_ListenPartDieLoseHP_Mark</a>"
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_LM_DamageStanceValue) || RETURN",
                    "displayLines": "MDF_LM_DamageStanceValue",
                    "constants": [],
                    "variables": [
                      "MDF_LM_DamageStanceValue"
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
                  "ToughnessDMGType": "Physical"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackAddedRatio",
        "MDF_SpeedAddedRatio",
        "MDF_LM_DamageStanceValue"
      ],
      "latentQueue": [
        "LMCountDown",
        "InsertFlag_LMin",
        "InsertFlag_LMout"
      ],
      "description": "Alternates between using \"Silent Sorrow\" and \"Cry Not for the Discarded.\" Defeat \"Long-Shattered Vessel\" to reduce Toughness and \"Calamity Power\" stacks.",
      "type": "Other",
      "effectName": "Shackle Shatter",
      "statusName": "Shackle Shatter"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__235726219\">Enemy_W4_FireProwler_10_Main03_Limit_Controller_Main03</a>",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag_LMin",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-952344169\">Enemy_W4_FireProwler_10_Main03_Endurance</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertFlag_LMin",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "AND",
                    "conditionList": [
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "TargetCurrentToughness",
                        "compareType": "<=",
                        "value2": 2
                      }
                    ]
                  },
                  "abilityName": "Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_Insert_LMin_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
              },
              "passed": [
                "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__121739834\">Enemy_W4_FireProwler_10_Main03_Limit_Controller</a>",
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
              "variableName": "LMCountDown",
              "value": 8
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1238955533\">Enemy_W4_FireProwler_11_Main03_Bonus_SpecialMark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "LMCountDown",
              "context": "TargetEntity",
              "value": -1,
              "max": 100
            }
          ]
        },
        {
          "eventTrigger": "Being Toughness Bar Reset [Owner]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag_LMin",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-952344169\">Enemy_W4_FireProwler_10_Main03_Endurance</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertFlag_LMin",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "AND",
                    "conditionList": [
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "TargetCurrentToughness",
                        "compareType": "<=",
                        "value2": 2
                      }
                    ]
                  },
                  "abilityName": "Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_Insert_LMin_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1238955533\">Enemy_W4_FireProwler_11_Main03_Bonus_SpecialMark</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "LMCountDown",
              "value": 8
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1808374826\">W4_FireProwler_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_3) || RETURN",
                      "displayLines": "SummonID_3",
                      "constants": [],
                      "variables": [
                        "SummonID_3"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_3) || RETURN",
                      "displayLines": "SummonID_3",
                      "constants": [],
                      "variables": [
                        "SummonID_3"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "noTargetFound": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "One Who Is Without Shadow",
                          "desc": "Defeat all Long-Shattered Vessels during the Flame Reaver of the Deepest Dark's casting of \"Silent Sorrow\"",
                          "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1791597207\">W4_FireProwler_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
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
                    "value2": 1
                  },
                  {
                    "name": "Skill Name",
                    "skillName": "Skill06"
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
                    "value1": "Assist_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_1) || RETURN",
                          "displayLines": "SummonID_1",
                          "constants": [],
                          "variables": [
                            "SummonID_1"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      "noTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_Skill06",
                          "value": {
                            "operator": "Variables[0] (MDF_Skill06) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_Skill06 + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_Skill06"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Assist_Flag",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID_2) || RETURN",
                          "displayLines": "SummonID_2",
                          "constants": [],
                          "variables": [
                            "SummonID_2"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      "noTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_Skill06",
                          "value": {
                            "operator": "Variables[0] (MDF_Skill06) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_Skill06 + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_Skill06"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Skill06",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "One Who Lost Their Shadow",
                          "desc": "Allows Flame Reaver of the Deepest Dark to cast \"Underworld's Grief\" consecutively #1 times in Phase 1 without triggering a synergy with Long-Shattered Vessel",
                          "rarity": "Low",
                          "params": [
                            2
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Skill06",
                  "value": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_FireProwler_10_Ability07_Camera"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__429916549\">Enemy_W4_FireProwler_PersistLoseHPPreShow</a>",
      "execute": [
        {
          "eventTrigger": "HP Change [Anyone]",
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
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
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
                    "modifier": "<a class=\"gModGreen\" id=\"-589756154\">Enemy_W4_FireProwler_01_LoseHP</a>"
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
                    "value1": "MDF_TriggerOnce",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TriggerOnce",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "MDF_ChangeValue"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_CloneMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-589756154\">Enemy_W4_FireProwler_01_LoseHP</a>",
                  "variable": "MDF_LoseHPRatio",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_LoseHPRatio"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PersistLoseHP",
                  "value": {
                    "operator": "Variables[0] (MDF_PersistLoseHP) || Variables[1] (MDF_HealedHP) || Variables[2] (MDF_CloneMaxHP) || DIV || Variables[3] (MDF_LoseHPRatio) || MUL || Variables[4] (MDF_MaxHP) || MUL || ADD || RETURN",
                    "displayLines": "(MDF_PersistLoseHP + (((MDF_HealedHP / MDF_CloneMaxHP) * MDF_LoseHPRatio) * MDF_MaxHP))",
                    "constants": [],
                    "variables": [
                      "MDF_PersistLoseHP",
                      "MDF_HealedHP",
                      "MDF_CloneMaxHP",
                      "MDF_LoseHPRatio",
                      "MDF_MaxHP"
                    ]
                  }
                },
                {
                  "name": "Update UI Preview",
                  "show": "Hide",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "previewType": "Persisting HP Loss",
                  "previewValue": {
                    "operator": "Variables[0] (MDF_PersistLoseHP) || INVERT || RETURN",
                    "displayLines": "-MDF_PersistLoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_PersistLoseHP"
                    ]
                  }
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "previewType": "Persisting HP Loss",
                  "previewValue": {
                    "operator": "Variables[0] (MDF_PersistLoseHP) || INVERT || RETURN",
                    "displayLines": "-MDF_PersistLoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_PersistLoseHP"
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
      "for": "<a class=\"gModGreen\" id=\"mod__742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
      "stackType": "Replace",
      "execute": [
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
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
                "value1": null,
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (MDF_Layer) || RETURN",
                  "displayLines": "MDF_Layer",
                  "constants": [],
                  "variables": [
                    "MDF_Layer"
                  ]
                },
                "valueType": "MaxLayer"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "\"DMG Reduction\" dispelled"
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "\"DMG Reduction\" reduced"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Each stack reduces DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. 1 stack is lost after 1 \"Long-Shattered Vessel\" is defeated.",
      "type": "Buff",
      "statusName": "DMG Reduction",
      "addStacksPerTrigger": -1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-834356036\">Enemy_W4_FireProwler_01_HPBack</a>[<span class=\"descriptionNumberColor\">Enfettered</span>]",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "HPBack",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "value1": "HPBack",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "abilityName": "Monster_W4_FireProwler_HPBack",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "HPBack",
                  "value": 1
                }
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_FireProwler_01_NoDeathRattle",
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "After receiving a killing blow, if \"%CasterName\"'s \"Calamity Power\" stacks are not 0, be instantly resummoned and enter the \"Enfettered\" state, but this causes \"%CasterName\" to lose 1 \"Calamity Power\" stack and a certain proportion of HP.",
      "type": "Other",
      "effectName": "Enfettered",
      "statusName": "Enfettered"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
      "stackType": "Multiple",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [
        "MDF_RallyHP"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentHPRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_RallyHP) || Variables[1] (MDF_CurrentHPRatio) || ADD || RETURN",
                "displayLines": "(MDF_RallyHP + MDF_CurrentHPRatio)",
                "constants": [],
                "variables": [
                  "MDF_RallyHP",
                  "MDF_CurrentHPRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentHPRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_RallyHP) || Variables[1] (MDF_CurrentHPRatio) || ADD || RETURN",
                "displayLines": "(MDF_RallyHP + MDF_CurrentHPRatio)",
                "constants": [],
                "variables": [
                  "MDF_RallyHP",
                  "MDF_CurrentHPRatio"
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
                "value1": null,
                "compareType": "=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "After absorbing \"Long-Shattered Vessel,\" restores the HP consumed to summon the current \"Long-Shattered Vessel.\" After \"Long-Shattered Vessel\" is defeated, this unit cannot restore the HP consumed used to summon the current \"Long-Shattered Vessel\" again.",
      "type": "Other",
      "statusName": "Entangled By Agony",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1332813778\">Enemy_W4_FireProwler_RallyHPListener</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                  "variable": "MDF_RallyHP",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_RallyHP",
                  "scope": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalRallyHP",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalRallyHP) || Variables[1] (MDF_RallyHP) || ADD || RETURN",
                    "displayLines": "(MDF_TotalRallyHP + MDF_RallyHP)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalRallyHP",
                      "MDF_RallyHP"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]",
                  "valuePerStack": {
                    "MDF_RallyHP": {
                      "operator": "Variables[0] (MDF_TotalRallyHP) || RETURN",
                      "displayLines": "MDF_TotalRallyHP",
                      "constants": [],
                      "variables": [
                        "MDF_TotalRallyHP"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                  "variable": "MDF_RallyHP",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_RallyHP",
                  "scope": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalRallyHP",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalRallyHP) || Variables[1] (MDF_RallyHP) || SUB || RETURN",
                    "displayLines": "(MDF_TotalRallyHP - MDF_RallyHP)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalRallyHP",
                      "MDF_RallyHP"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]",
                  "valuePerStack": {
                    "MDF_RallyHP": {
                      "operator": "Variables[0] (MDF_TotalRallyHP) || RETURN",
                      "displayLines": "MDF_TotalRallyHP",
                      "constants": [],
                      "variables": [
                        "MDF_TotalRallyHP"
                      ]
                    }
                  },
                  "addStacksPerTrigger": -1
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
      "for": "<a class=\"gModGreen\" id=\"mod__33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
      "stackType": "Replace",
      "stackData": [],
      "latentQueue": [],
      "description": "When using certain abilities, consume all \"Calamity Power\" stacks to increase Hits Per Action.",
      "type": "Other",
      "statusName": "Calamity Power",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__911157260\">Enemy_W4_FireProwler_TimePowerListener</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
              "addStacksPerTrigger": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 0,
              "assignState": "True",
              "barType": "FireProwler",
              "trigger": "Step_01"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SummonCount",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_SummonCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_SummonCount"
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
                    "value1": "MDF_SummonCount",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Stage Type",
                            "stageType": "EvolveBuildActivity"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SummonCount",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                  "multiplier": 1
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
                        "modifier": "<a class=\"gModGreen\" id=\"1787963468\">Enemy_W4_FireProwler_FantasticStory</a>",
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
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4034017,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Flame Reaver of the Deepest Dark",
                        "isBaseCompare": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_01"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_02"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_03"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_03"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
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
                        "value1": "MDF_Count",
                        "compareType": ">",
                        "value2": 0
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
                            "value1": "MDF_Count",
                            "compareType": "<",
                            "value2": 4
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_Count) || RETURN",
                                "displayLines": "MDF_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Count"
                                ]
                              },
                              "assignState": "True",
                              "barType": "FireProwler",
                              "trigger": "Step_01"
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
                                "value1": "MDF_Count",
                                "compareType": "<",
                                "value2": 8
                              },
                              "passed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_02"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "entityClass": "Enemy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_Count) || RETURN",
                                    "displayLines": "MDF_Count",
                                    "constants": [],
                                    "variables": [
                                      "MDF_Count"
                                    ]
                                  },
                                  "assignState": "True",
                                  "barType": "FireProwler",
                                  "trigger": "Step_03"
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
        "MDF_MaxCount"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1863778834\">Enemy_W4_FireProwler_ChargeEff_Weapon</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-578037600\">Enemy_W4_FireProwler_ChargeEff_Halo</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1",
              "revertDefault": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1070811154\">Enemy_W4_FireProwler_RallyHP</a>[<span class=\"descriptionNumberColor\">Entangled By Agony</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
                  "removeAllInstances": true
                }
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_FireProwler_ChargeBreak",
              "priorityTag": "MonsterForceKill",
              "ownerState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
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
                "value1": "MDF_Layer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_Layer) || INVERT || RETURN",
                    "displayLines": "-MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
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
                  "maximum": 0,
                  "assignState": "True",
                  "barType": "FireProwler",
                  "trigger": "Step_01"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Use \"Cry Not For The Discarded\" during the next action.",
      "type": "Other",
      "effectName": "Silent Sorrow",
      "statusName": "Silent Sorrow"
    }
  ],
  "references": []
}