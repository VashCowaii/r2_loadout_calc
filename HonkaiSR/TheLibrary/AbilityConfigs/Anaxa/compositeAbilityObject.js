const compositeAbilityObject = {
  "fullCharacterName": "Anaxa",
  "trimCharacterName": "Anaxa",
  "abilityList": [
    "Anaxa_Anaxa_Eidolon6",
    "Anaxa_Anaxa_Eidolon2",
    "Anaxa_Anaxa_Eidolon1",
    "Anaxa_Anaxa_Trace03",
    "Anaxa_Anaxa_Trace02",
    "Anaxa_Anaxa_TechniqueInLevel",
    "Anaxa_Anaxa_PassiveAbility01",
    "Anaxa_Anaxa_Ability03_Part02",
    "Anaxa_Anaxa_Ability03_Part01",
    "Anaxa_Anaxa_Ability03_EnterReady",
    "Anaxa_Anaxa_Ability02_Part02",
    "Anaxa_Anaxa_Ability02_Part01",
    "Anaxa_Anaxa_Ability01_Part02",
    "Anaxa_Anaxa_Ability01_Part01",
    "Anaxa_Modifiers",
    "Anaxa_Functions"
  ],
  "abilityObject": {
    "Anaxa_Anaxa_Eidolon6": {
      "fileName": "Anaxa_Anaxa_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Anaxa_Eidolon6_DamageUp[<span class=\"descriptionNumberColor\">Everything Is in Everything</span>]",
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (1.3) || RETURN",
              "displayLines": "1.3",
              "constants": [],
              "variables": [
                1.3
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Eidolon6_DamageUp[<span class=\"descriptionNumberColor\">Everything Is in Everything</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "ModifyDamageData_IndependentDamageAddedRatio",
                  "variables": {
                    "parameter[0]_IndependentDamageAddedRatio": {
                      "operator": "Variables[0] (MDF_PropertyRatio) || Constants[0] (1) || SUB || RETURN",
                      "displayLines": "(MDF_PropertyRatio - 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_PropertyRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "DMG dealt is <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original DMG.",
          "type": "Buff",
          "statusName": "Everything Is in Everything"
        }
      ]
    },
    "Anaxa_Anaxa_Eidolon2": {
      "fileName": "Anaxa_Anaxa_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Anaxa_Eidolon2"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Anaxa_Eidolon2_Bonus_OnCharacterCreate",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "function_Anaxa_AddWeakness",
                      "target": "Use Prior Target(s) Defined"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Anaxa_Eidolon2_Property[<span class=\"descriptionNumberColor\">Soul, True to History</span>]",
                      "referenceModifier": "MReference_AllDamageTypeResistanceDown",
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
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Eidolon2",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "All Hostile Entities (AOE)(ALL)",
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Anaxa_AddWeakness",
                      "target": "Use Prior Target(s) Defined"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Anaxa_Eidolon2_Property[<span class=\"descriptionNumberColor\">Soul, True to History</span>]",
                      "referenceModifier": "MReference_AllDamageTypeResistanceDown",
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
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "M_Anaxa_Eidolon2_Bonus_OnCharacterCreate"
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Anaxa_Anaxa_Eidolon1": {
      "fileName": "Anaxa_Anaxa_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Anaxa_Eidolon1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Anaxa_Eidolon1_FirstBP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Eidolon1_FirstBP",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "adjustmentType": "+"
                    },
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
          "for": "Anaxa_Eidolon1",
          "execute": [
            {
              "eventTrigger": "Attacker Finalizes DMG Data",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "Anaxa_00_BP"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Anaxa_Eidolon1_Property[<span class=\"descriptionNumberColor\">Magician, Isolated by Stars</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "referenceModifier": "MReference_DefenceRatioDown",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.16) || RETURN",
                          "displayLines": "0.16",
                          "constants": [],
                          "variables": [
                            0.16
                          ]
                        }
                      }
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
    "Anaxa_Anaxa_Trace03": {
      "fileName": "Anaxa_Anaxa_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Anaxa_Trace03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Trace03",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Weakness Count",
                  "target": "Use Prior Target(s) Defined",
                  "target2": "Owner of this Modifier",
                  "variable": "_WeakCount",
                  "context": "ContextModifier",
                  "weaknessFilter": "All"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeakCount",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (_WeakCount) || Constants[0] (7) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_WeakCount, 7)",
                    "constants": [
                      7
                    ],
                    "variables": [
                      "MIN",
                      "_WeakCount"
                    ]
                  }
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - (0.04 * _WeakCount))"
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
    "Anaxa_Anaxa_Trace02": {
      "fileName": "Anaxa_Anaxa_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Anaxa_Trace02"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Trace02_SubAll[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "Imperative Hiatus"
        },
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Trace02_Sub[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "Imperative Hiatus"
        },
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Trace02_SubAllListener",
          "execute": [
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
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Anaxa_Trace02_SubAll[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
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
          "for": "Anaxa_Trace02",
          "execute": [
            {
              "eventTrigger": "Character Path Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Matching Path",
                      "target": null,
                      "matchToPathFrom": [
                        "Erudition"
                      ],
                      "variableName": "_count",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_count",
                        "compareType": "<=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Anaxa_Trace02_Sub[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (1.4) || RETURN",
                              "displayLines": "1.4",
                              "constants": [],
                              "variables": [
                                1.4
                              ]
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 100
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "All Team Members(In Context, with Untargetable)",
                          "modifier": "Anaxa_Trace02_SubAll[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Anaxa_Trace02_SubAllListener"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "All Team Members(In Context, with Untargetable)",
                          "modifier": "Anaxa_Trace02_SubAll[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Anaxa_Trace02_SubAllListener"
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 1
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Anaxa_Trace02_Sub[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]"
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
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Anaxa_Trace02_Sub[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (1.4) || RETURN",
                              "displayLines": "1.4",
                              "constants": [],
                              "variables": [
                                1.4
                              ]
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 100
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "All Team Members(In Context, with Untargetable)",
                          "modifier": "Anaxa_Trace02_SubAll[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Anaxa_Trace02_SubAllListener"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_count",
                          "value": 0
                        },
                        {
                          "name": "Find New Target",
                          "from": "All Team Members(In Context, with Untargetable)",
                          "conditions": {
                            "name": "Target is Pathstrider",
                            "path": [
                              "Erudition"
                            ],
                            "target": "Use Prior Target(s) Defined"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_count",
                              "value": {
                                "operator": "Variables[0] (_count) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(_count + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "_count"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_count",
                            "compareType": "<=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "Anaxa_Trace02_Sub[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                              "valuePerStack": {
                                "MDF_PropertyRatio": {
                                  "operator": "Variables[0] (1.4) || RETURN",
                                  "displayLines": "1.4",
                                  "constants": [],
                                  "variables": [
                                    1.4
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "scope": "AITag",
                              "variableName": "DamageCarry",
                              "value": 100
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Team Members(In Context, with Untargetable)",
                              "modifier": "Anaxa_Trace02_SubAll[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                              "valuePerStack": {
                                "MDF_PropertyRatio": {
                                  "operator": "Variables[0] (0.5) || RETURN",
                                  "displayLines": "0.5",
                                  "constants": [],
                                  "variables": [
                                    0.5
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "Anaxa_Trace02_SubAllListener"
                            },
                            {
                              "name": "Define Custom Variable",
                              "scope": "AITag",
                              "variableName": "DamageCarry",
                              "value": 1
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
    "Anaxa_Anaxa_TechniqueInLevel": {
      "fileName": "Anaxa_Anaxa_TechniqueInLevel",
      "childAbilityList": [
        "Anaxa_Anaxa_TechniqueInLevel"
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
          "to": "Caster",
          "modifier": "StageAbility_Maze_Anaxa_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Anaxa_Modifier",
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
                        "name": "Has Modifier",
                        "target": "Level Entity",
                        "modifier": "StageAbility_MazeStandard_EnterBattle_Monster_Modifier",
                        "invertCondition": true
                      },
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
                      "name": "Find New Target",
                      "from": "All Team Members(In Context, with Untargetable)",
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_TriggerBattleCharacter"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Element",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Physical"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Hostile Entities (AOE)",
                              "modifier": "Standard_WeakType_Physical[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]",
                              "duration": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Element",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Fire"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Hostile Entities (AOE)",
                              "modifier": "Standard_WeakType_Fire[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
                              "duration": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Element",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Ice"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Hostile Entities (AOE)",
                              "modifier": "Standard_WeakType_Ice[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]",
                              "duration": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Element",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Thunder"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Hostile Entities (AOE)",
                              "modifier": "Standard_WeakType_Thunder[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]",
                              "duration": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Element",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Wind"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Hostile Entities (AOE)",
                              "modifier": "Standard_WeakType_Wind[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]",
                              "duration": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Element",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Quantum"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Hostile Entities (AOE)",
                              "modifier": "Standard_WeakType_Quantum[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]",
                              "duration": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Element",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Imaginary"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "All Hostile Entities (AOE)",
                              "modifier": "Standard_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]",
                              "duration": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
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
    "Anaxa_Anaxa_PassiveAbility01": {
      "fileName": "Anaxa_Anaxa_PassiveAbility01",
      "childAbilityList": [
        "Anaxa_Anaxa_PassiveAbility01"
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
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Anaxa_PassiveAbility"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Passive_Mark_Property",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_PropertyRatio",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyRatio"
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
          "for": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": "Current Visual Main-Target",
                        "conditions": {
                          "name": "Compare: Target",
                          "target": "Owner of this Modifier",
                          "target2": "Use Prior Target(s) Defined"
                        }
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Skill"
                          ],
                          "trigger": "State_Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Skill"
                          ],
                          "trigger": "State_Normal"
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
          ],
          "description": "Anaxa deals <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> increased DMG to the target. Furthermore, after using Basic ATK or Skill on the target, he uses 1 additional instance of Skill on it.",
          "type": "Debuff",
          "effectName": "Qualitative Disclosure",
          "statusName": "Qualitative Disclosure"
        },
        {
          "name": "Modifier Construction",
          "for": "Anaxa_Passive_WeaknessListener",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Weakness Count",
                  "target": "Owner of this Modifier",
                  "target2": "Owner of this Modifier",
                  "variable": "MDF_WeakCount",
                  "context": "ContextModifier",
                  "weaknessFilter": "All"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Weakness Count",
                  "target": "Owner of this Modifier",
                  "target2": "Owner of this Modifier",
                  "variable": "MDF_WeakCount",
                  "context": "ContextModifier",
                  "weaknessFilter": "All"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Weakness Count",
                  "target": "Owner of this Modifier",
                  "target2": "Owner of this Modifier",
                  "variable": "MDF_WeakCount",
                  "context": "ContextModifier",
                  "weaknessFilter": "All"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_WeakCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WeaknessNeed) || RETURN",
                      "displayLines": "MDF_WeaknessNeed",
                      "constants": [],
                      "variables": [
                        "MDF_WeaknessNeed"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "Anaxa_Passive_Mark_Property",
                      "variableName": "MDF_PropertyRatio",
                      "value": {
                        "operator": "Variables[0] (0.3) || RETURN",
                        "displayLines": "0.3",
                        "constants": [],
                        "variables": [
                          0.3
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Weakness Count",
                  "target": "Owner of this Modifier",
                  "target2": "Owner of this Modifier",
                  "variable": "MDF_WeakCount",
                  "context": "ContextModifier",
                  "weaknessFilter": "All"
                }
              ]
            },
            {
              "eventTrigger": "Weakness Implanted on Owner",
              "execute": [
                {
                  "name": "Define Custom Variable with Weakness Count",
                  "target": "Owner of this Modifier",
                  "target2": "Owner of this Modifier",
                  "variable": "MDF_WeakCount",
                  "context": "ContextModifier",
                  "weaknessFilter": "All"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_WeakCount",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (MDF_WeaknessNeed) || RETURN",
                    "displayLines": "MDF_WeaknessNeed",
                    "constants": [],
                    "variables": [
                      "MDF_WeaknessNeed"
                    ]
                  },
                  "maxValue": 9999,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "Anaxa_Passive_Mark_Property",
                      "variableName": "MDF_PropertyRatio",
                      "value": {
                        "operator": "Variables[0] (0.3) || RETURN",
                        "displayLines": "0.3",
                        "constants": [],
                        "variables": [
                          0.3
                        ]
                      }
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "Anaxa_Passive_Mark_Property",
                      "variableName": "MDF_PropertyRatio",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Anaxa_InsertMainTargetMark",
          "stackType": "RetainGlobalLatest",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Anaxa_PassiveAbility",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": "Owner of this Modifier",
                        "target2": "Caster"
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": "All Hostile Entities (AOE)",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": "Use Prior Target(s) Defined",
                          "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Roaming Signifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (30) || RETURN",
                        "displayLines": "30",
                        "constants": [],
                        "variables": [
                          30
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Anaxa_AddWeakness",
                  "target": "Use Prior Target(s) Defined"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
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
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Skill Target List",
                        "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "M_Anaxa_StartFreeBP",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Skill Target List",
                      "modifier": "M_Anaxa_InsertMainTargetMark"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "M_Anaxa_PrepareFreeBP",
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Anaxa_Passive",
                      "skillType": "ControlSkill02",
                      "forceAction": true,
                      "castTarget": "Skill Target List",
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "M_Anaxa_PrepareFreeBP",
                          "addStacksPerTrigger": -1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "M_Anaxa_InsertActionCheck",
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "ignoreCost": true
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Anaxa_Passive_Mark_Property",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Anaxa_Passive_WeaknessListener",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_WeaknessNeed": {
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
      ]
    },
    "Anaxa_Anaxa_Ability03_Part02": {
      "fileName": "Anaxa_Anaxa_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "All Hostile Entities (AOE)",
          "modifier": "Anaxa_UltraDebuff[<span class=\"descriptionNumberColor\">Sublimation</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Anaxa_Anaxa_Ability03_Part01": {
      "fileName": "Anaxa_Anaxa_Ability03_Part01",
      "childAbilityList": [
        "Anaxa_Anaxa_Ability03_Camera",
        "Anaxa_Anaxa_Ability03_EnterReady",
        "Anaxa_Anaxa_Ability03_Part01",
        "Anaxa_Anaxa_Ability03_Part02"
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
          "from": "Caster",
          "ability": "Anaxa_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": "Anaxa Ultimate Targets",
            "compareType": ">=",
            "value2": 3,
            "isClientOnly": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Part/Body Extension",
                "target": "Anaxa Ultimate Targets (3 MAX)",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": "Anaxa Ultimate Targets",
            "compareType": ">=",
            "value2": 2,
            "isClientOnly": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Part/Body Extension",
                "target": "Anaxa Ultimate Targets (2 MAX)",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": "Anaxa Ultimate Targets",
            "compareType": ">=",
            "value2": 4,
            "isClientOnly": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Part/Body Extension",
                "target": "Anaxa Ultimate Targets (4 MAX)",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": "Anaxa Ultimate Targets",
            "compareType": ">=",
            "value2": 1,
            "isClientOnly": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Part/Body Extension",
                "target": "Anaxa Ultimate Targets (1 MAX)",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": "Anaxa Ultimate Targets",
            "compareType": ">=",
            "value2": 5,
            "isClientOnly": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Part/Body Extension",
                "target": "Anaxa Ultimate Targets (5 MAX)",
                "invertCondition": true
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Anaxa_Anaxa_Ability03_EnterReady": {
      "fileName": "Anaxa_Anaxa_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Anaxa_Anaxa_Ability02_Part02": {
      "fileName": "Anaxa_Anaxa_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Anaxa_BPAbility_ModifyDamage"
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
              "to": "Caster",
              "modifier": "Anaxa_BPAbility_Bonus[<span class=\"descriptionNumberColor\">Blaze, Plunged to Canyon</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
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
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_LoopCount",
          "value": {
            "operator": "Variables[0] (4) || Variables[1] (Skill02_ExtraHitCount) || ADD || RETURN",
            "displayLines": "(4 + Skill02_ExtraHitCount)",
            "constants": [],
            "variables": [
              4,
              "Skill02_ExtraHitCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.7) || RETURN",
              "displayLines": "0.7",
              "constants": [],
              "variables": [
                0.7
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
            "instanceTag": "Anaxa_00_BP",
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "M_Anaxa_Ability02_HitMark"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (ADF_LoopCount) || RETURN",
            "displayLines": "ADF_LoopCount",
            "constants": [],
            "variables": [
              "ADF_LoopCount"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": "Caster",
              "variableName": "_count",
              "context": "ContextAbility",
              "value": 1
            },
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)",
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "M_Anaxa_Ability02_HitMark",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Anaxa_Ability02_SingleHit"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Bounce_SelectTarget",
                  "target": "All Hostile Entities (AOE)",
                  "paramSequence": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Anaxa_Ability02_SingleHit"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Anaxa_BPAbility_Bonus[<span class=\"descriptionNumberColor\">Blaze, Plunged to Canyon</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Blaze, Plunged to Canyon"
        },
        {
          "name": "Modifier Construction",
          "for": "M_Anaxa_Ability02_HitMark",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
          "for": "M_Anaxa_BPAbility_ModifyDamage",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "Anaxa_00_BP"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "(MDF_TargetCount * 0.2)"
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
                  "name": "Define Custom Variable with Team Count",
                  "target": "All Hostile Entities (AOE)",
                  "variableName": "MDF_TargetCount",
                  "livingTargets": true,
                  "context": "ContextModifier"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Anaxa_Anaxa_Ability02_Part01": {
      "fileName": "Anaxa_Anaxa_Ability02_Part01",
      "childAbilityList": [
        "Anaxa_Anaxa_Ability02_Camera",
        "Anaxa_Anaxa_Ability02_Part01",
        "Anaxa_Anaxa_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 6,
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
          "ability": "Anaxa_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Anaxa_Anaxa_Ability01_Part02": {
      "fileName": "Anaxa_Anaxa_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Roaming Signifier"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": "Caster",
              "value": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
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
    "Anaxa_Anaxa_Ability01_Part01": {
      "fileName": "Anaxa_Anaxa_Ability01_Part01",
      "childAbilityList": [
        "Anaxa_Anaxa_Ability01_Camera",
        "Anaxa_Anaxa_Ability01_Part01",
        "Anaxa_Anaxa_Ability01_Part02"
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
          "from": "Caster",
          "ability": "Anaxa_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Anaxa_Modifiers": {
      "fileName": "Anaxa_Modifiers",
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
          "for": "M_Anaxa_StartFreeBP",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Multiply(by 0 if undefined)"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                }
              ]
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "M_Anaxa_PrepareFreeBP"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "M_Anaxa_PrepareFreeBP",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "M_Anaxa_StartFreeBP"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "M_Anaxa_StartFreeBP"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "M_Anaxa_PrepareFreeBP",
                      "addStacksPerTrigger": -1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Anaxa_Passive"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "M_Anaxa_StartFreeBP"
                    },
                    {
                      "name": "UI Display Event",
                      "popUpText": "Tetrad Wisdom Reigns Thrice"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "stackLimit": 99999
        },
        {
          "name": "Modifier Construction",
          "for": "M_Anaxa_InsertActionCheck",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Anaxa_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Anaxa_InsertRetarget"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Anaxa_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Anaxa_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster",
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": "Caster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Anaxa_InsertRetarget"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Anaxa_InsertRetarget",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": "All Hostile Entities (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": "Use Prior Target(s) Defined",
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "M_Anaxa_PrepareFreeBP",
                          "addStacksPerTrigger": 1
                        },
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": "Anaxa_Passive",
                          "skillType": "ControlSkill02",
                          "forceAction": true,
                          "castTarget": "Use Prior Target(s) Defined",
                          "afterInjection": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "M_Anaxa_PrepareFreeBP",
                              "addStacksPerTrigger": -1
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "M_Anaxa_InsertActionCheck",
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "ignoreCost": true
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "stackLimit": 99999
        },
        {
          "name": "Modifier Construction",
          "for": "Anaxa_UltraDebuff[<span class=\"descriptionNumberColor\">Sublimation</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_HaveCTRLResistance",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target Exists",
                        "target": "Owner of this Modifier",
                        "living": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": "Owner of this Modifier",
                            "flagName": "STAT_CTRL_Frozen_Effect",
                            "invertCondition": true
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_HaveCTRLResistance",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ],
              "priorityLevel": 200
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Flag Resistance",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_HaveCTRLResistance",
                  "context": "ContextModifier",
                  "flagName": "STAT_CTRL"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_HaveCTRLResistance",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Flag",
                        "target": "Owner of this Modifier",
                        "flagName": "Endurance",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Unable to take action. Physical, Fire, Ice, Lightning, Wind, Quantum, and Imaginary Weaknesses are added at the same time."
                    },
                    {
                      "name": "Add Flags to Modifier",
                      "target": "Owner of this Modifier",
                      "flagName": [
                        "DisableAction",
                        "STAT_CTRL",
                        "STAT_CTRL_Frozen_Effect",
                        "FixedPerformTime"
                      ],
                      "modifierName": "Anaxa_UltraDebuff[<span class=\"descriptionNumberColor\">Sublimation</span>]",
                      "casterFilter": "Caster"
                    }
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Physical, Fire, Ice, Lightning, Wind, Quantum, and Imaginary Weaknesses are added at the same time.",
          "type": "Debuff",
          "effectName": "Sublimation",
          "statusName": "Sublimation"
        }
      ],
      "references": []
    },
    "Anaxa_Functions": {
      "fileName": "Anaxa_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "function_Anaxa_AddWeakness",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                "DamageType": "Physical",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                    "DamageType": "Physical",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoPhysical"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoPhysical",
                      "value": 0.0009999999
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Caster",
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoPhysical",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                "DamageType": "Wind",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                    "DamageType": "Wind",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoWind"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoWind",
                      "value": 0.0009999999
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Caster",
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoWind",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                "DamageType": "Fire",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                    "DamageType": "Fire",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoFire"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoFire",
                      "value": 0.0009999999
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Caster",
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoFire",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                "DamageType": "Thunder",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                    "DamageType": "Thunder",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoThunder"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoThunder",
                      "value": 0.0009999999
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Caster",
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoThunder",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                "DamageType": "Ice",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                    "DamageType": "Ice",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoIce"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoIce",
                      "value": 0.0009999999
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Caster",
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoIce",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                "DamageType": "Quantum",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                    "DamageType": "Quantum",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoQuantum"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoQuantum",
                      "value": 0.0009999999
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Caster",
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoQuantum",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                "DamageType": "Imaginary",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                    "DamageType": "Imaginary",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoImaginary"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoImaginary",
                      "value": 0.0009999999
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Caster",
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoImaginary",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TDF_NoImaginary",
                "compareType": ">=",
                "value2": {
                  "operator": "Constants[0] (1) || Variables[0] (TDF_NoQuantum) || SUB || Variables[1] (TDF_NoIce) || SUB || Variables[2] (TDF_NoThunder) || SUB || Variables[3] (TDF_NoFire) || SUB || Variables[4] (TDF_NoWind) || SUB || Variables[5] (TDF_NoPhysical) || SUB || RETURN",
                  "displayLines": "((((((1 - TDF_NoQuantum) - TDF_NoIce) - TDF_NoThunder) - TDF_NoFire) - TDF_NoWind) - TDF_NoPhysical)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "TDF_NoQuantum",
                    "TDF_NoIce",
                    "TDF_NoThunder",
                    "TDF_NoFire",
                    "TDF_NoWind",
                    "TDF_NoPhysical"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_NoPhysical",
                  "value": {
                    "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoPhysical) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoPhysical - 1), 0)",
                    "constants": [
                      1,
                      0
                    ],
                    "variables": [
                      "MAX",
                      "TDF_NoPhysical"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_NoWind",
                  "value": {
                    "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoWind) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoWind - 1), 0)",
                    "constants": [
                      1,
                      0
                    ],
                    "variables": [
                      "MAX",
                      "TDF_NoWind"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_NoFire",
                  "value": {
                    "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoFire) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoFire - 1), 0)",
                    "constants": [
                      1,
                      0
                    ],
                    "variables": [
                      "MAX",
                      "TDF_NoFire"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_NoThunder",
                  "value": {
                    "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoThunder) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoThunder - 1), 0)",
                    "constants": [
                      1,
                      0
                    ],
                    "variables": [
                      "MAX",
                      "TDF_NoThunder"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_NoIce",
                  "value": {
                    "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoIce) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoIce - 1), 0)",
                    "constants": [
                      1,
                      0
                    ],
                    "variables": [
                      "MAX",
                      "TDF_NoIce"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_NoQuantum",
                  "value": {
                    "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoQuantum) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoQuantum - 1), 0)",
                    "constants": [
                      1,
                      0
                    ],
                    "variables": [
                      "MAX",
                      "TDF_NoQuantum"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_NoImaginary",
                  "value": {
                    "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoImaginary) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoImaginary - 1), 0)",
                    "constants": [
                      1,
                      0
                    ],
                    "variables": [
                      "MAX",
                      "TDF_NoImaginary"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] (TDF_NoPhysical) || RETURN",
                  "displayLines": "TDF_NoPhysical",
                  "constants": [],
                  "variables": [
                    "TDF_NoPhysical"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoWind) || RETURN",
                  "displayLines": "TDF_NoWind",
                  "constants": [],
                  "variables": [
                    "TDF_NoWind"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoFire) || RETURN",
                  "displayLines": "TDF_NoFire",
                  "constants": [],
                  "variables": [
                    "TDF_NoFire"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoThunder) || RETURN",
                  "displayLines": "TDF_NoThunder",
                  "constants": [],
                  "variables": [
                    "TDF_NoThunder"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoIce) || RETURN",
                  "displayLines": "TDF_NoIce",
                  "constants": [],
                  "variables": [
                    "TDF_NoIce"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoQuantum) || RETURN",
                  "displayLines": "TDF_NoQuantum",
                  "constants": [],
                  "variables": [
                    "TDF_NoQuantum"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoImaginary) || RETURN",
                  "displayLines": "TDF_NoImaginary",
                  "constants": [],
                  "variables": [
                    "TDF_NoImaginary"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                  "modifier": "Standard_WeakType_Physical[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                  "modifier": "Standard_WeakType_Wind[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                  "modifier": "Standard_WeakType_Fire[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                  "modifier": "Standard_WeakType_Thunder[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                  "modifier": "Standard_WeakType_Ice[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                  "modifier": "Standard_WeakType_Quantum[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use [FUNCTION'S LIST OF] Prior Target(s) Defined",
                  "modifier": "Standard_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Anaxa_Ability02_SingleHit",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (0.7) || RETURN",
                  "displayLines": "0.7",
                  "constants": [],
                  "variables": [
                    0.7
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "(ST Toughness Value / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "instanceTag": "Anaxa_00_BP",
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "M_Anaxa_Ability02_HitMark"
            }
          ]
        }
      ],
      "references": []
    }
  }
}