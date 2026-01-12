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
          "to": "Caster",
          "modifier": "Klara_Eidolon6_Passive",
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
          "for": "Klara_Eidolon6_ListenBeHit",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
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
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamDark"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Klara_PassiveATK_Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Klara_Eidolon6_Passive",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates + Unselectable (Excluding Owner)",
                  "modifier": "Klara_Eidolon6_ListenBeHit",
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
                    "target": "Use Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Teammates + Unselectable (Excluding Owner)",
                      "modifier": "Klara_Eidolon6_ListenBeHit",
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
                  "to": [
                    {
                      "name": "Target List",
                      "target": "All Team Members(In Context)"
                    },
                    {
                      "name": "Target List",
                      "target": "All Untargetable"
                    }
                  ],
                  "modifier": "Klara_Eidolon6_ListenBeHit",
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
          "to": "Caster",
          "modifier": "Klara_Eidolon4_ListenBeingAttack"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Klara_Eidolon4_DamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "for": "Klara_Eidolon4_ListenBeingAttack",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Klara_Eidolon4_DamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
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
          "target": "Caster",
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
          "to": "Caster",
          "modifier": "Klara_Trace01",
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
          "for": "Klara_Trace01",
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
                      "target": "Caster",
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
          "to": "Caster",
          "modifier": "Technique_Klara_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Technique_Klara_Modifier",
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
                      "to": "Caster",
                      "modifier": "Klara_TechniqueUsage_AggroUP[<span class=\"descriptionNumberColor\">A Small Price for Victory</span>]",
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
            "target": "Caster",
            "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
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
              "to": "Caster",
              "modifier": "Klara_Trace03",
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
            "target": "Caster",
            "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
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
              "from": "Blast (Adjacent)",
              "searchRandom": true,
              "ignoreParallelWarning": true,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
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
              "modifierName": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
              "function": "Add"
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
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
          "to": "Caster",
          "modifier": "Klara_Trace03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Klara_Trace03",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeAddRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeAddRatio"
                    ]
                  }
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
          "to": "Caster",
          "modifier": "Klara_PassiveAbility01_ListenCounter",
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
          "to": "Caster",
          "modifier": "Klara_PassiveAbility01_AddRevenge"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Klara_Passive_DamageReduce[<span class=\"descriptionNumberColor\">Guardian</span>]",
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
          "for": "Klara_PassiveAbility01_AddRevenge",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Klara_PassiveAbility01_ListenCounter",
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
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamDark"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Klara_PassiveATK_Mark"
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
              "to": "Caster",
              "modifier": "Klara_Eidolon2_AttackUP[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
              "to": "Caster",
              "modifier": "Klara_Ultimate_WarriorMode[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
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
              "to": "Caster",
              "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
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
              "to": "Caster",
              "modifier": "Klara_Ultimate_WarriorMode[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
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
              "to": "Caster",
              "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
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
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Klara_Eidolon2_AttackUP[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "Refresh",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
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
          "for": "Klara_PassiveATK_TeamMember",
          "execute": [
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Klara_PassiveATK_Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": [
                    {
                      "name": "Target List",
                      "target": "All Team Members(In Context)"
                    },
                    {
                      "name": "Target List",
                      "target": "All Untargetable"
                    }
                  ],
                  "modifier": "Klara_PassiveATK_TeamMember",
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
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Klara_PassiveATK_TeamMember"
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
                    "target": "Use Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Klara_PassiveATK_TeamMember"
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
                  "to": [
                    {
                      "name": "Target List",
                      "target": "All Team Members(In Context)"
                    },
                    {
                      "name": "Target List",
                      "target": "All Untargetable"
                    }
                  ],
                  "modifier": "Klara_PassiveATK_TeamMember",
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
          "for": "Klara_Ultimate_WarriorMode[<span class=\"descriptionNumberColor\">Promise, Not Command</span>]",
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
                  "target": "Owner of this Modifier",
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
                  "target": "Owner of this Modifier",
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
          "from": "Caster",
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
          "target": "All Hostile Entities (AOE)",
          "variableName": "Skill02_TargetNumber",
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
          }
        },
        {
          "name": "Shot Fired",
          "caster": "Psuedo Partners",
          "projectileCountTotal": 4
        },
        {
          "name": "Shot Fired",
          "caster": "Psuedo Partners",
          "projectileCountTotal": 4,
          "projectileDMG": {
            "name": "ATK Scaling DMG",
            "target": "Clara's Counter Target",
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
          "target": "All Hostile Entities (AOE)",
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
              "to": "Clara's Counter Target",
              "modifier": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Clara_Klara_Ability02_Part01": {
      "fileName": "Clara_Klara_Ability02_Part01",
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
          "from": "Caster",
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
          "target": "Single Target (Primary)",
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
          "from": "Caster",
          "ability": "Klara_Ability01_Part02",
          "isTrigger": true
        }
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
          "for": "Klara_Passive_ShowAmmo",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "Klara_Passive_DamageReduce[<span class=\"descriptionNumberColor\">Guardian</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "for": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster"
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
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster"
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
          "for": "Klara_TechniqueUsage_AggroUP[<span class=\"descriptionNumberColor\">A Small Price for Victory</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "for": "Klara_PassiveATK_Mark",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Klara_PassiveAbility01_InsertAbility",
                  "abilitySource": "Caster",
                  "abilityTarget": "Owner of this Modifier",
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