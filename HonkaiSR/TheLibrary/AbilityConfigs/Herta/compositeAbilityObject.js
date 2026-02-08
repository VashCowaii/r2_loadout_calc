const compositeAbilityObject = {
  "fullCharacterName": "Herta",
  "trimCharacterName": "Herta",
  "abilityList": [
    "Herta_Herta_Trace02",
    "Herta_Herta_TechniqueInLevel",
    "Herta_Herta_PassiveAtkReady_Ability",
    "Herta_Herta_PassiveAbility01",
    "Herta_Herta_Ability03_Part02",
    "Herta_Herta_Ability03_Part01",
    "Herta_Herta_Ability03_EnterReady",
    "Herta_Herta_Ability02_Part02",
    "Herta_Herta_Ability02_Part01",
    "Herta_Herta_Ability01_Part02",
    "Herta_Herta_Ability01_Part01",
    "Herta_Modifiers"
  ],
  "abilityObject": {
    "Herta_Herta_Trace02": {
      "fileName": "Herta_Herta_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"499178350\">Herta_Trace02_Resistance</a>",
          "valuePerStack": {
            "MDF_Resistance": {
              "operator": "Variables[0] (0.35) || RETURN",
              "displayLines": "0.35",
              "constants": [],
              "variables": [
                0.35
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__499178350\">Herta_Trace02_Resistance</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": {
                    "operator": "Variables[0] (MDF_Resistance) || RETURN",
                    "displayLines": "MDF_Resistance",
                    "constants": [],
                    "variables": [
                      "MDF_Resistance"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Resistance"
          ],
          "latentQueue": []
        }
      ]
    },
    "Herta_Herta_TechniqueInLevel": {
      "fileName": "Herta_Herta_TechniqueInLevel",
      "childAbilityList": [
        "Herta_Herta_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
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
          "modifier": "<a class=\"gModGreen\" id=\"1189021958\">Technique_Herta_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-516353123\">Herta_TechniqueUsage_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">It Can Still Be Optimized</span>]",
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
                }
              ]
            }
          ],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "It Can Still Be Optimized"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1189021958\">Technique_Herta_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-516353123\">Herta_TechniqueUsage_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">It Can Still Be Optimized</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Herta_Herta_PassiveAtkReady_Ability": {
      "fileName": "Herta_Herta_PassiveAtkReady_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"1076207439\">Herta_Passive_Flag</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Herta_Count_Insert",
          "value": 0
        },
        {
          "name": "UI Display Event",
          "popUpText": "Fine, I'll Do It Myself"
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Herta_Count",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "Herta_Count",
              "value": {
                "operator": "Variables[0] (Herta_Count) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(Herta_Count - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Herta_Count"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Scoring_Herta_Count",
              "value": {
                "operator": "Variables[0] (Scoring_Herta_Count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Scoring_Herta_Count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Scoring_Herta_Count"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1736222640\">Herta_AbilityEidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CriticalChance": {
                      "operator": "Variables[0] (0.03) || RETURN",
                      "displayLines": "0.03",
                      "constants": [],
                      "variables": [
                        0.03
                      ]
                    }
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"1482818607\">Herta_AbilityEidolon4_DamageUp</a>",
                  "valuePerStack": {
                    "AbilityRank_Eidolon4_P1_DamagePercentage": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
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
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Enemies Still Alive",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              },
              "passed": [
                "Trigger: Attack End",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1482818607\">Herta_AbilityEidolon4_DamageUp</a>"
                },
                "Deleted bullshit",
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Herta_Count"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Scoring_Herta_Count",
                  "value": 0
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Herta_Count_ATK"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-256958111\">Herta_Passive_ATK</a>"
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
                        "value1": "Herta_Count",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    "Trigger: Attack End",
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1482818607\">Herta_AbilityEidolon4_DamageUp</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-256958111\">Herta_Passive_ATK</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Herta_Count_ATK"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Herta_Count"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Scoring_Herta_Count",
                      "value": 0
                    },
                    "Trigger: Skip Death Handling",
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Herta_Count"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1482818607\">Herta_AbilityEidolon4_DamageUp</a>"
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1076207439\">Herta_Passive_Flag</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1482818607\">Herta_AbilityEidolon4_DamageUp</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "SkillRank_Rank04_P1_DamagePercentage"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "SkillRank_Rank04_P1_DamagePercentage"
          ],
          "latentQueue": [
            "Herta_Count_Insert"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1736222640\">Herta_AbilityEidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
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
                  "variableName": "MDF_Count",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalChance) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_CriticalChance * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalChance",
                      "MDF_Count"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_CriticalChance"
          ],
          "latentQueue": [
            "Herta_Count_Insert"
          ],
          "description": "Each stack increases CRIT rate by <span class=\"descriptionNumberColor\">MDF_CriticalChance</span>, up to 5 stacks.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "CRIT Rate Boost",
          "addStacksPerTrigger": 1
        }
      ]
    },
    "Herta_Herta_PassiveAbility01": {
      "fileName": "Herta_Herta_PassiveAbility01",
      "childAbilityList": [
        "Herta_Herta_PassiveAbility01",
        "Herta_Herta_Passive1Atk_Ability_Camera",
        "Herta_Herta_PassiveAtkReady_Ability"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 5,
      "toughnessList": [
        0,
        5,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1179391648\">Herta_Passive</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Herta_Count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Scoring_Herta_Count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Herta_Skill01_Count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Herta_Count_ATK",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Herta_Count_Insert",
          "value": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1179391648\">Herta_Passive</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Herta_Count_Insert",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Herta_Count_ATK",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Herta_Count_Insert",
                      "value": 0
                    }
                  ]
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
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.5) || MUL || RETURN",
                      "displayLines": "(MDF_MaxHP * 0.5)",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHP",
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}"
                            },
                            "team": "Player Team"
                          },
                          {
                            "name": "Target Is Hostile",
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "MAvatar_Herta_Passive_CoolDown",
                            "compareType": "=",
                            "value2": {
                              "operator": "Constants[0] (0) || RETURN",
                              "displayLines": "0",
                              "constants": [
                                0
                              ],
                              "variables": []
                            }
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "flagName": "STAT_CTRL"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-256958111\">Herta_Passive_ATK</a>"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "MAvatar_Herta_Passive_CoolDown",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Herta_Count",
                              "value": {
                                "operator": "Variables[0] (Herta_Count) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(Herta_Count + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Herta_Count"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Herta_Count",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Scoring_Herta_Count",
                              "value": 0
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "MAvatar_Herta_Passive_CoolDown",
                          "value": 1
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
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.5) || MUL || RETURN",
                          "displayLines": "(MDF_MaxHP * 0.5)",
                          "constants": [],
                          "variables": [
                            "MDF_MaxHP",
                            0.5
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "MAvatar_Herta_Passive_CoolDown"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Herta_Count",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Scoring_Herta_Count",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Herta_Count_ATK",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-256958111\">Herta_Passive_ATK</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Herta_Herta_Ability03_Part02": {
      "fileName": "Herta_Herta_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Icing"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL_Frozen"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1926403261\">Herta_Trace03_AddDamageUp</a>",
                      "valuePerStack": {
                        "MDF_AllDamageTakenRatio": {
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
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
            "EnergyGainPercent": "100%"
          }
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-429248408\">Herta_AbilityEidolon6_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_AttackAddRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Skip Death Handling",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1926403261\">Herta_Trace03_AddDamageUp</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-429248408\">Herta_AbilityEidolon6_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                    "displayLines": "MDF_AttackAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackAddRatio"
          ],
          "latentQueue": [],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1926403261\">Herta_Trace03_AddDamageUp</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_AllDamageTakenRatio"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTakenRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "Herta_Herta_Ability03_Part01": {
      "fileName": "Herta_Herta_Ability03_Part01",
      "childAbilityList": [
        "Herta_Herta_Ability03_Camera",
        "Herta_Herta_Ability03_Part01",
        "Herta_Herta_Ability03_Part02",
        "Herta_Herta_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "Herta_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Herta_Herta_Ability03_EnterReady": {
      "fileName": "Herta_Herta_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Herta_Herta_Ability02_Part02": {
      "fileName": "Herta_Herta_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1288583281\">Herta_Ability02_CheckHp</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.7,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1288583281\">Herta_Ability02_CheckHp</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1288583281\">Herta_Ability02_CheckHp</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.5) || MUL || RETURN",
                      "displayLines": "(MDF_MaxHP * 0.5)",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHP",
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Efficiency"
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                              "value": "(0.2 + 0.25)"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                              "value": "0.2"
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
        }
      ]
    },
    "Herta_Herta_Ability02_Part01": {
      "fileName": "Herta_Herta_Ability02_Part01",
      "childAbilityList": [
        "Herta_Herta_Ability02_Camera",
        "Herta_Herta_Ability02_Part01",
        "Herta_Herta_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Herta_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Herta_Herta_Ability01_Part02": {
      "fileName": "Herta_Herta_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "modifier": "<a class=\"gModGreen\" id=\"1016241896\">Herta_Ability01_CheckHp</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
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
                "DamageType": "Ice",
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
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Herta_Skill01_Count",
                "compareType": "=",
                "value2": 1
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
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            },
            "Trigger: Attack End"
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
                "DamageType": "Ice",
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
            },
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1016241896\">Herta_Ability01_CheckHp</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Herta_Skill01_Count",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1016241896\">Herta_Ability01_CheckHp</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.5) || MUL || RETURN",
                      "displayLines": "(MDF_MaxHP * 0.5)",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHP",
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Herta_Skill01_Count",
                      "value": 1
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
    },
    "Herta_Herta_Ability01_Part01": {
      "fileName": "Herta_Herta_Ability01_Part01",
      "childAbilityList": [
        "Herta_Herta_Ability01_Camera",
        "Herta_Herta_Ability01_Part01",
        "Herta_Herta_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Herta_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Herta_Modifiers": {
      "fileName": "Herta_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1076207439\">Herta_Passive_Flag</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-256958111\">Herta_Passive_ATK</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Herta_Count_ATK",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Herta_Count",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1076207439\">Herta_Passive_Flag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Herta_Count_ATK",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Herta_Count_Insert",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Herta_PassiveAtkReady_Ability",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
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
          ],
          "stackData": [],
          "latentQueue": [
            "Herta_Count_Insert",
            "Herta_Count_ATK",
            "MAvatar_Herta_Passive_CoolDown"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-677386583\">Herta_Passive_Charge</a>",
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
                }
              ]
            }
          ],
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        }
      ],
      "references": []
    }
  }
}