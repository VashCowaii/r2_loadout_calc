const configAbility = {
  "fileName": "Hanya_Modifiers",
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
      "for": "WHanya_BpZhanYin_SpecialMark_Listen4",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill"
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
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}"
                },
                "conditions": {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
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
      "name": "Modifier Construction",
      "for": "WHanya_BpZhanYin_SpecialMark_Listen3",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill"
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
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}"
                },
                "conditions": {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "WHanya_BpZhanYin_SpecialMark_Listen2",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill"
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
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}"
                },
                "conditions": {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
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
      "name": "Modifier Construction",
      "for": "WHanya_BpZhanYin_SpecialMark_Listen",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill"
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
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}"
                },
                "conditions": {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Hanya_Eidolon2[<span class=\"descriptionNumberColor\">Two Views</span>]",
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Two Views",
      "statusName": "Two Views"
    },
    {
      "name": "Modifier Construction",
      "for": "Hanya_Eidolon2_Pre",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Hanya_Eidolon2[<span class=\"descriptionNumberColor\">Two Views</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
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
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "Hanya_Eidolon2[<span class=\"descriptionNumberColor\">Two Views</span>]"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.2(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Hanya_Eidolon1",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Rank01_Count",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Hanya_PointB1[<span class=\"descriptionNumberColor\">Scrivener</span>]",
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
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Scrivener"
    },
    {
      "name": "Modifier Construction",
      "for": "WHanya_BpZhanYin_Self",
      "stackType": "Replace",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "ZhanYinCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "ZhanYinCount_01",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (ZhanYinCount) || RETURN",
                "displayLines": "ZhanYinCount",
                "constants": [],
                "variables": [
                  "ZhanYinCount"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (ZhanYinCount) || RETURN",
                "displayLines": "ZhanYinCount",
                "constants": [],
                "variables": [
                  "ZhanYinCount"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "assignState": "True",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ZhanYinCount",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (ZhanYinCount) || RETURN",
                    "displayLines": "ZhanYinCount",
                    "constants": [],
                    "variables": [
                      "ZhanYinCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "bar#": 3,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (ZhanYinCount) || RETURN",
                    "displayLines": "ZhanYinCount",
                    "constants": [],
                    "variables": [
                      "ZhanYinCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
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
                "value1": "ZhanYinCount",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (ZhanYinCount) || RETURN",
                    "displayLines": "ZhanYinCount",
                    "constants": [],
                    "variables": [
                      "ZhanYinCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "bar#": 3,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (ZhanYinCount) || RETURN",
                    "displayLines": "ZhanYinCount",
                    "constants": [],
                    "variables": [
                      "ZhanYinCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
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
      "for": "Hanya_Passive_AddDamage[<span class=\"descriptionNumberColor\">Sanction</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUp2) || RETURN",
                "displayLines": "MDF_DamageUp2",
                "constants": [],
                "variables": [
                  "MDF_DamageUp2"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUp2</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Sanction"
    },
    {
      "name": "Modifier Construction",
      "for": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "maxTargets": 10,
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AttackCount",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
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
              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "WHanya_BpZhanYin_Self"
                }
              ]
            }
          ]
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
                    "name": "Trace Activated",
                    "conditionList": "Netherworld"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ZhanYinCount_01",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_RecoverCount) || RETURN",
                      "displayLines": "MDF_RecoverCount",
                      "constants": [],
                      "variables": [
                        "MDF_RecoverCount"
                      ]
                    },
                    "contextScope": "ContextCaster"
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
                  "modifier": "WHanya_BPRecover",
                  "valuePerStack": {
                    "MDF_RecoverValue": {
                      "operator": "Variables[0] (MDF_BPRecover) || RETURN",
                      "displayLines": "MDF_BPRecover",
                      "constants": [],
                      "variables": [
                        "MDF_BPRecover"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "WHanya_BpZhanYin_Self"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
                    "team": "TeamLight"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Sub-Targets}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
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
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                ]
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Hanya_Passive_AddDamage[<span class=\"descriptionNumberColor\">Sanction</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_Lifetime) || RETURN",
                        "displayLines": "MDF_Lifetime",
                        "constants": [],
                        "variables": [
                          "MDF_Lifetime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageUp2": {
                          "operator": "Variables[0] (MDF_DamageUp) || Variables[1] (MDF_DamageUpExtra) || ADD || RETURN",
                          "displayLines": "(MDF_DamageUp + MDF_DamageUpExtra)",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUp",
                            "MDF_DamageUpExtra"
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
                      "modifier": "Hanya_Passive_AddDamage[<span class=\"descriptionNumberColor\">Sanction</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_Lifetime) || RETURN",
                        "displayLines": "MDF_Lifetime",
                        "constants": [],
                        "variables": [
                          "MDF_Lifetime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageUp2": {
                          "operator": "Variables[0] (MDF_DamageUp) || RETURN",
                          "displayLines": "MDF_DamageUp",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUp"
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
          "eventTrigger": "Ability Use [Anyone]: End",
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
                    "team": "TeamLight"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Sub-Targets}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
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
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackCount",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_AttackCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_AttackCount"
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
                    "value1": "MDF_AttackCount",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ZhanYinCount",
                      "value": {
                        "operator": "Variables[0] (ZhanYinCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(ZhanYinCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "ZhanYinCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ZhanYinCount_01",
                      "value": {
                        "operator": "Variables[0] (ZhanYinCount_01) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(ZhanYinCount_01 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "ZhanYinCount_01"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (ZhanYinCount) || RETURN",
                        "displayLines": "ZhanYinCount",
                        "constants": [],
                        "variables": [
                          "ZhanYinCount"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "WHanya_BPRecover",
                      "valuePerStack": {
                        "MDF_RecoverValue": 1
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Scrivener"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Hanya_PointB1[<span class=\"descriptionNumberColor\">Scrivener</span>]",
                          "duration": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
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
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Reanimated"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ZhanYinCount",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "WHanya_BpZhanYin_Self"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
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
          "eventTrigger": "Get Revived [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Unselectable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "WHanya_BpZhanYin_Self"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Lifetime",
        "MDF_DamageUp",
        "MDF_DamageUpExtra",
        "MDF_RecoverCount",
        "MDF_BPRecover"
      ],
      "latentQueue": [],
      "description": "For every 2 Basic Attacks, Skills, or Ultimates allies use on an enemy with Burden, recover 1 Skill Point.",
      "type": "Other",
      "effectName": "Burden",
      "statusName": "Burden"
    },
    {
      "name": "Modifier Construction",
      "for": "Hanya_Eidolon1_Other",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Rank01_Count",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "contextScope": "ContextCaster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Rank01_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Rank01_Count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_Rank01_Count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Rank01_Count"
                    ]
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Advance",
                  "value": "-0.15"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Rank01_Count",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "contextScope": "ContextCaster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Rank01_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Rank01_Count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_Rank01_Count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Rank01_Count"
                    ]
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Advance",
                  "value": "-0.15"
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
      "for": "WHanya_Ability03Bonus[<span class=\"descriptionNumberColor\">Edict</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_SpeedUp"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Ability03_P1_ATKRatio) || RETURN",
                "displayLines": "Ability03_P1_ATKRatio",
                "constants": [],
                "variables": [
                  "Ability03_P1_ATKRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AttackDelta",
              "value": {
                "operator": "Variables[0] (Ability03_P1_ATKRatio) || RETURN",
                "displayLines": "Ability03_P1_ATKRatio",
                "constants": [],
                "variables": [
                  "Ability03_P1_ATKRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Ability03_P3_Speed) || Variables[1] (MDF_Skill03_Speed) || MUL || RETURN",
                "displayLines": "(Ability03_P3_Speed * MDF_Skill03_Speed)",
                "constants": [],
                "variables": [
                  "Ability03_P3_Speed",
                  "MDF_Skill03_Speed"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Speed",
              "value": {
                "operator": "Variables[0] (Ability03_P3_Speed) || Variables[1] (MDF_Skill03_Speed) || MUL || RETURN",
                "displayLines": "(Ability03_P3_Speed * MDF_Skill03_Speed)",
                "constants": [],
                "variables": [
                  "Ability03_P3_Speed",
                  "MDF_Skill03_Speed"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "Skill03_P1_ATKRatio",
        "Skill03_P3_Speed",
        "MDF_Skill03_Speed"
      ],
      "latentQueue": [],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackDelta</span> and SPD by <span class=\"descriptionNumberColor\">MDF_Speed</span> points.",
      "type": "Buff",
      "effectName": "ATK & SPD Boost",
      "statusName": "Edict"
    },
    {
      "name": "Modifier Construction",
      "for": "WHanya_BPRecover",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (MDF_RecoverValue) || RETURN",
                "displayLines": "MDF_RecoverValue",
                "constants": [],
                "variables": [
                  "MDF_RecoverValue"
                ]
              },
              "adjustmentType": "+"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_RecoverValue"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}