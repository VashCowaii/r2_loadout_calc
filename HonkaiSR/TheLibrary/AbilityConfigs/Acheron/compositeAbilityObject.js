const compositeAbilityObject = {
  "fullCharacterName": "Acheron",
  "trimCharacterName": "Acheron",
  "abilityList": [
    "Acheron_Acheron_TechniqueInLevel",
    "Acheron_Acheron_PassiveAbility_1",
    "Acheron_Acheron_Ability34_Part02",
    "Acheron_Acheron_Ability34_Part01",
    "Acheron_Acheron_Ability33_Part02",
    "Acheron_Acheron_Ability33_Part01",
    "Acheron_Acheron_Ability32_Part02",
    "Acheron_Acheron_Ability32_Part01",
    "Acheron_Acheron_Ability31_Part02",
    "Acheron_Acheron_Ability31_Part01",
    "Acheron_Acheron_Ability03_Part02",
    "Acheron_Acheron_Ability03_Part01",
    "Acheron_Acheron_Ability03_EnterReady",
    "Acheron_Acheron_Ability02_Part02",
    "Acheron_Acheron_Ability02_Part01",
    "Acheron_Acheron_Ability01_Part02",
    "Acheron_Acheron_Ability01_Part01",
    "Acheron_Modifiers",
    "Acheron_Functions"
  ],
  "abilityObject": {
    "Acheron_Acheron_TechniqueInLevel": {
      "fileName": "Acheron_Acheron_TechniqueInLevel",
      "childAbilityList": [
        "Acheron_Acheron_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1353413392\">Technique_Acheron_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-115192964\">Acheron_TechniqueWeakType_BUFF</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
                    "displayLines": "ACHERON_OBJECT_UNUSED_1",
                    "constants": [],
                    "variables": [
                      "ACHERON_OBJECT_UNUSED_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1353413392\">Technique_Acheron_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-115192964\">Acheron_TechniqueWeakType_BUFF</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Red Oni",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1886427249\">Acheron_UltraAbilitySpareCount</a>[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
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
                      "modifier": "<a class=\"gModGreen\" id=\"62451815\">Acheron_UltraAbilitySpareCount_PointB1</a>[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                "Trigger: Attack End",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-115192964\">Acheron_TechniqueWeakType_BUFF</a>"
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Acheron_Acheron_PassiveAbility_1": {
      "fileName": "Acheron_Acheron_PassiveAbility_1",
      "childAbilityList": [
        "Acheron_Acheron_PassiveAbility_1"
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
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1476751803\">Acheron_PassiveUltra</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (9) || RETURN",
            "displayLines": "9",
            "constants": [],
            "variables": [
              9
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-317541958\">Acheron_BlockModifySp</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1580542257\">Acheron_Eidolon1_Listen</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2053212342\">Acheron_Eidolon4_Listen</a>"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-84702346\">Acheron_Eidolon6_AddRegardAsAbilityType</a>",
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
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-67963083\">Acheron_Eidolon4_Listen_OnCharacterCreate</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1111481031\">Acheron_Eidolon4_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Vulnerability</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.08) || RETURN",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2053212342\">Acheron_Eidolon4_Listen</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1111481031\">Acheron_Eidolon4_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Vulnerability</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.08) || RETURN",
                      "displayLines": "0.08",
                      "constants": [],
                      "variables": [
                        0.08
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
                  "modifier": "<a class=\"gModGreen\" id=\"-67963083\">Acheron_Eidolon4_Listen_OnCharacterCreate</a>"
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CurrentSP",
            "MaxSP"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1580542257\">Acheron_Eidolon1_Listen</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target TAKING DMG}}"
                  },
                  "variableName": "Rank01_DebuffNumber"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Rank01_DebuffNumber",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "0.18"
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
            "CurrentSP",
            "MaxSP"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1476751803\">Acheron_PassiveUltra</a>",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-318443993\">Acheron_DebuffSpecialMark01_Empty</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                        "target": "{{Caster}}"
                      },
                      "value": 1,
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1830638488\">Acheron_LimboTransfer</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillUseFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillUseDubuff",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseDubuff",
                      "value": 0
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillUseFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillUseDubuff",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseDubuff",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Character Path Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "The Abyss"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Matching Path",
                      "target": null,
                      "matchToPathFrom": [
                        "Nihility"
                      ],
                      "variableName": "Acheron_BaseTypeCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Acheron_PointB2_Count",
                      "value": {
                        "operator": "Variables[0] (Acheron_BaseTypeCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(Acheron_BaseTypeCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Acheron_BaseTypeCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Acheron_PointB2_Count",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 2
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Acheron_PointB2_Count",
                              "value": {
                                "operator": "Variables[0] (Acheron_PointB2_Count) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(Acheron_PointB2_Count + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Acheron_PointB2_Count"
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
                        "value1": "Acheron_PointB2_Count",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Acheron_PointB2_DamageRatio",
                          "value": {
                            "operator": "Variables[0] (1.6) || RETURN",
                            "displayLines": "1.6",
                            "constants": [],
                            "variables": [
                              1.6
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Acheron_PointB2_Count",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Acheron_PointB2_DamageRatio",
                              "value": {
                                "operator": "Variables[0] (1.15) || RETURN",
                                "displayLines": "1.15",
                                "constants": [],
                                "variables": [
                                  1.15
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Acheron_PointB2_DamageRatio",
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-533288835\">Acheron_OnListenDeBonusAdd</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-318443993\">Acheron_DebuffSpecialMark01_Empty</a>"
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Type Was",
                        "statusType": "Debuff"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>",
                        "invertCondition": true,
                        "justAddedOrActive": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "OnEnterBattleFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Passive_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (9) || RETURN",
                          "displayLines": "9",
                          "constants": [],
                          "variables": [
                            9
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": 1,
                          "isFixed": "(Fixed)",
                          "ignoreBlock": true,
                          "isSpecialEnergy": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>"
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1427559472\">Acheron_SetEnergyBarState</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Red Oni"
                          },
                          "passed": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": 1,
                              "isFixed": "(Fixed)",
                              "ignoreBlock": true,
                              "isSpecialEnergy": true
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>"
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
                        "name": "Modifier Type Was",
                        "statusType": "Debuff"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>",
                        "invertCondition": true,
                        "justAddedOrActive": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Passive_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (9) || RETURN",
                          "displayLines": "9",
                          "constants": [],
                          "variables": [
                            9
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillUseFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseDubuff",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1830638488\">Acheron_LimboTransfer</a>"
                }
              ]
            },
            {
              "eventTrigger": "Check Callback Flag Parameter",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBackBefore_OnListenCharacterCreate"
                  },
                  "passed": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"-533288835\">Acheron_OnListenDeBonusAdd</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-318443993\">Acheron_DebuffSpecialMark01_Empty</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "OnCharacterCreateFlag",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SkillUseFlag",
                              "value": 0
                            },
                            {
                              "name": "Compare: Variable",
                              "value1": "MDF_SkillUseDubuff",
                              "compareType": "=",
                              "value2": 0
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
                    "name": "Has Param Flag",
                    "flagName": "CallBackBefore_MazeSkillEnterBattle"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-533288835\">Acheron_OnListenDeBonusAdd</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-318443993\">Acheron_DebuffSpecialMark01_Empty</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OnEnterBattleFlag",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBackAfter_MazeSkillEnterBattle"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OnEnterBattleFlag",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBackBefore_OnListenInsertAbilityStart"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Level Entity}}"
                            }
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of Team",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "team": "Neutral Team"
                              },
                              {
                                "name": "Is Entity a Battle Event/Summon",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "OnCharacterCreateFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBackBefore_OnListenBeforeSkillUse"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseFlag",
                      "value": 1
                    },
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
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1830638488\">Acheron_LimboTransfer</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": 0,
                          "isFixed": "* ERR",
                          "isSetToValue": true,
                          "ignoreBlock": true,
                          "isSpecialEnergy": true
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-98170223\">Acheron_Passive01Modifier</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                          "immediateEffect": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBack_SettleSkillOrInsertAbility"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OnCharacterCreateFlag",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_SkillUseFlag",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_SkillUseDubuff",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Acheron_FlowerCountBySp",
                            "compareType": ">=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Acheron Debuff Gained Target}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1879158642\">Acheron_AddFlower_Passiv01</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillUseDubuff",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "Acheron_FlowerCountBySp",
                            "compareType": ">=",
                            "value2": 1
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Acheron: Crimson Knot Transfer Target[v1]}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1879158642\">Acheron_AddFlower_Passiv01</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1830638488\">Acheron_LimboTransfer</a>"
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"492194909\">Acheron_CheckCurrentSpecialSPChange</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Red Oni"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "SpecialEnergy%",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Changes to Stats",
                              "variableName": "Acheron_PointB1_ClampedAdd",
                              "type": "ClampedAdd"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Acheron_PointB1_ClampedAdd",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"62451815\">Acheron_UltraAbilitySpareCount_PointB1</a>[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (3) || RETURN",
                                    "displayLines": "3",
                                    "constants": [],
                                    "variables": [
                                      3
                                    ]
                                  },
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] (3) || RETURN",
                                      "displayLines": "3",
                                      "constants": [],
                                      "variables": [
                                        3
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": {
                                    "operator": "Variables[0] (Acheron_PointB1_ClampedAdd) || RETURN",
                                    "displayLines": "Acheron_PointB1_ClampedAdd",
                                    "constants": [],
                                    "variables": [
                                      "Acheron_PointB1_ClampedAdd"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Acheron_PointB1_ClampedAdd",
                              "value": 0
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
              "functionName": "<a class=\"gTempYellow\" id=\"fun__492194909\">Acheron_CheckCurrentSpecialSPChange</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "Acheron_ChangeValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Acheron_ChangeValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Acheron_FlowerCountBySp",
                      "value": {
                        "operator": "Variables[0] (Acheron_FlowerCountBySp) || Variables[1] (Acheron_ChangeValue) || ADD || RETURN",
                        "displayLines": "(Acheron_FlowerCountBySp + Acheron_ChangeValue)",
                        "constants": [],
                        "variables": [
                          "Acheron_FlowerCountBySp",
                          "Acheron_ChangeValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Acheron_FlowerCountBySp",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (9) || RETURN",
                          "displayLines": "9",
                          "constants": [],
                          "variables": [
                            9
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Acheron_FlowerCountBySp",
                          "value": {
                            "operator": "Variables[0] (9) || RETURN",
                            "displayLines": "9",
                            "constants": [],
                            "variables": [
                              9
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Acheron_ChangeValue",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Acheron_ChangeValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_Passive_Count",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (9) || RETURN",
                                  "displayLines": "9",
                                  "constants": [],
                                  "variables": [
                                    9
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_SkillUseFlag",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Passive_Count",
                              "value": {
                                "operator": "Variables[0] (MDF_Passive_Count) || Variables[1] (Acheron_ChangeValue) || ADD || RETURN",
                                "displayLines": "(MDF_Passive_Count + Acheron_ChangeValue)",
                                "constants": [],
                                "variables": [
                                  "MDF_Passive_Count",
                                  "Acheron_ChangeValue"
                                ]
                              }
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1427559472\">Acheron_SetEnergyBarState</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Passive_Count",
                              "value": {
                                "operator": "Variables[0] (MDF_Passive_Count) || Variables[1] (Acheron_ChangeValue) || ADD || RETURN",
                                "displayLines": "(MDF_Passive_Count + Acheron_ChangeValue)",
                                "constants": [],
                                "variables": [
                                  "MDF_Passive_Count",
                                  "Acheron_ChangeValue"
                                ]
                              }
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-1427559472\">Acheron_SetEnergyBarState</a>"
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Acheron: Crimson Knot Transfer Target[v1]}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "<a class=\"gTempYellow\" id=\"-1879158642\">Acheron_AddFlower_Passiv01</a>"
                                }
                              ]
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
                        "name": "Compare: Variable",
                        "value1": "MDF_Passive_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (9) || RETURN",
                          "displayLines": "9",
                          "constants": [],
                          "variables": [
                            9
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                            "displayLines": "MDF_Passive_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Passive_Count"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (9) || RETURN",
                            "displayLines": "9",
                            "constants": [],
                            "variables": [
                              9
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 4
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                            "displayLines": "MDF_Passive_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Passive_Count"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (9) || RETURN",
                            "displayLines": "9",
                            "constants": [],
                            "variables": [
                              9
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 4
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Acheron_ChangeValue",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CurrentSP",
            "MaxSP"
          ]
        }
      ]
    },
    "Acheron_Acheron_Ability34_Part02": {
      "fileName": "Acheron_Acheron_Ability34_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"371708678\">Acheron_DebuffSpecialMark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Search",
            "entityType": 6,
            "teamType": "Enemy Team"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.2) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(1.2 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    1.2,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.2) || RETURN",
                  "displayLines": "1.2",
                  "constants": [],
                  "variables": [
                    1.2
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.2) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(1.2 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    1.2,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.9,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.2) || RETURN",
                  "displayLines": "1.2",
                  "constants": [],
                  "variables": [
                    1.2
                  ]
                },
                "HitSplit": 0.9,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Thunder Core"
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              },
              "Event": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "paramSequence": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "The Abyss"
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] (0.25) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                              "displayLines": "(0.25 * Acheron_PointB2_DamageRatio)",
                              "constants": [],
                              "variables": [
                                0.25,
                                "Acheron_PointB2_DamageRatio"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Ultimate"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Ultimate"
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
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "UltraFlagCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TargetEntity_CurrentFlagCount",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"447524573\">Acheron_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TargetEntity_UltraFlagCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TargetEntity_LoopFlagCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Limbo_Count",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-317287633\">Acheron_AbilityChange04</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Acheron_Acheron_Ability34_Part01": {
      "fileName": "Acheron_Acheron_Ability34_Part01",
      "childAbilityList": [
        "Acheron_Acheron_Ability34_Camera",
        "Acheron_Acheron_Ability34_Part01",
        "Acheron_Acheron_Ability34_Part02"
      ],
      "skillTrigger": "Skill34",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        5,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Acheron_Ability34_Part02",
          "isTrigger": true
        },
        {
          "name": "Update Character Panel Visibility"
        },
        {
          "name": "Set Render/Load State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "showOrLoad": false
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Acheron_Acheron_Ability33_Part02": {
      "fileName": "Acheron_Acheron_Ability33_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-367620490\">Acheron_AbilityChange03</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-317287633\">Acheron_AbilityChange04</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Thunder Core"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"77299136\">Acheron_HitFlower</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.24 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
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
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1252175641\">Acheron_TiggerFlower</a>"
            }
          ]
        },
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": []
    },
    "Acheron_Acheron_Ability33_Part01": {
      "fileName": "Acheron_Acheron_Ability33_Part01",
      "childAbilityList": [
        "Acheron_Acheron_Ability33_Camera",
        "Acheron_Acheron_Ability33_Part01",
        "Acheron_Acheron_Ability33_Part02"
      ],
      "skillTrigger": "Skill33",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        5,
        5,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Acheron_Ability33_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Acheron_Acheron_Ability32_Part02": {
      "fileName": "Acheron_Acheron_Ability32_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-350842871\">Acheron_AbilityChange02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-367620490\">Acheron_AbilityChange03</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Thunder Core"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"77299136\">Acheron_HitFlower</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.24 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.24 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.24 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate"
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
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1252175641\">Acheron_TiggerFlower</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Auto-Battle",
            "invertCondition": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Auto-Battle",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Sort with Actions",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "max": 1,
                  "sortOperator": {
                    "name": "Sort by Modifier Variable",
                    "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                    "value": "MDF_Count"
                  },
                  "includeDying": true,
                  "execute": [
                    {
                      "name": "Force Team Target-Lock on Target",
                      "team": "Player Team",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": []
    },
    "Acheron_Acheron_Ability32_Part01": {
      "fileName": "Acheron_Acheron_Ability32_Part01",
      "childAbilityList": [
        "Acheron_Acheron_Ability32_Camera",
        "Acheron_Acheron_Ability32_Part01",
        "Acheron_Acheron_Ability32_Part02"
      ],
      "skillTrigger": "Skill32",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        5,
        5,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Acheron_Ability32_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Acheron_Acheron_Ability31_Part02": {
      "fileName": "Acheron_Acheron_Ability31_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-401175728\">Acheron_AbilityChange01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-350842871\">Acheron_AbilityChange02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Thunder Core"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"77299136\">Acheron_HitFlower</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.24 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.24 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
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
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1252175641\">Acheron_TiggerFlower</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Auto-Battle",
            "invertCondition": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Auto-Battle",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Sort with Actions",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "max": 1,
                  "sortOperator": {
                    "name": "Sort by Modifier Variable",
                    "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                    "value": "MDF_Count"
                  },
                  "includeDying": true,
                  "execute": [
                    {
                      "name": "Force Team Target-Lock on Target",
                      "team": "Player Team",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": []
    },
    "Acheron_Acheron_Ability31_Part01": {
      "fileName": "Acheron_Acheron_Ability31_Part01",
      "childAbilityList": [
        "Acheron_Acheron_Ability31_Camera",
        "Acheron_Acheron_Ability31_Part01",
        "Acheron_Acheron_Ability31_Part02"
      ],
      "skillTrigger": "Skill31",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        5,
        5,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Acheron_Ability31_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Acheron_Acheron_Ability03_Part02": {
      "fileName": "Acheron_Acheron_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-98170223\">Acheron_Passive01Modifier</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-401175728\">Acheron_AbilityChange01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-350842871\">Acheron_AbilityChange02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"447524573\">Acheron_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-401175728\">Acheron_AbilityChange01</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Auto-Battle",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Sort with Actions",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "max": 1,
                  "sortOperator": {
                    "name": "Sort by Modifier Variable",
                    "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                    "value": "MDF_Count"
                  },
                  "includeDying": true,
                  "execute": [
                    {
                      "name": "Force Team Target-Lock on Target",
                      "team": "Player Team",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Acheron_Acheron_Ability03_Part01": {
      "fileName": "Acheron_Acheron_Ability03_Part01",
      "childAbilityList": [
        "Acheron_Acheron_Ability03_Camera",
        "Acheron_Acheron_Ability03_EnterReady",
        "Acheron_Acheron_Ability03_Part01",
        "Acheron_Acheron_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Update Character Panel Visibility",
          "show": "CasterOnly",
          "forceDisplayUltButton": true
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Acheron_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "enable": false
        }
      ],
      "references": []
    },
    "Acheron_Acheron_Ability03_EnterReady": {
      "fileName": "Acheron_Acheron_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Set Render/Load State",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "showOrLoad": false
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Acheron_Acheron_Ability02_Part02": {
      "fileName": "Acheron_Acheron_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"946113051\">Acheron_Eidolon6_ForceStanceDamage</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Charm",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Passive_Count",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (9) || RETURN",
                  "displayLines": "9",
                  "constants": [],
                  "variables": [
                    9
                  ]
                }
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_CurrentCountFlag01",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MDF_CurrentCountFlag01",
                          "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill02_FlowerTotalCount",
                          "value": {
                            "operator": "Variables[0] (Skill02_FlowerTotalCount) || Variables[1] (MDF_CurrentCountFlag01) || ADD || RETURN",
                            "displayLines": "(Skill02_FlowerTotalCount + MDF_CurrentCountFlag01)",
                            "constants": [],
                            "variables": [
                              "Skill02_FlowerTotalCount",
                              "MDF_CurrentCountFlag01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_FlowerTotalCount",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (9) || RETURN",
                          "displayLines": "9",
                          "constants": [],
                          "variables": [
                            9
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-64481768\">Acheron_AddFlower_Ability</a>"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill02_FlowerTotalCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentCountFlag01",
                      "value": 0
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
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(1.6 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    1.6,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.6) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.6 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.6,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || RETURN",
                  "displayLines": "1.6",
                  "constants": [],
                  "variables": [
                    1.6
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(1.6 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    1.6,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.6) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.6 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.6,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || RETURN",
                  "displayLines": "1.6",
                  "constants": [],
                  "variables": [
                    1.6
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(1.6 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    1.6,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.6) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.6 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.6,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || RETURN",
                  "displayLines": "1.6",
                  "constants": [],
                  "variables": [
                    1.6
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(1.6 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    1.6,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.7,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.6) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(0.6 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    0.6,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "HitSplit": 0.7,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || RETURN",
                  "displayLines": "1.6",
                  "constants": [],
                  "variables": [
                    1.6
                  ]
                },
                "HitSplit": 0.7,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "HitSplit": 0.7,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"946113051\">Acheron_Eidolon6_ForceStanceDamage</a>"
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Acheron_Acheron_Ability02_Part01": {
      "fileName": "Acheron_Acheron_Ability02_Part01",
      "childAbilityList": [
        "Acheron_Acheron_Ability02_Camera",
        "Acheron_Acheron_Ability02_Part01",
        "Acheron_Acheron_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Acheron_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Acheron_Acheron_Ability01_Part02": {
      "fileName": "Acheron_Acheron_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"946113051\">Acheron_Eidolon6_ForceStanceDamage</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Abyss"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || Variables[1] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                  "displayLines": "(1 * Acheron_PointB2_DamageRatio)",
                  "constants": [],
                  "variables": [
                    1,
                    "Acheron_PointB2_DamageRatio"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"946113051\">Acheron_Eidolon6_ForceStanceDamage</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Acheron_Acheron_Ability01_Part01": {
      "fileName": "Acheron_Acheron_Ability01_Part01",
      "childAbilityList": [
        "Acheron_Acheron_Ability01_Camera",
        "Acheron_Acheron_Ability01_Part01",
        "Acheron_Acheron_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Acheron_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Acheron_Modifiers": {
      "fileName": "Acheron_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__62451815\">Acheron_UltraAbilitySpareCount_PointB1</a>[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_UltraSkillSpareCount) || RETURN",
                    "displayLines": "MDF_UltraSkillSpareCount",
                    "constants": [],
                    "variables": [
                      "MDF_UltraSkillSpareCount"
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
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
                  "variableName": "MDF_UltraSkillSpareCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"62451815\">Acheron_UltraAbilitySpareCount_PointB1</a>[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Check Callback Flag Parameter",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBack_SettleSkillOrInsertAbility"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "SpecialEnergy%",
                            "compareType": "<",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        "Modifier Deletes Itself"
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
          "latentQueue": [
            "MaxSP",
            "CurrentSP",
            "MDF_SkillUseFlag",
            "MDF_SkillUseDubuff",
            "OnEnterBattleFlag",
            "OnCharacterCreateFlag"
          ],
          "description": "After using the Ultimate, gains Slashed Dream by an amount equal to the number of Quadrivalent Ascendance stacks. At the same time, applies a corresponding number of Crimson Knot stacks to a random enemy. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> time(s).",
          "type": "Other",
          "statusName": "Quadrivalent Ascendance"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1886427249\">Acheron_UltraAbilitySpareCount</a>[<span class=\"descriptionNumberColor\">Quadrivalent Ascendance</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Check Callback Flag Parameter",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBack_SettleSkillOrInsertAbility"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "SpecialEnergy%",
                            "compareType": "<",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        "Modifier Deletes Itself"
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
          "description": "Acheron obtains <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> point(s) of Slashed Dream after she uses her Ultimate, and applies <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> stack(s) of Crimson Knot on a random enemy.",
          "type": "Other",
          "statusName": "Quadrivalent Ascendance"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1845649491\">Acheron_Ability03_StancePreview</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "toughnessForcedReductionPreview": {
              "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
              "displayLines": "ACHERON_OBJECT_UNUSED_1",
              "constants": [],
              "variables": [
                "ACHERON_OBJECT_UNUSED_1"
              ]
            },
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1291342250\">Acheron_Ability02_StancePreview</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Skill",
            "toughnessForcedReductionPreview": {
              "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
              "displayLines": "ACHERON_OBJECT_UNUSED_1",
              "constants": [],
              "variables": [
                "ACHERON_OBJECT_UNUSED_1"
              ]
            },
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__600417107\">Acheron_Ability01_StancePreview</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "toughnessForcedReductionPreview": {
              "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
              "displayLines": "ACHERON_OBJECT_UNUSED_1",
              "constants": [],
              "variables": [
                "ACHERON_OBJECT_UNUSED_1"
              ]
            },
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__946113051\">Acheron_Eidolon6_ForceStanceDamage</a>",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
                    "displayLines": "ACHERON_OBJECT_UNUSED_1",
                    "constants": [],
                    "variables": [
                      "ACHERON_OBJECT_UNUSED_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-84702346\">Acheron_Eidolon6_AddRegardAsAbilityType</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Basic ATK",
                  "extendTypeTo": "Ultimate"
                },
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Skill",
                  "extendTypeTo": "Ultimate"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"600417107\">Acheron_Ability01_StancePreview</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1291342250\">Acheron_Ability02_StancePreview</a>"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "CurrentSP",
            "MaxSP"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1111481031\">Acheron_Eidolon4_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Vulnerability</span>]",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
          "latentQueue": [
            "MaxSP",
            "CurrentSP"
          ],
          "description": "Increases Ultimate DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Ultimate DMG Vulnerability",
          "statusName": "Ultimate DMG Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__447524573\">Acheron_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Reduces All-Type RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, lasting till the end of the Ultimate.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "All-Type RES Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-318443993\">Acheron_DebuffSpecialMark01_Empty</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_SpecialMarkFlowerCount",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                      "multiplier": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                    "invertCondition": true
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Current Action Owner}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "trigger": "States_Normal"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "trigger": "States_Normal"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Current Action Owner}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Target",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Player's Aim Primary-Target}}"
                                }
                              },
                              "passed": [
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "trigger": "States_Ultra"
                                },
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "trigger": "Sele_Select"
                                },
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "trigger": "Fade_Cut"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "trigger": "Sele_UnSelect"
                                },
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "trigger": "States_Ultra"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Check Callback Flag Parameter",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBack_SettleSkillOrInsertAbility"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_SpecialMarkFlowerCount",
                          "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                          "multiplier": 1
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
            "MaxSP",
            "CurrentSP",
            "MDF_SkillUseFlag",
            "MDF_SkillUseDubuff",
            "OnEnterBattleFlag",
            "OnCharacterCreateFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Limbo_Count",
                          "value": {
                            "operator": "Variables[0] (Limbo_Count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Limbo_Count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Limbo_Count"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                    }
                  ]
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
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
              "execute": [
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "Event": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Limbo_Count",
                              "value": {
                                "operator": "Variables[0] (Limbo_Count) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(Limbo_Count + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Limbo_Count"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When removed, immediately deals Lightning DMG equal to <span class=\"descriptionNumberColor\">MDF_PropertyValue01</span> of Acheron's ATK to all enemies once. For every stack of Crimson Knot removed, this DMG multiplier additionally increases, up to a maximum of <span class=\"descriptionNumberColor\">MDF_PropertyValue02</span>.",
          "type": "Other",
          "effectName": "Crimson Knot",
          "statusName": "Crimson Knot"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-317287633\">Acheron_AbilityChange04</a>",
          "stackType": "Replace",
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
                  "abilityName": "Skill03",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
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
                  "abilityName": "Skill34",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-367620490\">Acheron_AbilityChange03</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill33",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Ultimate"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-350842871\">Acheron_AbilityChange02</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill32",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Ultimate"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-401175728\">Acheron_AbilityChange01</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill31",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Ultimate"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2096189522\">Acheron_Ability03_Special</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1845649491\">Acheron_Ability03_StancePreview</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ACHERON_OBJECT_UNUSED_1) || RETURN",
                    "displayLines": "ACHERON_OBJECT_UNUSED_1",
                    "constants": [],
                    "variables": [
                      "ACHERON_OBJECT_UNUSED_1"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1845649491\">Acheron_Ability03_StancePreview</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MaxSP",
            "CurrentSP",
            "MDF_SkillUseFlag",
            "MDF_SkillUseDubuff",
            "OnEnterBattleFlag",
            "OnCharacterCreateFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-535608708\">Acheron_PointB3_DamageUp</a>[<span class=\"descriptionNumberColor\">Thunder Core</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Thunder Core"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-98170223\">Acheron_Passive01Modifier</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Passive_Count",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                    "displayLines": "MDF_Passive_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Passive_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (9) || RETURN",
                    "displayLines": "9",
                    "constants": [],
                    "variables": [
                      9
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4
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
                  "variableName": "MDF_PassiveLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-98170223\">Acheron_Passive01Modifier</a>",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_PassiveLayer) || RETURN",
                    "displayLines": "MDF_PassiveLayer",
                    "constants": [],
                    "variables": [
                      "MDF_PassiveLayer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (9) || RETURN",
                    "displayLines": "9",
                    "constants": [],
                    "variables": [
                      9
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 4
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-533288835\">Acheron_OnListenDeBonusAdd</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
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
                        "name": "Modifier Type Was",
                        "statusType": "Debuff"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillUseFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>",
                        "invertCondition": true,
                        "justAddedOrActive": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Passive_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (9) || RETURN",
                          "displayLines": "9",
                          "constants": [],
                          "variables": [
                            9
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": 1,
                          "isFixed": "(Fixed)",
                          "ignoreBlock": true,
                          "isSpecialEnergy": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SkillUseDubuff",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>"
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1427559472\">Acheron_SetEnergyBarState</a>"
                        },
                        {
                          "name": "Define Custom Variable with Status Counter",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DebuffNumber"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Red Oni"
                          },
                          "passed": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": 1,
                              "isFixed": "(Fixed)",
                              "ignoreBlock": true,
                              "isSpecialEnergy": true
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1065497457\">Acheron_RuondDeBonusCD</a>"
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
            "MaxSP",
            "CurrentSP",
            "MDF_SkillUseFlag",
            "MDF_SkillUseDubuff",
            "OnEnterBattleFlag",
            "OnCharacterCreateFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-317541958\">Acheron_BlockModifySp</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Switch to Action/Ability Context"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "adjustment": "Set",
                  "ignoreBlock": true
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "EnterBattleFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Red Oni"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1427559472\">Acheron_SetEnergyBarState</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnterBattleFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnterBattleFlag",
                      "value": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CurrentSP",
            "MaxSP"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1065497457\">Acheron_RuondDeBonusCD</a>",
          "stackType": "Replace",
          "stackData": [],
          "latentQueue": [
            "OnCharacterCreateFlag",
            "OnEnterBattleFlag",
            "MDF_SkillUseDubuff",
            "MDF_SkillUseFlag",
            "CurrentSP",
            "MaxSP"
          ]
        }
      ],
      "references": []
    },
    "Acheron_Functions": {
      "fileName": "Acheron_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 7,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1427559472\">Acheron_SetEnergyBarState</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-98170223\">Acheron_Passive01Modifier</a>"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-98170223\">Acheron_Passive01Modifier</a>",
                  "counter": {
                    "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                    "displayLines": "MDF_Passive_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Passive_Count"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Passive_Count",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Passive_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (9) || RETURN",
                      "displayLines": "9",
                      "constants": [],
                      "variables": [
                        9
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                        "displayLines": "MDF_Passive_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Passive_Count"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (9) || RETURN",
                        "displayLines": "9",
                        "constants": [],
                        "variables": [
                          9
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 4
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                        "displayLines": "MDF_Passive_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Passive_Count"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (9) || RETURN",
                        "displayLines": "9",
                        "constants": [],
                        "variables": [
                          9
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 4
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Passive_Count) || RETURN",
                    "displayLines": "MDF_Passive_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Passive_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (9) || RETURN",
                    "displayLines": "9",
                    "constants": [],
                    "variables": [
                      9
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-64481768\">Acheron_AddFlower_Ability</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCountFlag01",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_CurrentCountFlag01",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCountFlag01",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCountFlag01) || Variables[1] (Acheron_FlowerCountBySp) || ADD || RETURN",
                    "displayLines": "(MDF_CurrentCountFlag01 + Acheron_FlowerCountBySp)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCountFlag01",
                      "Acheron_FlowerCountBySp"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "counter": {
                    "operator": "Variables[0] (MDF_CurrentCountFlag01) || RETURN",
                    "displayLines": "MDF_CurrentCountFlag01",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCountFlag01"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "counter": {
                    "operator": "Variables[0] (Acheron_FlowerCountBySp) || RETURN",
                    "displayLines": "Acheron_FlowerCountBySp",
                    "constants": [],
                    "variables": [
                      "Acheron_FlowerCountBySp"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_FlowerCountBySp",
              "value": 0
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1879158642\">Acheron_AddFlower_Passiv01</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCountFlag01",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_CurrentCountFlag01",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCountFlag01",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCountFlag01) || Variables[1] (Acheron_FlowerCountBySp) || ADD || RETURN",
                    "displayLines": "(MDF_CurrentCountFlag01 + Acheron_FlowerCountBySp)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCountFlag01",
                      "Acheron_FlowerCountBySp"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "counter": {
                    "operator": "Variables[0] (MDF_CurrentCountFlag01) || RETURN",
                    "displayLines": "MDF_CurrentCountFlag01",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCountFlag01"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Acheron_FlowerCountBySp",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "counter": {
                    "operator": "Variables[0] (Acheron_FlowerCountBySp) || RETURN",
                    "displayLines": "Acheron_FlowerCountBySp",
                    "constants": [],
                    "variables": [
                      "Acheron_FlowerCountBySp"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Acheron_FlowerCountBySp",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1830638488\">Acheron_LimboTransfer</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2096189522\">Acheron_Ability03_Special</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Acheron_FlowerCountBySp",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Limbo_Count",
                  "value": {
                    "operator": "Variables[0] (Limbo_Count) || Variables[1] (Acheron_FlowerCountBySp) || ADD || RETURN",
                    "displayLines": "(Limbo_Count + Acheron_FlowerCountBySp)",
                    "constants": [],
                    "variables": [
                      "Limbo_Count",
                      "Acheron_FlowerCountBySp"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Acheron_FlowerCountBySp",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Limbo_Count",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Acheron: Crimson Knot Transfer Target[v1]}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Acheron_FlagCount",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MDF_Acheron_FlagCount",
                          "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Acheron_FlagCount",
                          "value": {
                            "operator": "Variables[0] (MDF_Acheron_FlagCount) || Variables[1] (Limbo_Count) || ADD || RETURN",
                            "displayLines": "(MDF_Acheron_FlagCount + Limbo_Count)",
                            "constants": [],
                            "variables": [
                              "MDF_Acheron_FlagCount",
                              "Limbo_Count"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                          "counter": {
                            "operator": "Variables[0] (MDF_Acheron_FlagCount) || RETURN",
                            "displayLines": "MDF_Acheron_FlagCount",
                            "constants": [],
                            "variables": [
                              "MDF_Acheron_FlagCount"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue01": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_PropertyValue02": {
                              "operator": "Variables[0] (0.6) || RETURN",
                              "displayLines": "0.6",
                              "constants": [],
                              "variables": [
                                0.6
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                          "counter": {
                            "operator": "Variables[0] (Limbo_Count) || RETURN",
                            "displayLines": "Limbo_Count",
                            "constants": [],
                            "variables": [
                              "Limbo_Count"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue01": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_PropertyValue02": {
                              "operator": "Variables[0] (0.6) || RETURN",
                              "displayLines": "0.6",
                              "constants": [],
                              "variables": [
                                0.6
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Limbo_Count",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__77299136\">Acheron_HitFlower</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-535608708\">Acheron_PointB3_DamageUp</a>[<span class=\"descriptionNumberColor\">Thunder Core</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1252175641\">Acheron_TiggerFlower</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "TargetEntity_CurrentFlagCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TargetEntity_CurrentFlagCount",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TargetEntity_UltraFlagCount",
                  "value": {
                    "operator": "Variables[0] (TargetEntity_CurrentFlagCount) || RETURN",
                    "displayLines": "TargetEntity_CurrentFlagCount",
                    "constants": [],
                    "variables": [
                      "TargetEntity_CurrentFlagCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TargetEntity_UltraFlagCount",
                  "value": {
                    "operator": "Variables[0] (TargetEntity_UltraFlagCount) || Constants[0] (3) || SUB || RETURN",
                    "displayLines": "(TargetEntity_UltraFlagCount - 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      "TargetEntity_UltraFlagCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TargetEntity_UltraFlagCount",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TargetEntity_LoopFlagCount",
                      "value": 3
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "UltraFlagCount",
                      "value": {
                        "operator": "Variables[0] (TargetEntity_LoopFlagCount) || Constants[0] (3) || ADD || RETURN",
                        "displayLines": "(TargetEntity_LoopFlagCount + 3)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          "TargetEntity_LoopFlagCount"
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TargetEntity_LoopFlagCount",
                      "value": 3
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "UltraFlagCount",
                      "value": {
                        "operator": "Variables[0] (TargetEntity_LoopFlagCount) || Constants[0] (3) || ADD || RETURN",
                        "displayLines": "(TargetEntity_LoopFlagCount + 3)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          "TargetEntity_LoopFlagCount"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                      "counter": {
                        "operator": "Variables[0] (TargetEntity_UltraFlagCount) || RETURN",
                        "displayLines": "TargetEntity_UltraFlagCount",
                        "constants": [],
                        "variables": [
                          "TargetEntity_UltraFlagCount"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue01": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue02": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TargetEntity_LoopFlagCount",
                  "value": {
                    "operator": "Variables[0] (TargetEntity_CurrentFlagCount) || RETURN",
                    "displayLines": "TargetEntity_CurrentFlagCount",
                    "constants": [],
                    "variables": [
                      "TargetEntity_CurrentFlagCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "UltraFlagCount",
                  "value": {
                    "operator": "Variables[0] (TargetEntity_LoopFlagCount) || Variables[1] (TargetEntity_CurrentFlagCount) || ADD || RETURN",
                    "displayLines": "(TargetEntity_LoopFlagCount + TargetEntity_CurrentFlagCount)",
                    "constants": [],
                    "variables": [
                      "TargetEntity_LoopFlagCount",
                      "TargetEntity_CurrentFlagCount"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill33"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "The Abyss"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (0.15) || Variables[0] (0.15) || Variables[1] (UltraFlagCount) || MUL || ADD || Variables[2] (Acheron_PointB2_DamageRatio) || MUL || RETURN",
                      "displayLines": "((0.15 + (0.15 * UltraFlagCount)) * Acheron_PointB2_DamageRatio)",
                      "constants": [],
                      "variables": [
                        0.15,
                        "UltraFlagCount",
                        "Acheron_PointB2_DamageRatio"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Ultimate",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (0.15) || Variables[0] (0.15) || Variables[1] (UltraFlagCount) || MUL || ADD || RETURN",
                      "displayLines": "(0.15 + (0.15 * UltraFlagCount))",
                      "constants": [],
                      "variables": [
                        0.15,
                        "UltraFlagCount"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Ultimate",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Limbo_FlowerCurrentCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Limbo_FlowerTotalCount",
                  "value": {
                    "operator": "Variables[0] (Limbo_FlowerTotalCount) || Variables[1] (Limbo_FlowerCurrentCount) || ADD || RETURN",
                    "displayLines": "(Limbo_FlowerTotalCount + Limbo_FlowerCurrentCount)",
                    "constants": [],
                    "variables": [
                      "Limbo_FlowerTotalCount",
                      "Limbo_FlowerCurrentCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Limbo_FlowerCurrentCount",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Limbo_FlowerTotalCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "ifTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Acheron: Crimson Knot Transfer Target[v1]}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1895936261\">Acheron_AddFlower_Passiv02</a>",
                          "variables": {
                            "Limbo_FlowerCount": {
                              "operator": "Variables[0] (Limbo_FlowerTotalCount) || RETURN",
                              "displayLines": "Limbo_FlowerTotalCount",
                              "constants": [],
                              "variables": [
                                "Limbo_FlowerTotalCount"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Acheron: Crimson Knot Transfer Target[v2]}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1895936261\">Acheron_AddFlower_Passiv02</a>",
                          "variables": {
                            "Limbo_FlowerCount": {
                              "operator": "Variables[0] (Limbo_FlowerTotalCount) || RETURN",
                              "displayLines": "Limbo_FlowerTotalCount",
                              "constants": [],
                              "variables": [
                                "Limbo_FlowerTotalCount"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Limbo_FlowerTotalCount",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1895936261\">Acheron_AddFlower_Passiv02</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Limbo_FlowerTotalCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Acheron_FlagCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Acheron_FlagCount",
                  "value": {
                    "operator": "Variables[0] (MDF_Acheron_FlagCount) || Variables[1] (Limbo_FlowerCount) || ADD || RETURN",
                    "displayLines": "(MDF_Acheron_FlagCount + Limbo_FlowerCount)",
                    "constants": [],
                    "variables": [
                      "MDF_Acheron_FlagCount",
                      "Limbo_FlowerCount"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "counter": {
                    "operator": "Variables[0] (MDF_Acheron_FlagCount) || RETURN",
                    "displayLines": "MDF_Acheron_FlagCount",
                    "constants": [],
                    "variables": [
                      "MDF_Acheron_FlagCount"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Limbo_FlowerTotalCount",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>[<span class=\"descriptionNumberColor\">Crimson Knot</span>]",
                  "counter": {
                    "operator": "Variables[0] (Limbo_FlowerCount) || RETURN",
                    "displayLines": "Limbo_FlowerCount",
                    "constants": [],
                    "variables": [
                      "Limbo_FlowerCount"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
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
  }
}