const compositeAbilityObject = {
  "fullCharacterName": "Misha",
  "trimCharacterName": "Misha",
  "abilityList": [
    "Misha_Misha_Eidolon6",
    "Misha_Misha_Eidolon2",
    "Misha_Misha_Trace03",
    "Misha_Misha_TechniqueInLevel",
    "Misha_Misha_PassiveAbility01",
    "Misha_Misha_Ability03_Part02",
    "Misha_Misha_Ability03_Part01",
    "Misha_Misha_Ability03_EnterReady",
    "Misha_Misha_Ability02_Part02",
    "Misha_Misha_Ability02_Part01",
    "Misha_Misha_Ability01_Part02",
    "Misha_Misha_Ability01_Part01",
    "Misha_Modifiers"
  ],
  "abilityObject": {
    "Misha_Misha_Eidolon6": {
      "fileName": "Misha_Misha_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Misha_Eidolon6"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Misha_Eidolon6_RecoverBP[<span class=\"descriptionNumberColor\">Estrangement of Dream</span>]",
          "stackType": "ReplaceByCaster",
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
                        "operator": "Variables[0] (MDF_Value) || RETURN",
                        "displayLines": "MDF_Value",
                        "constants": [],
                        "variables": [
                          "MDF_Value"
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
          "description": "Allies recover <span class=\"descriptionNumberColor\">MDF_Value</span> Skill Point(s) after the next time they use a Skill.",
          "type": "Buff",
          "statusName": "Estrangement of Dream"
        },
        {
          "name": "Modifier Construction",
          "for": "Misha_Eidolon6_DamageUp[<span class=\"descriptionNumberColor\">Estrangement of Dream</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
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
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Estrangement of Dream",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "M_Misha_Eidolon6",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Misha_Eidolon6_DamageUp[<span class=\"descriptionNumberColor\">Estrangement of Dream</span>]",
                      "duration": 1,
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
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Misha_Eidolon6_RecoverBP[<span class=\"descriptionNumberColor\">Estrangement of Dream</span>]",
                      "valuePerStack": {
                        "MDF_Value": {
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Misha_Misha_Eidolon2": {
      "fileName": "Misha_Misha_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Misha_Eidolon2"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Misha_Eidolon2",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Misha_Misha_Trace03": {
      "fileName": "Misha_Misha_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Misha_Tree03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Misha_Tree03",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamDark"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_CTRL_Frozen"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "0.3"
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
    "Misha_Misha_TechniqueInLevel": {
      "fileName": "Misha_Misha_TechniqueInLevel",
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
          "modifier": "StageAbility_Misha_TechniqueBonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Misha_TechniqueBonus",
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnergyBar_ExtraUltraAttack",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (2) || ADD || RETURN",
                        "displayLines": "(EnergyBar_ExtraUltraAttack + 2)",
                        "constants": [],
                        "variables": [
                          "EnergyBar_ExtraUltraAttack",
                          2
                        ]
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
    "Misha_Misha_PassiveAbility01": {
      "fileName": "Misha_Misha_PassiveAbility01",
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
          "modifier": "M_Misha_Passive_Sub_EnergyBar"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_BasicUltraAttack",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_MaxUltraAttack",
          "value": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ExtraUltraAttack",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Misha_EnergyCount[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
          "counter": {
            "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
            "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
            "constants": [],
            "variables": [
              "EnergyBar_ExtraUltraAttack",
              "EnergyBar_BasicUltraAttack"
            ]
          },
          "valuePerStack": {
            "BasicAttack": {
              "operator": "Variables[0] (EnergyBar_BasicUltraAttack) || RETURN",
              "displayLines": "EnergyBar_BasicUltraAttack",
              "constants": [],
              "variables": [
                "EnergyBar_BasicUltraAttack"
              ]
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
            "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
            "constants": [],
            "variables": [
              "EnergyBar_ExtraUltraAttack",
              "EnergyBar_BasicUltraAttack"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (EnergyBar_MaxUltraAttack) || RETURN",
            "displayLines": "EnergyBar_MaxUltraAttack",
            "constants": [],
            "variables": [
              "EnergyBar_MaxUltraAttack"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_DamagePercentage",
              "value": {
                "operator": "Variables[0] (0.6) || Variables[1] (0.06) || ADD || RETURN",
                "displayLines": "(0.6 + 0.06)",
                "constants": [],
                "variables": [
                  0.6,
                  0.06
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_DamagePercentage",
              "value": {
                "operator": "Variables[0] (0.6) || RETURN",
                "displayLines": "0.6",
                "constants": [],
                "variables": [
                  0.6
                ]
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Misha_EnergyCount[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Misha_EnergyCount[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
                  "counter": {
                    "operator": "Variables[0] (BasicAttack) || RETURN",
                    "displayLines": "BasicAttack",
                    "constants": [],
                    "variables": [
                      "BasicAttack"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "BasicAttack"
          ],
          "latentQueue": [],
          "description": "The Ultimate's Hits Per Action.",
          "type": "Other",
          "statusName": "G—Gonna Be Late!"
        },
        {
          "name": "Modifier Construction",
          "for": "M_Misha_Passive_Sub_EnergyBar",
          "execute": [
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
                        "of": "Caster's Entire Team [Exclude Battle Events/Summon]",
                        "target": "Use Prior Target(s) Defined",
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "_BPAddValue",
                      "value": "ParamValue",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "_BPAddValue",
                      "value": {
                        "operator": "Variables[0] (_BPAddValue) || INVERT || RETURN",
                        "displayLines": "-_BPAddValue",
                        "constants": [],
                        "variables": [
                          "_BPAddValue"
                        ]
                      }
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (_BPAddValue) || RETURN",
                        "displayLines": "_BPAddValue",
                        "constants": [],
                        "variables": [
                          "_BPAddValue"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Update Energy",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnergyBar_ExtraUltraAttack",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (_BPAddValue) || Variables[2] (1) || MUL || ADD || RETURN",
                        "displayLines": "(EnergyBar_ExtraUltraAttack + (_BPAddValue * 1))",
                        "constants": [],
                        "variables": [
                          "EnergyBar_ExtraUltraAttack",
                          "_BPAddValue",
                          1
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "EnergyBar_ExtraUltraAttack",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -1,
                  "maxValue": {
                    "operator": "Variables[0] (EnergyBar_MaxUltraAttack) || RETURN",
                    "displayLines": "EnergyBar_MaxUltraAttack",
                    "constants": [],
                    "variables": [
                      "EnergyBar_MaxUltraAttack"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Define Modifier Variable",
                      "target": "Caster",
                      "modifierName": "Misha_EnergyCount[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
                        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
                        "constants": [],
                        "variables": [
                          "EnergyBar_ExtraUltraAttack",
                          "EnergyBar_BasicUltraAttack"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyBar_MaxUltraAttack",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
                          "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
                          "constants": [],
                          "variables": [
                            "EnergyBar_ExtraUltraAttack",
                            "EnergyBar_BasicUltraAttack"
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
                            "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
                            "constants": [],
                            "variables": [
                              "EnergyBar_ExtraUltraAttack",
                              "EnergyBar_BasicUltraAttack"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (EnergyBar_MaxUltraAttack) || RETURN",
                            "displayLines": "EnergyBar_MaxUltraAttack",
                            "constants": [],
                            "variables": [
                              "EnergyBar_MaxUltraAttack"
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 4,
                          "cooldown": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
                            "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
                            "constants": [],
                            "variables": [
                              "EnergyBar_ExtraUltraAttack",
                              "EnergyBar_BasicUltraAttack"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (EnergyBar_MaxUltraAttack) || RETURN",
                            "displayLines": "EnergyBar_MaxUltraAttack",
                            "constants": [],
                            "variables": [
                              "EnergyBar_MaxUltraAttack"
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 4,
                          "cooldown": 0
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
    "Misha_Misha_Ability03_Part02": {
      "fileName": "Misha_Misha_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Interlock"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Misha_Ability03_StatusProbabilityUp[<span class=\"descriptionNumberColor\">Interlock</span>]",
              "valuePerStack": {
                "MDF_PropertyRatio": {
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
          "variableName": "_current_hit_count",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": "All Hostile Entities (AOE)",
              "variableName": "Skill03_Hit_Count",
              "livingTargets": true,
              "context": "ContextCaster"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_Hit_Count",
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (1) || Variables[2] (Skill03_Hit_Count) || MUL || Variables[3] (5) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((1 * Skill03_Hit_Count), 5)",
                "constants": [],
                "variables": [
                  "MIN",
                  1,
                  "Skill03_Hit_Count",
                  5
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_Hit_Count",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_Hit_Count",
          "value": {
            "operator": "Variables[0] (Skill03_Hit_Count) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || Variables[2] (EnergyBar_ExtraUltraAttack) || ADD || RETURN",
            "displayLines": "((Skill03_Hit_Count + EnergyBar_BasicUltraAttack) + EnergyBar_ExtraUltraAttack)",
            "constants": [],
            "variables": [
              "Skill03_Hit_Count",
              "EnergyBar_BasicUltraAttack",
              "EnergyBar_ExtraUltraAttack"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_delta_ntime",
          "value": {
            "operator": "Variables[0] (MISHA_OBJECT_UNUSED_2) || Variables[1] (MISHA_OBJECT_UNUSED_1) || SUB || Variables[2] (MAX) || Constants[0] (1) || Variables[3] (Skill03_Hit_Count) || Constants[1] (2) || SUB || PARAM_2 || FUNCTION || DIV || RETURN",
            "displayLines": "((MISHA_OBJECT_UNUSED_2 - MISHA_OBJECT_UNUSED_1) / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, (Skill03_Hit_Count - 2)))",
            "constants": [
              1,
              2
            ],
            "variables": [
              "MISHA_OBJECT_UNUSED_2",
              "MISHA_OBJECT_UNUSED_1",
              "MAX",
              "Skill03_Hit_Count"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Release"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": "Single Target (Primary)",
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Misha_Ability03_SingleAttack",
                  "variables": {
                    "parameter[01]_StanceRatio": 1,
                    "parameter[02]_Frozen_Chance": {
                      "operator": "Variables[0] (0.2) || Variables[1] (0.8) || ADD || RETURN",
                      "displayLines": "(0.2 + 0.8)",
                      "constants": [],
                      "variables": [
                        0.2,
                        0.8
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": "Single Target (Primary)",
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Misha_Ability03_SingleAttack",
                  "variables": {
                    "parameter[01]_StanceRatio": 1,
                    "parameter[02]_Frozen_Chance": {
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
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (MAX) || Constants[0] (0) || Variables[1] (Skill03_Hit_Count) || Constants[1] (2) || SUB || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, (Skill03_Hit_Count - 2))",
            "constants": [
              0,
              2
            ],
            "variables": [
              "MAX",
              "Skill03_Hit_Count"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "_current_hit_count",
              "value": {
                "operator": "Variables[0] (_current_hit_count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(_current_hit_count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_current_hit_count"
                ]
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": "All Hostile Entities (AOE)",
              "paramSequence": []
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_current_hit_count",
          "value": {
            "operator": "Variables[0] (_current_hit_count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_current_hit_count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_current_hit_count"
            ]
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
          "paramSequence": []
        },
        "Trigger: Attack End",
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ExtraUltraAttack",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Misha_Ability03_StatusProbabilityUp[<span class=\"descriptionNumberColor\">Interlock</span>]"
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Misha_Ability03_SingleAttack",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Misha_Eidolon2_DefenceDown[<span class=\"descriptionNumberColor\">Yearning of Youth</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
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
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] (parameter[02]_Frozen_Chance) || RETURN",
                "displayLines": "parameter[02]_Frozen_Chance",
                "constants": [],
                "variables": [
                  "parameter[02]_Frozen_Chance"
                ]
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
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
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (Skill03_DamagePercentage) || RETURN",
                  "displayLines": "Skill03_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Skill03_DamagePercentage"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (parameter[01]_StanceRatio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * parameter[01]_StanceRatio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "parameter[01]_StanceRatio"
                  ]
                },
                "Tags": null
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Misha_Eidolon2_DefenceDown[<span class=\"descriptionNumberColor\">Yearning of Youth</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [
            "_delta_ntime"
          ],
          "description": "Reduces DEF by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Yearning of Youth"
        },
        {
          "name": "Modifier Construction",
          "for": "Misha_Ability03_StatusProbabilityUp[<span class=\"descriptionNumberColor\">Interlock</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Increases Effect Hit Rate by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "Effect Hit Rate Boost",
          "statusName": "Interlock"
        }
      ]
    },
    "Misha_Misha_Ability03_Part01": {
      "fileName": "Misha_Misha_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Misha_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Misha_Misha_Ability03_EnterReady": {
      "fileName": "Misha_Misha_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Misha_Misha_Ability02_Part02": {
      "fileName": "Misha_Misha_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ExtraUltraAttack",
          "value": {
            "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(EnergyBar_ExtraUltraAttack + 1)",
            "constants": [],
            "variables": [
              "EnergyBar_ExtraUltraAttack",
              1
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
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
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
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
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Misha_Misha_Ability02_Part01": {
      "fileName": "Misha_Misha_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Misha_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Misha_Misha_Ability01_Part02": {
      "fileName": "Misha_Misha_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Misha_Misha_Ability01_Part01": {
      "fileName": "Misha_Misha_Ability01_Part01",
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
          "ability": "Misha_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Misha_Modifiers": {
      "fileName": "Misha_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    }
  }
}