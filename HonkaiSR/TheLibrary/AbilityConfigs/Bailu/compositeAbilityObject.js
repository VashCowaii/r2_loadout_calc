const compositeAbilityObject = {
  "fullCharacterName": "Bailu",
  "trimCharacterName": "Bailu",
  "abilityList": [
    "Bailu_Bailu_Trace02",
    "Bailu_Bailu_Trace01",
    "Bailu_Bailu_TechniqueInLevel",
    "Bailu_Bailu_InsertAbility_Revive",
    "Bailu_Bailu_PassiveAbility01",
    "Bailu_Bailu_Ability03_Part02",
    "Bailu_Bailu_Ability03_Part01",
    "Bailu_Bailu_Ability03_EnterReady",
    "Bailu_Bailu_Ability02_Part02",
    "Bailu_Bailu_Ability02_Part01",
    "Bailu_Bailu_Ability01_Part02",
    "Bailu_Bailu_Ability01_Part01",
    "Bailu_Modifiers"
  ],
  "abilityObject": {
    "Bailu_Bailu_Trace02": {
      "fileName": "Bailu_Bailu_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Bailu_Bailu_Trace01": {
      "fileName": "Bailu_Bailu_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Bailu_PointB1"
        }
      ],
      "references": []
    },
    "Bailu_Bailu_TechniqueInLevel": {
      "fileName": "Bailu_Bailu_TechniqueInLevel",
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
          "to": "Caster",
          "modifier": "StageAbility_Maze_Bailu_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Bailu_Modifier",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Vidyadhara Ichor Lines"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SkillTree02_HealCountExtra",
                          "value": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SkillTree02_HealCountExtra",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Aquatic Benediction"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SkillTree03_DamageResistance",
                          "value": {
                            "operator": "Variables[0] (0.1) || RETURN",
                            "displayLines": "0.1",
                            "constants": [],
                            "variables": [
                              0.1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SkillTree03_DamageResistance",
                          "value": 0
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
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Rank01_AddSP",
                          "value": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Rank01_AddSP",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Team Members(In Context)",
                      "modifier": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF__HealPercentage2": {
                          "operator": "Variables[0] (0.054) || RETURN",
                          "displayLines": "0.054",
                          "constants": [],
                          "variables": [
                            0.054
                          ]
                        },
                        "MDF__HealValue2": {
                          "operator": "Variables[0] (144) || RETURN",
                          "displayLines": "144",
                          "constants": [],
                          "variables": [
                            144
                          ]
                        },
                        "MDF_AddSP": {
                          "operator": "Variables[0] (MDF_Rank01_AddSP) || RETURN",
                          "displayLines": "MDF_Rank01_AddSP",
                          "constants": [],
                          "variables": [
                            "MDF_Rank01_AddSP"
                          ]
                        },
                        "MDF_HealCount": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_HealCountExtra": {
                          "operator": "Variables[0] (MDF_SkillTree02_HealCountExtra) || RETURN",
                          "displayLines": "MDF_SkillTree02_HealCountExtra",
                          "constants": [],
                          "variables": [
                            "MDF_SkillTree02_HealCountExtra"
                          ]
                        }
                      },
                      "success": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Aquatic Benediction"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Team Members(In Context)",
                              "modifier": "Bailu_PointB3[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]",
                              "valuePerStack": {
                                "MDF_DamageResistance": {
                                  "operator": "Variables[0] (MDF_SkillTree03_DamageResistance) || RETURN",
                                  "displayLines": "MDF_SkillTree03_DamageResistance",
                                  "constants": [],
                                  "variables": [
                                    "MDF_SkillTree03_DamageResistance"
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
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Bailu_Bailu_InsertAbility_Revive": {
      "fileName": "Bailu_Bailu_InsertAbility_Revive",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": "Single Target (Primary)",
            "value1": "CurrentHP",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "target": "Caster",
              "modifierName": "Bailu_ReviveEvent",
              "function": "Add"
            },
            "Deleted bullshit",
            {
              "name": "UI Display Event",
              "popUpText": "Gourdful of Elixir"
            },
            {
              "name": "Dispel Debuffs",
              "target": "Single Target (Primary)",
              "silent": true
            },
            {
              "name": "Heal",
              "target": "Single Target (Primary)",
              "healPercent": {
                "operator": "Variables[0] (0.18) || RETURN",
                "displayLines": "0.18",
                "constants": [],
                "variables": [
                  0.18
                ]
              },
              "healFlat": {
                "operator": "Variables[0] (480) || RETURN",
                "displayLines": "480",
                "constants": [],
                "variables": [
                  480
                ]
              },
              "formula": "Heal from Healer's MaxHP"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Bailu_ReviveEvent"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "variableName": "MDF_ReviveTime2",
                  "modifierName": "Bailu_ReviveEvent",
                  "multiplier": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_ReviveTime2) || RETURN",
                    "displayLines": "MDF_ReviveTime2",
                    "constants": [],
                    "variables": [
                      "MDF_ReviveTime2"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
                    "displayLines": "MDF_ReviveTime",
                    "constants": [],
                    "variables": [
                      "MDF_ReviveTime"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ReviveTime2",
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_ReviveTime2) || RETURN",
                    "displayLines": "MDF_ReviveTime2",
                    "constants": [],
                    "variables": [
                      "MDF_ReviveTime2"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
                    "displayLines": "MDF_ReviveTime",
                    "constants": [],
                    "variables": [
                      "MDF_ReviveTime"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Disable",
                  "bar#": 3
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Bailu_Revive_Mark"
            }
          ]
        }
      ],
      "references": []
    },
    "Bailu_Bailu_PassiveAbility01": {
      "fileName": "Bailu_Bailu_PassiveAbility01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ReviveTime",
              "value": {
                "operator": "Variables[0] (1) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(1 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ReviveTime",
              "value": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_ReviveTime2",
          "value": {
            "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
            "displayLines": "MDF_ReviveTime",
            "constants": [],
            "variables": [
              "MDF_ReviveTime"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Bailu_DieEvent"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Bailu_ReviveEvent",
          "counter": {
            "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
            "displayLines": "MDF_ReviveTime",
            "constants": [],
            "variables": [
              "MDF_ReviveTime"
            ]
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Bailu_ReviveEvent",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_DieEvent",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates (Excluding Owner, NO Memosprites)",
                  "modifier": "Bailu_Revive_Ready"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_ReviveTime2) || RETURN",
                    "displayLines": "MDF_ReviveTime2",
                    "constants": [],
                    "variables": [
                      "MDF_ReviveTime2"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
                    "displayLines": "MDF_ReviveTime",
                    "constants": [],
                    "variables": [
                      "MDF_ReviveTime"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3
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
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Teammates (Excluding Owner, NO Memosprites)",
                      "modifier": "Bailu_Revive_Ready"
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
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Bailu_Revive_Ready"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Bailu_Revive_Mark"
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
                        "name": "Modifier Was",
                        "modifier": "Bailu_Revive_Mark"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "Bailu_ReviveEvent",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Team Members(In Context, with Untargetable)",
                      "modifier": "Bailu_Revive_Ready",
                      "onlyRemoveOwnersInstance": true
                    },
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
                      "modifier": "Bailu_Revive_Mark"
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
    "Bailu_Bailu_Ability03_Part02": {
      "fileName": "Bailu_Bailu_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": "All Team Members(In Context)",
          "healPercent": {
            "operator": "Variables[0] (0.135) || RETURN",
            "displayLines": "0.135",
            "constants": [],
            "variables": [
              0.135
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (360) || RETURN",
            "displayLines": "360",
            "constants": [],
            "variables": [
              360
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Find New Target",
          "from": "Allied Team",
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]"
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "target": "Use Prior Target(s) Defined",
                  "modifierName": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
                  "function": "Add",
                  "value": 1,
                  "valueType": "Duration"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Vidyadhara Ichor Lines"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillTree02_HealCountExtra",
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillTree02_HealCountExtra",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Aquatic Benediction"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillTree03_DamageResistance",
                      "value": {
                        "operator": "Variables[0] (0.1) || RETURN",
                        "displayLines": "0.1",
                        "constants": [],
                        "variables": [
                          0.1
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillTree03_DamageResistance",
                      "value": 0
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Rank01_AddSP",
                      "value": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Rank01_AddSP",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
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
                    "MDF__HealPercentage2": {
                      "operator": "Variables[0] (0.054) || RETURN",
                      "displayLines": "0.054",
                      "constants": [],
                      "variables": [
                        0.054
                      ]
                    },
                    "MDF__HealValue2": {
                      "operator": "Variables[0] (144) || RETURN",
                      "displayLines": "144",
                      "constants": [],
                      "variables": [
                        144
                      ]
                    },
                    "MDF_AddSP": {
                      "operator": "Variables[0] (MDF_Rank01_AddSP) || RETURN",
                      "displayLines": "MDF_Rank01_AddSP",
                      "constants": [],
                      "variables": [
                        "MDF_Rank01_AddSP"
                      ]
                    },
                    "MDF_HealCount": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_HealCountExtra": {
                      "operator": "Variables[0] (MDF_SkillTree02_HealCountExtra) || RETURN",
                      "displayLines": "MDF_SkillTree02_HealCountExtra",
                      "constants": [],
                      "variables": [
                        "MDF_SkillTree02_HealCountExtra"
                      ]
                    }
                  },
                  "success": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Aquatic Benediction"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Bailu_PointB3[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]",
                          "valuePerStack": {
                            "MDF_DamageResistance": {
                              "operator": "Variables[0] (MDF_SkillTree03_DamageResistance) || RETURN",
                              "displayLines": "MDF_SkillTree03_DamageResistance",
                              "constants": [],
                              "variables": [
                                "MDF_SkillTree03_DamageResistance"
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Bailu_Eidolon2[<span class=\"descriptionNumberColor\">Sylphic Slumber</span>]",
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
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
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
        {
          "name": "Find New Target",
          "from": "Skill Target List",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": "Use Prior Target(s) Defined",
            "target2": "Caster",
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Bailu_Bailu_Ability03_Part01": {
      "fileName": "Bailu_Bailu_Ability03_Part01",
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
          "ability": "Bailu_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Bailu_Bailu_Ability03_EnterReady": {
      "fileName": "Bailu_Bailu_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Bailu_Bailu_Ability02_Part02": {
      "fileName": "Bailu_Bailu_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Bailu_Eidolon4"
            }
          ]
        },
        {
          "name": "Shot Fired",
          "projectileCount": 1,
          "execute": [
            {
              "name": "Heal",
              "target": "Single Target (Primary)",
              "healPercent": {
                "operator": "Variables[0] (0.117) || RETURN",
                "displayLines": "0.117",
                "constants": [],
                "variables": [
                  0.117
                ]
              },
              "healFlat": {
                "operator": "Variables[0] (312) || RETURN",
                "displayLines": "312",
                "constants": [],
                "variables": [
                  312
                ]
              },
              "formula": "Heal from Healer's MaxHP"
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Standard_AbilityTarget"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_HealPercentage",
          "value": {
            "operator": "Variables[0] (0.117) || RETURN",
            "displayLines": "0.117",
            "constants": [],
            "variables": [
              0.117
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_HealValue",
          "value": {
            "operator": "Variables[0] (312) || RETURN",
            "displayLines": "312",
            "constants": [],
            "variables": [
              312
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": "Allied Team",
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HealPercentage",
              "value": {
                "operator": "Variables[0] (MDF_HealPercentage) || Constants[0] (1) || Variables[1] (0.15) || SUB || MUL || RETURN",
                "displayLines": "(MDF_HealPercentage * (1 - 0.15))",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_HealPercentage",
                  0.15
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HealValue",
              "value": {
                "operator": "Variables[0] (MDF_HealValue) || Constants[0] (1) || Variables[1] (0.15) || SUB || MUL || RETURN",
                "displayLines": "(MDF_HealValue * (1 - 0.15))",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_HealValue",
                  0.15
                ]
              }
            },
            {
              "name": "Shot Fired",
              "projectileCount": 1,
              "execute": [
                {
                  "name": "Heal",
                  "target": "Projectile Target Hit",
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                    "displayLines": "MDF_HealPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_HealPercentage"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_HealValue) || RETURN",
                    "displayLines": "MDF_HealValue",
                    "constants": [],
                    "variables": [
                      "MDF_HealValue"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Projectile Target Hit",
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(2 - 1)",
            "constants": [
              1
            ],
            "variables": [
              2
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": "Allied Team",
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HealPercentage",
                  "value": {
                    "operator": "Variables[0] (MDF_HealPercentage) || Constants[0] (1) || Variables[1] (0.15) || SUB || MUL || RETURN",
                    "displayLines": "(MDF_HealPercentage * (1 - 0.15))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_HealPercentage",
                      0.15
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HealValue",
                  "value": {
                    "operator": "Variables[0] (MDF_HealValue) || Constants[0] (1) || Variables[1] (0.15) || SUB || MUL || RETURN",
                    "displayLines": "(MDF_HealValue * (1 - 0.15))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_HealValue",
                      0.15
                    ]
                  }
                },
                {
                  "name": "Shot Fired",
                  "projectileCount": 1,
                  "execute": [
                    {
                      "name": "Heal",
                      "target": "Projectile Target Hit",
                      "healPercent": {
                        "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                        "displayLines": "MDF_HealPercentage",
                        "constants": [],
                        "variables": [
                          "MDF_HealPercentage"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_HealValue) || RETURN",
                        "displayLines": "MDF_HealValue",
                        "constants": [],
                        "variables": [
                          "MDF_HealValue"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Projectile Target Hit",
                      "modifier": "Standard_AbilityTarget"
                    }
                  ]
                }
              ]
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
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Bailu_Eidolon4"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": "Skill Target List",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": "Use Prior Target(s) Defined",
            "target2": "Caster",
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Bailu_Bailu_Ability02_Part01": {
      "fileName": "Bailu_Bailu_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Bailu_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Bailu_Bailu_Ability01_Part02": {
      "fileName": "Bailu_Bailu_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
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
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Bailu_Bailu_Ability01_Part01": {
      "fileName": "Bailu_Bailu_Ability01_Part01",
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
          "from": "Caster",
          "ability": "Bailu_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Bailu_Modifiers": {
      "fileName": "Bailu_Modifiers",
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
          "for": "Bailu_Revive_Mark",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": {
                          "operator": "Variables[0] (MDF_ReviveTime2) || RETURN",
                          "displayLines": "MDF_ReviveTime2",
                          "constants": [],
                          "variables": [
                            "MDF_ReviveTime2"
                          ]
                        }
                      },
                      "abilityName": "Bailu_InsertAbility_Revive",
                      "abilitySource": "Caster",
                      "abilityTarget": "Owner of this Modifier",
                      "priorityTag": "AvatarReviveOthers",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -70
            },
            {
              "eventTrigger": "Being Attacked End [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_Eidolon4_AttackUp[<span class=\"descriptionNumberColor\">Evil Excision</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackUpRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackUpRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_AttackUpRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUpRatio",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackUpRatio) || RETURN",
                    "displayLines": "MDF_AttackUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AttackUpRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Evil Excision"
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_Eidolon4",
          "execute": [
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Bailu_Eidolon4_AttackUp[<span class=\"descriptionNumberColor\">Evil Excision</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
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
                    "MDF_AttackUpRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_Eidolon2[<span class=\"descriptionNumberColor\">Sylphic Slumber</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoing</span>&nbsp;",
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
          "description": "Increases Outgoing Healing by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Outgoing Healing Boost",
          "statusName": "Sylphic Slumber"
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_PointB3[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                    "displayLines": "MDF_DamageResistance",
                    "constants": [],
                    "variables": [
                      "MDF_DamageResistance"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageResistance"
          ],
          "latentQueue": [],
          "description": "Reduces DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageResistance</span>.",
          "type": "Buff",
          "effectName": "DMG Mitigation",
          "statusName": "Aquatic Benediction"
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_PointB1_HPIncrease[<span class=\"descriptionNumberColor\">Qihuang Analects</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HPIncrease) || RETURN",
                    "displayLines": "MDF_HPIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_HPIncrease"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Max HP +<span class=\"descriptionNumberColor\">MDF_HPIncrease</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Qihuang Analects"
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_PointB1_Sub",
          "execute": [
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": "Owner of this Modifier",
                  "variableName": "Overflowheal",
                  "healProperty": "Result_OverflowHealAmount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Overflowheal",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Bailu_PointB1_HPIncrease[<span class=\"descriptionNumberColor\">Qihuang Analects</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_HPIncrease": {
                          "operator": "Variables[0] (MDF_HPIncrease2) || RETURN",
                          "displayLines": "MDF_HPIncrease2",
                          "constants": [],
                          "variables": [
                            "MDF_HPIncrease2"
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
          "for": "Bailu_PointB1",
          "modifierFlags": [
            "MuteDotCasterCallBack"
          ],
          "execute": [
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": "Owner of this Modifier",
                  "variableName": "Overflowheal",
                  "healProperty": "Result_OverflowHealAmount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Overflowheal",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Bailu_PointB1_HPIncrease[<span class=\"descriptionNumberColor\">Qihuang Analects</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_HPIncrease": {
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
                }
              ]
            },
            {
              "eventTrigger": "Snapshot(Calculation Instance Completed)",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Bailu_PointB1_Sub",
                  "valuePerStack": {
                    "MDF_LifeTime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_HPIncrease2": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "CurrentHP%",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_AddSP",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Owner of this Modifier",
                      "value": {
                        "operator": "Variables[0] (MDF_AddSP) || RETURN",
                        "displayLines": "MDF_AddSP",
                        "constants": [],
                        "variables": [
                          "MDF_AddSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Bailu_PointB3[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
                  "value": {
                    "operator": "Variables[0] (MDF_HealCount) || Variables[1] (MDF_HealCountExtra) || ADD || RETURN",
                    "displayLines": "(MDF_HealCount + MDF_HealCountExtra)",
                    "constants": [],
                    "variables": [
                      "MDF_HealCount",
                      "MDF_HealCountExtra"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": "Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (MDF__HealPercentage2) || RETURN",
                        "displayLines": "MDF__HealPercentage2",
                        "constants": [],
                        "variables": [
                          "MDF__HealPercentage2"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF__HealValue2) || RETURN",
                        "displayLines": "MDF__HealValue2",
                        "constants": [],
                        "variables": [
                          "MDF__HealValue2"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF__HealPercentage2",
            "MDF__HealValue2",
            "MDF_AddSP",
            "MDF_HealCount",
            "MDF_HealCountExtra"
          ],
          "latentQueue": [],
          "description": "Restores HP when attacked.",
          "type": "Buff",
          "effectName": "Invigoration",
          "statusName": "Invigoration"
        },
        {
          "name": "Modifier Construction",
          "for": "Bailu_Revive_Ready",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Bailu_ReviveEvent",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of",
                                "of": "Owner of this Modifier",
                                "target": "Caster",
                                "mustBeAlive2": true
                              }
                            ]
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": "Caster",
                                "value1": "CurrentHP",
                                "compareType": "<=",
                                "value2": 0
                              },
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": "Caster",
                                        "flagName": "STAT_CTRL"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": "Caster",
                                        "flagName": "DisableAction"
                                      }
                                    ]
                                  },
                                  "failed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": "Owner of this Modifier",
                                      "modifier": "Bailu_Revive_Mark"
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
              "eventTrigger": "Being Attacked End [Owner]"
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