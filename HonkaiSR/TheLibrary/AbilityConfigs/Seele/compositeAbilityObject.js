const compositeAbilityObject = {
  "fullCharacterName": "Seele",
  "trimCharacterName": "Seele",
  "abilityList": [
    "Seele_Seele_Eidolon6",
    "Seele_Seele_Eidolon4",
    "Seele_Seele_Eidolon1",
    "Seele_Seele_Trace01",
    "Seele_Seele_TechniqueInLevel",
    "Seele_Seele_Bonus",
    "Seele_Seele_PassiveAbility_1",
    "Seele_Seele_Ability03_Part02",
    "Seele_Seele_Ability03_Part01",
    "Seele_Seele_Ability03_EnterReady",
    "Seele_Seele_Ability02_Part02",
    "Seele_Seele_Ability02_Part01",
    "Seele_Seele_Ability01_Part02",
    "Seele_Seele_Ability01_Part01",
    "Seele_Modifiers"
  ],
  "abilityObject": {
    "Seele_Seele_Eidolon6": {
      "fileName": "Seele_Seele_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Seele_Eidolon6"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Seele_Eidolon6",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "Seele_Eidolon6_Flag[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": "Caster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_Rank6_Listen",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_Rank6_Listen",
                      "value": 5
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
    "Seele_Seele_Eidolon4": {
      "fileName": "Seele_Seele_Eidolon4",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Seele_Eidolon4",
          "valuePerStack": {
            "MDF_AddSP": {
              "operator": "Variables[0] (15) || RETURN",
              "displayLines": "15",
              "constants": [],
              "variables": [
                15
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Seele_Eidolon4",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (MDF_AddSP) || RETURN",
                    "displayLines": "MDF_AddSP",
                    "constants": [],
                    "variables": [
                      "MDF_AddSP"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AddSP"
          ],
          "latentQueue": []
        }
      ]
    },
    "Seele_Seele_Eidolon1": {
      "fileName": "Seele_Seele_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Seele_Eidolon1"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Seele_Eidolon1",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Use Prior Target(s) Defined",
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": "Use Prior Target(s) Defined",
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.8) || MUL || RETURN",
                      "displayLines": "(MDF_MaxHP * 0.8)",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHP",
                        0.8
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "0.15"
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
    "Seele_Seele_Trace01": {
      "fileName": "Seele_Seele_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Seele_LowHP_AggroDown",
          "valuePerStack": {
            "MDF_HPRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_AggroDown": {
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
          "for": "Seele_Trace_AggroDown[<span class=\"descriptionNumberColor\">Nightshade</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
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
          "description": "Lowers the chances of being attacked by enemies.",
          "type": "Buff",
          "effectName": "Aggro Chance Reduction",
          "statusName": "Nightshade"
        },
        {
          "name": "Modifier Construction",
          "for": "Seele_LowHP_AggroDown",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                      "displayLines": "MDF_HPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Seele_Trace_AggroDown[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_AggroDown) || RETURN",
                          "displayLines": "MDF_AggroDown",
                          "constants": [],
                          "variables": [
                            "MDF_AggroDown"
                          ]
                        }
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
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                      "displayLines": "MDF_HPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Seele_Trace_AggroDown[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_AggroDown) || RETURN",
                          "displayLines": "MDF_AggroDown",
                          "constants": [],
                          "variables": [
                            "MDF_AggroDown"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Seele_Trace_AggroDown[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HPRatio",
            "MDF_AggroDown"
          ],
          "latentQueue": []
        }
      ]
    },
    "Seele_Seele_TechniqueInLevel": {
      "fileName": "Seele_Seele_TechniqueInLevel",
      "childAbilityList": [
        "Seele_Seele_TechniqueInLevel"
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
          "modifier": "Seele_Maze_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Seele_Maze_Modifier",
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
                      "to": "Caster",
                      "modifier": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "seele_dmg_percent": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "MDF_Penetrate": {
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
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Seele_Seele_Bonus": {
      "fileName": "Seele_Seele_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Displayed Energy Bar",
          "priorState": "Active"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Resurgence"
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Seele_Seele_PassiveAbility_1": {
      "fileName": "Seele_Seele_PassiveAbility_1",
      "childAbilityList": [
        "Seele_Seele_Bonus_Camera",
        "Seele_Seele_PassiveAbility_1",
        "Seele_Seele_Bonus"
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Rippling Waves"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Ability01PreShowModifier_Fixed",
              "valuePerStack": {
                "MDF_Ability01_Delay": {
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
          "modifier": "Ability02PreShowModifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Local_Seele_ListenKill",
          "valuePerStack": {
            "dmg_percent": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 1,
          "cooldown": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]",
          "description": "Currently in the extra turn provided by \"Resurgence\".",
          "type": "Other",
          "statusName": "Resurgence"
        },
        {
          "name": "Modifier Construction",
          "for": "Local_Seele_ListenKill",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertAction",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
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
                            "name": "Is Extra-Turn"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Seele_BonusInsertAction",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      {
                        "name": "Is Ability Ongoing",
                        "target": "Caster",
                        "invertCondition": true
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertAction",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "seele_dmg_percent": {
                          "operator": "Variables[0] (dmg_percent) || RETURN",
                          "displayLines": "dmg_percent",
                          "constants": [],
                          "variables": [
                            "dmg_percent"
                          ]
                        },
                        "MDF_Penetrate": {
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
              "eventTrigger": "Got a Queued Kill [Owner]",
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
                            "name": "Is Extra-Turn"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Seele_BonusInsertAction",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      {
                        "name": "Is Ability Ongoing",
                        "target": "Caster",
                        "invertCondition": true
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertAction",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "seele_dmg_percent": {
                          "operator": "Variables[0] (dmg_percent) || RETURN",
                          "displayLines": "dmg_percent",
                          "constants": [],
                          "variables": [
                            "dmg_percent"
                          ]
                        },
                        "MDF_Penetrate": {
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
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Seele_Rank6_Listen",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "InsertAction",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertAction",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Active"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Seele_BonusInsertAction",
                      "abilityName": "Seele_Bonus",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Seele_BonusInsertAction",
                          "value": 0
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
                        "name": "Is Extra-Turn"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Seele_BonusInsertAction",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Seele_BonusInsertAction"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_BonusInsertAction",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_BonusInsertAction",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "dmg_percent"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Ability02PreShowModifier",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "NOT",
                  "condition": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Seele_BPAbility_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                  }
                },
                {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "NOT",
                      "condition": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Seele_BPAbility_SpeedUpEidolon2[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                      }
                    },
                    {
                      "name": "Compare: Variable",
                      "target": "Owner of this Modifier",
                      "value1": "Seele_BPAbility_SpeedUpEidolon2[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "compareType": "<",
                      "value2": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valueType": "Layer"
                    }
                  ]
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.25(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Ability01PreShowModifier_Fixed",
          "stackData": [
            "MDF_Skill01_Delay"
          ],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Basic ATK"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (MDF_Skill01_Delay) || INVERT || RETURN",
                "displayLines": "-MDF_Skill01_Delay",
                "constants": [],
                "variables": [
                  "MDF_Skill01_Delay"
                ]
              }
            }
          }
        }
      ]
    },
    "Seele_Seele_Ability03_Part02": {
      "fileName": "Seele_Seele_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "seele_dmg_percent": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_Penetrate": {
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
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (4.25) || RETURN",
              "displayLines": "4.25",
              "constants": [],
              "variables": [
                4.25
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
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Seele_Eidolon6_Flag[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_Eidolon6_Damage": {
                  "operator": "Variables[0] (4.25) || Variables[1] (0.15) || MUL || RETURN",
                  "displayLines": "(4.25 * 0.15)",
                  "constants": [],
                  "variables": [
                    4.25,
                    0.15
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Seele_Eidolon6_Flag[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Owner of this Modifier",
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Rank06_Damage) || RETURN",
                      "displayLines": "MDF_Rank06_Damage",
                      "constants": [],
                      "variables": [
                        "MDF_Rank06_Damage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Rank06_Damage"
          ],
          "latentQueue": [],
          "description": "On a hit, receives an extra Quantum DMG from Seele.",
          "type": "Debuff",
          "effectName": "Butterfly Flurry",
          "statusName": "Butterfly Flurry"
        }
      ]
    },
    "Seele_Seele_Ability03_Part01": {
      "fileName": "Seele_Seele_Ability03_Part01",
      "childAbilityList": [
        "Seele_Seele_Ability03_Camera",
        "Seele_Seele_Ability03_EnterReady",
        "Seele_Seele_Ability03_Part01",
        "Seele_Seele_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Seele_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Seele_Seele_Ability03_EnterReady": {
      "fileName": "Seele_Seele_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Seele_Seele_Ability02_Part02": {
      "fileName": "Seele_Seele_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
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
              "to": "Caster",
              "modifier": "Seele_BPAbility_SpeedUpEidolon2[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Seele_BPAbility_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2.2) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(2.2 * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                2.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2.2) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(2.2 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                2.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2.2) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(2.2 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                2.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2.2) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "(2.2 * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                2.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "60%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Seele_Seele_Ability02_Part01": {
      "fileName": "Seele_Seele_Ability02_Part01",
      "childAbilityList": [
        "Seele_Seele_Ability02_Camera",
        "Seele_Seele_Ability02_Part01",
        "Seele_Seele_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Seele_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Seele_Seele_Ability01_Part02": {
      "fileName": "Seele_Seele_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Quantum",
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
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Rippling Waves"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Extra-Turn"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": "Caster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Seele_Trace02_ModifyAction",
                      "valuePerStack": {
                        "MDF_DelayCost": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": "Caster",
                      "advanceType": "Advance",
                      "value": "-0.2"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": {
                    "operator": "Variables[0] (0.2) || INVERT || RETURN",
                    "displayLines": "-0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  },
                  "adjustmentType": "Advance"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Ability01PreShowModifier_AppliedRatio",
                  "valuePerStack": {
                    "MDF_Ability01_Delay": {
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
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Ability01PreShowModifier_AppliedRatio",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_Skill01_Delay"
          ],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Basic ATK"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (MDF_Skill01_Delay) || INVERT || RETURN",
                "displayLines": "-MDF_Skill01_Delay",
                "constants": [],
                "variables": [
                  "MDF_Skill01_Delay"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Seele_Trace02_ModifyAction",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": "Owner of this Modifier",
                  "advanceType": "Advance",
                  "value": "-0.2"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_DelayCost"
          ],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Basic ATK"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.2) || INVERT || RETURN",
                "displayLines": "-0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              }
            }
          }
        }
      ]
    },
    "Seele_Seele_Ability01_Part01": {
      "fileName": "Seele_Seele_Ability01_Part01",
      "childAbilityList": [
        "Seele_Seele_Ability01_Camera",
        "Seele_Seele_Ability01_Part01",
        "Seele_Seele_Ability01_Part02"
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
          "ability": "Seele_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Seele_Modifiers": {
      "fileName": "Seele_Modifiers",
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
          "for": "Seele_BPAbility_SpeedUpEidolon2[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "SpeedUp_Count",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (SpeedUp_Count) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * SpeedUp_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "SpeedUp_Count"
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
          "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to 2 stacks.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Seele_BPAbility_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (seele_dmg_percent) || RETURN",
                    "displayLines": "seele_dmg_percent",
                    "constants": [],
                    "variables": [
                      "seele_dmg_percent"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Lacerate"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DMG dealt increases by #1[i]%, and Quantum RES PEN +#2[i]%."
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": "Owner of this Modifier",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_Penetrate) || RETURN",
                        "displayLines": "MDF_Penetrate",
                        "constants": [],
                        "variables": [
                          "MDF_Penetrate"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "seele_dmg_percent",
            "MDF_Penetrate"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">seele_dmg_percent</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Amplification",
          "duration": 1
        }
      ],
      "references": []
    }
  }
}