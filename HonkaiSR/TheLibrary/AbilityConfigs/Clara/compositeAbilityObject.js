const compositeAbilityObject = {
  "fullCharacterName": "Clara",
  "trimCharacterName": "Clara",
  "abilityList": [
    "Clara_Klara_Eidolon6",
    "Clara_Klara_Eidolon4",
    "Clara_Klara_Trace02",
    "Clara_Klara_Trace01",
    "Clara_Klara_TechniqueInLevel",
    "Clara_Klara_PassiveAbility01_InsertAbility",
    "Clara_Klara_PassiveAbility01",
    "Clara_Klara_Ability03_Part02",
    "Clara_Klara_Ability03_Part01",
    "Clara_Klara_Ability03_EnterReady",
    "Clara_Klara_Ability02_Part02",
    "Clara_Klara_Ability02_Part01",
    "Clara_Klara_Ability01_Part02",
    "Clara_Klara_Ability01_Part01",
    "Clara_Modifiers"
  ],
  "abilityObject": {
    "Clara_Klara_Eidolon6": {
      "fileName": "Clara_Klara_Eidolon6",
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
          "modifier": "<a class=\"gModGreen\" id=\"2032783017\">Klara_Eidolon6_Passive</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1212753345\">Klara_Eidolon6_ListenBeHit</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1426674462\">Klara_PassiveATK_Mark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2032783017\">Klara_Eidolon6_Passive</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1212753345\">Klara_Eidolon6_ListenBeHit</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
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
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1212753345\">Klara_Eidolon6_ListenBeHit</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1212753345\">Klara_Eidolon6_ListenBeHit</a>",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        }
      ]
    },
    "Clara_Klara_Eidolon4": {
      "fileName": "Clara_Klara_Eidolon4",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1780515596\">Klara_Eidolon4_ListenBeingAttack</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__202295497\">Klara_Eidolon4_DamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
          "description": "DMG taken -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "DMG Mitigation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1780515596\">Klara_Eidolon4_ListenBeingAttack</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"202295497\">Klara_Eidolon4_DamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                  "duration": 1,
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Clara_Klara_Trace02": {
      "fileName": "Clara_Klara_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Stack Target Resistance",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "statName": "STAT_CTRL",
          "value": {
            "operator": "Variables[0] (0.35) || RETURN",
            "displayLines": "0.35",
            "constants": [],
            "variables": [
              0.35
            ]
          }
        }
      ],
      "references": []
    },
    "Clara_Klara_Trace01": {
      "fileName": "Clara_Klara_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1111450796\">Klara_Trace01</a>",
          "valuePerStack": {
            "MDF_Chance": {
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1111450796\">Klara_Trace01</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (MDF_Chance) || RETURN",
                      "displayLines": "MDF_Chance",
                      "constants": [],
                      "variables": [
                        "MDF_Chance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "dispelCount": 1,
                      "dispelOrder": "LastAdded"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Chance"
          ],
          "latentQueue": []
        }
      ]
    },
    "Clara_Klara_TechniqueInLevel": {
      "fileName": "Clara_Klara_TechniqueInLevel",
      "childAbilityList": [
        "Clara_Klara_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1335199985\">Technique_Klara_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1335199985\">Technique_Klara_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
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
                      "modifier": "<a class=\"gModGreen\" id=\"-459252663\">Klara_TechniqueUsage_AggroUP</a>[<span class=\"descriptionNumberColor\">A Small Price for Victory</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (5) || RETURN",
                          "displayLines": "5",
                          "constants": [],
                          "variables": [
                            5
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
    "Clara_Klara_PassiveAbility01_InsertAbility": {
      "fileName": "Clara_Klara_PassiveAbility01_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Because We're Family"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "EnergyBar_ATKCount",
              "value": {
                "operator": "Variables[0] (EnergyBar_ATKCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(EnergyBar_ATKCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "EnergyBar_ATKCount"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
                "displayLines": "EnergyBar_ATKCount",
                "constants": [],
                "variables": [
                  "EnergyBar_ATKCount"
                ]
              },
              "assignState": "True",
              "priorState": "Active"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Revenge"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1077895558\">Klara_Trace03</a>",
              "valuePerStack": {
                "MDF_AllDamageTypeAddRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Variables[1] (1.6) || ADD || RETURN",
                  "displayLines": "(1.6 + 1.6)",
                  "constants": [],
                  "variables": [
                    1.6,
                    1.6
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
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "searchRandom": true,
              "ignoreParallelWarning": true,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (1.6) || Variables[1] (1.6) || ADD || Constants[0] (2) || DIV || RETURN",
                      "displayLines": "((1.6 + 1.6) / 2)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        1.6,
                        1.6
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Physical"
                    },
                    "Tags": [
                      "Counter"
                    ],
                    "attackType": "Follow-up"
                  }
                }
              ]
            },
            "Trigger: Attack End",
            {
              "name": "Define Modifier Variable",
              "modifierName": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
              "function": "Add"
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (1.6) || RETURN",
                  "displayLines": "1.6",
                  "constants": [],
                  "variables": [
                    1.6
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
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1077895558\">Klara_Trace03</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1077895558\">Klara_Trace03</a>",
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
                      "value": "MDF_AllDamageTypeAddRatio"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTypeAddRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "Clara_Klara_PassiveAbility01": {
      "fileName": "Clara_Klara_PassiveAbility01",
      "childAbilityList": [
        "Clara_Klara_PassiveAbility_Camera",
        "Clara_Klara_PassiveAbility01",
        "Clara_Klara_PassiveAbility01_InsertAbility"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 5,
      "toughnessList": [
        10,
        0,
        10
      ],
      "parse": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1664082780\">Klara_PassiveAbility01_ListenCounter</a>",
          "valuePerStack": {
            "MDF_Chance": {
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1481439916\">Klara_PassiveAbility01_AddRevenge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-796199138\">Klara_Passive_DamageReduce</a>[<span class=\"descriptionNumberColor\">Guardian</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1481439916\">Klara_PassiveAbility01_AddRevenge</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1664082780\">Klara_PassiveAbility01_ListenCounter</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (MDF_Chance) || RETURN",
                          "displayLines": "MDF_Chance",
                          "constants": [],
                          "variables": [
                            "MDF_Chance"
                          ]
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1426674462\">Klara_PassiveATK_Mark</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Chance"
          ],
          "latentQueue": []
        }
      ]
    },
    "Clara_Klara_Ability03_Part02": {
      "fileName": "Clara_Klara_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ATKCount",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
            "displayLines": "EnergyBar_ATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCount"
            ]
          },
          "assignState": "True",
          "priorState": "Active"
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
              "modifier": "<a class=\"gModGreen\" id=\"-632500359\">Klara_Eidolon2_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_AttackUP": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
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
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1618683191\">Klara_Ultimate_WarriorMode</a>[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_AggroAddedRatio": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
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
              "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
              "counter": {
                "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [],
                "variables": [
                  2,
                  1
                ]
              },
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_ShowAmmo": {
                  "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                  "displayLines": "(2 + 1)",
                  "constants": [],
                  "variables": [
                    2,
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
              "modifier": "<a class=\"gModGreen\" id=\"-1618683191\">Klara_Ultimate_WarriorMode</a>[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_AggroAddedRatio": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
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
              "modifier": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
              "counter": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_ShowAmmo": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-632500359\">Klara_Eidolon2_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "Refresh",
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
                    "operator": "Variables[0] (MDF_AttackUP) || RETURN",
                    "displayLines": "MDF_AttackUP",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUP"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackUP"
          ],
          "latentQueue": [],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackUP</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1513804400\">Klara_PassiveATK_TeamMember</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1426674462\">Klara_PassiveATK_Mark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-526728231\">Klara_PassiveATKCount</a>[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1513804400\">Klara_PassiveATK_TeamMember</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  },
                  "assignState": "True",
                  "priorState": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (MDF_ShowAmmo) || RETURN",
                    "displayLines": "MDF_ShowAmmo",
                    "constants": [],
                    "variables": [
                      "MDF_ShowAmmo"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1513804400\">Klara_PassiveATK_TeamMember</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1513804400\">Klara_PassiveATK_TeamMember</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1513804400\">Klara_PassiveATK_TeamMember</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  },
                  "assignState": "True",
                  "priorState": "Normal"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShowAmmo"
          ],
          "latentQueue": [],
          "description": "Teammates being attacked will also trigger Counter, for which the DMG multiplier is also increased.",
          "type": "Buff",
          "statusName": "Enhanced Counter"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1618683191\">Klara_Ultimate_WarriorMode</a>[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
          "stackType": "Refresh",
          "modifierFlags": [
            "STAT_Burst"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AggroAddedRatio) || RETURN",
                    "displayLines": "MDF_AggroAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AggroAddedRatio"
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
          "stackData": [
            "MDF_AggroAddedRatio",
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Receives less DMG with a higher chance to be attacked.",
          "type": "Buff",
          "effectName": "DMG Mitigation",
          "statusName": "Promise, Not Command"
        }
      ]
    },
    "Clara_Klara_Ability03_Part01": {
      "fileName": "Clara_Klara_Ability03_Part01",
      "childAbilityList": [
        "Clara_Klara_Ability03_Camera",
        "Clara_Klara_Ability03_EnterReady",
        "Clara_Klara_Ability03_Part01",
        "Clara_Klara_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
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
          "ability": "Klara_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Clara_Klara_Ability03_EnterReady": {
      "fileName": "Clara_Klara_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Clara_Klara_Ability02_Part02": {
      "fileName": "Clara_Klara_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "Skill02_TargetNumber",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
          }
        },
        {
          "name": "Shot Fired",
          "caster": {
            "name": "Target Name",
            "target": "{{Pseudo-Character Partner}}"
          },
          "projectileCountTotal": 4
        },
        {
          "name": "Shot Fired",
          "caster": {
            "name": "Target Name",
            "target": "{{Pseudo-Character Partner}}"
          },
          "projectileCountTotal": 4,
          "projectileDMG": {
            "name": "ATK Scaling DMG",
            "target": {
              "name": "Target Name",
              "target": "{{Clara's Counter Target}}"
            },
            "AttackScaling": {
              "DamageType": "Physical",
              "Damage": {
                "operator": "Variables[0] (1.2) || Constants[0] (0.25) || MUL || RETURN",
                "displayLines": "(1.2 * 0.25)",
                "constants": [
                  0.25
                ],
                "variables": [
                  1.2
                ]
              },
              "Toughness": null,
              "Tags": null,
              "attackType": "Skill"
            }
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
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
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Clara's Counter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Clara_Klara_Ability02_Part01": {
      "fileName": "Clara_Klara_Ability02_Part01",
      "childAbilityList": [
        "Clara_Klara_Ability02_Camera",
        "Clara_Klara_Ability02_Part01",
        "Clara_Klara_Ability02_Part02"
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
          "ability": "Klara_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Clara_Klara_Ability01_Part02": {
      "fileName": "Clara_Klara_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Clara_Klara_Ability01_Part01": {
      "fileName": "Clara_Klara_Ability01_Part01",
      "childAbilityList": [
        "Clara_Klara_Ability01_Camera",
        "Clara_Klara_Ability01_Part01",
        "Clara_Klara_Ability01_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Klara_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Clara_Modifiers": {
      "fileName": "Clara_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1602537794\">Klara_Passive_ShowAmmo</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-796199138\">Klara_Passive_DamageReduce</a>[<span class=\"descriptionNumberColor\">Guardian</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG taken -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Guardian"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__90816647\">Klara_BPAbility_Revenge</a>[<span class=\"descriptionNumberColor\">Mark of Counter</span>]",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
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
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Skill"
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
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The target is Marked by Svarog.",
          "type": "Other",
          "statusName": "Mark of Counter"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-459252663\">Klara_TechniqueUsage_AggroUP</a>[<span class=\"descriptionNumberColor\">A Small Price for Victory</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Higher chance to be attacked.",
          "type": "Buff",
          "statusName": "A Small Price for Victory"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1426674462\">Klara_PassiveATK_Mark</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Klara_PassiveAbility01_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}