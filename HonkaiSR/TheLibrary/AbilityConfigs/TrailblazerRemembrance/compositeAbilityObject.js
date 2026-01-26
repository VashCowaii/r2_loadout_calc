const compositeAbilityObject = {
  "fullCharacterName": "Trailblazer - Remembrance",
  "trimCharacterName": "TrailblazerRemembrance",
  "trimSummonName": "Mem",
  "abilityList": [
    "TrailblazerRemembrance_PlayerBoy_30_Eidolon4",
    "TrailblazerRemembrance_PlayerBoy_30_Eidolon2",
    "TrailblazerRemembrance_PlayerBoy_30_Trace01",
    "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel",
    "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge",
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_EnterReady",
    "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part01",
    "TrailblazerRemembrance_Modifiers",
    "TrailblazerRemembrance_Functions",
    "Mem_Servant_PlayerBoyServant_30_DeathRattle",
    "Mem_Servant_PlayerBoyServant_30_BattleCry",
    "Mem_Servant_PlayerBoyServant_30_PassiveAbility01",
    "Mem_Servant_PlayerBoyServant_30_Ability03_Part02",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part01",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Entry",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Together",
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part01",
    "Mem_Modifiers",
    "Mem_Functions"
  ],
  "abilityObject": {
    "TrailblazerRemembrance_PlayerBoy_30_Eidolon4": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Eidolon4",
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
          "modifier": "M_PlayerBoy_30_Eidolon4"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoy_30_Eidolon4",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}.[[getMemosprite]]"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{All Team Members with Unselectables}}.[[addMemoAndSummon]]"
                            },
                            "mustBeAlive2": true
                          },
                          {
                            "name": "Compare: Ability Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                            "compareType": "<=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}.[[getMemosprite]]"
                          },
                          "variableName": "CurEnergy",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Variables[0] (0.03) || Constants[0] (100) || MUL || RETURN",
                            "displayLines": "(0.03 * 100)",
                            "constants": [
                              100
                            ],
                            "variables": [
                              0.03
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TrailblazerRemembrance_PlayerBoy_30_Eidolon2": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Eidolon2",
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
          "modifier": "M_PlayerBoy_30_Eidolon2"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RetainCountZero"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "mInit_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (mInit_Count) || RETURN",
                    "displayLines": "mInit_Count",
                    "constants": [],
                    "variables": [
                      "mInit_Count"
                    ]
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (mInit_Count) || RETURN",
                    "displayLines": "mInit_Count",
                    "constants": [],
                    "variables": [
                      "mInit_Count"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "When ally memosprites (aside from Mem) take action, Trailblazer regenerates <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> Energy. This effect can trigger <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s).",
          "type": "Other",
          "statusName": "Gleaner of the Past"
        },
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoy_30_Eidolon2",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                  "counter": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (8) || RETURN",
                      "displayLines": "8",
                      "constants": [],
                      "variables": [
                        8
                      ]
                    },
                    "MDF_Count": {
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Memosprites}} - {{Caster}}.[[getMemosprite]]"
                        },
                        "mustBeAlive2": true
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
                        "name": "Compare: Variable",
                        "value1": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                        "compareType": ">",
                        "value2": 0
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
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                      "function": "Add"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                      "adjustmentType": "+",
                      "variableName": "MDF_Count",
                      "value": -1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Memosprites}} - {{Caster}}.[[getMemosprite]]"
                        },
                        "mustBeAlive2": true
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
                        "name": "Compare: Variable",
                        "value1": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                        "compareType": ">",
                        "value2": 0
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
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                      "function": "Add"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                      "adjustmentType": "+",
                      "variableName": "MDF_Count",
                      "value": -1
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
    "TrailblazerRemembrance_PlayerBoy_30_Trace01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Trace01",
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
          "modifier": "M_PlayerBoy_30_Trace01"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_PlayerBoy_30_Trace01_ListenFirstSummon"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoy_30_Trace01_ListenFirstSummon",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": "ServantID",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}.[[getMemosprite]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}.[[getMemosprite]]"
                      },
                      "variableName": "CurEnergy",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (0.4) || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "(0.4 * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          0.4
                        ]
                      }
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
          "for": "M_PlayerBoy_30_Trace01",
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "value": "(0 - 0.3)"
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
    "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel"
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
          "modifier": "PlayerBoy_30_Maze"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "PlayerBoy_30_Maze_Damage"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_30_Maze_Damage",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Technique Modifies Current Wave"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
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
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End"
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_30_Maze",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Technique Modifies Current Wave"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "advanceType": "Delay",
                      "value": "0.5"
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
    "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "PlayerBoy_30_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_PlayerBoy_30_CreateServantPreshow",
          "valuePerStack": {
            "ServantID": {
              "operator": "Variables[0] (ServantID) || RETURN",
              "displayLines": "ServantID",
              "constants": [],
              "variables": [
                "ServantID"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointSpecial1"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 8007,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Trailblazer - Remembrance[M]"
              },
              "passed": [
                {
                  "name": "Change Character UI"
                }
              ],
              "failed": [
                {
                  "name": "Change Character UI"
                }
              ]
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_30_Passive",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "compareType": "<=",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill02",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "False"
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "PlayerBoy_30_Halo_ListenSPChange"
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
                        "name": "Trace Activated",
                        "conditionList": "PointSpecial1"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "PlayerBoy_30_UltraState[<span class=\"descriptionNumberColor\">Epic</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "addStacksPerTrigger": 1
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
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "PlayerBoy_30_Halo_ListenSPChange"
                }
              ],
              "priorityLevel": -80
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "TeamAddSP",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TeamAddSP",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (10) || RETURN",
                          "displayLines": "10",
                          "constants": [],
                          "variables": [
                            10
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "_chargeEnergy",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Variables[1] (TeamAddSP) || Variables[2] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((TeamAddSP / 10))",
                            "constants": [],
                            "variables": [
                              "FLOOR",
                              "TeamAddSP",
                              10
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}.[[getMemosprite]]"
                          },
                          "variableName": "CurEnergy",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Variables[0] (_chargeEnergy) || RETURN",
                            "displayLines": "_chargeEnergy",
                            "constants": [],
                            "variables": [
                              "_chargeEnergy"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "TeamAddSP",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (_chargeEnergy) || Variables[1] (10) || MUL || SUB || RETURN",
                            "displayLines": "(0 - (_chargeEnergy * 10))",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "_chargeEnergy",
                              10
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "variableName": "CurEnergy",
          "context": "TargetEntity",
          "value": {
            "operator": "Variables[0] (0.4) || Constants[0] (100) || MUL || RETURN",
            "displayLines": "(0.4 * 100)",
            "constants": [
              100
            ],
            "variables": [
              0.4
            ]
          }
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
        }
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "PlayerBoy_30_TryCreateServant"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "scope": "TargetEntity",
          "variableName": "Ultra_Stance",
          "value": {
            "operator": "Variables[0] (AOE Toughness Value) || RETURN",
            "displayLines": "AOE Toughness Value",
            "constants": [],
            "variables": [
              "AOE Toughness Value"
            ]
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "ability": "Servant_PlayerBoyServant_30_Ability03_Part02",
          "isTrigger": true
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_Camera",
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_EnterReady",
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02",
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge"
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
          "ability": "PlayerBoy_30_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_EnterReady": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          },
          "EnergyGainPercent": "100%",
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "variableName": "CurEnergy",
          "context": "TargetEntity",
          "value": {
            "operator": "Variables[0] (0.1) || Constants[0] (100) || MUL || RETURN",
            "displayLines": "(0.1 * 100)",
            "constants": [
              100
            ],
            "variables": [
              0.1
            ]
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "PlayerBoy_30_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "PlayerBoy_30_TryCreateServant"
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
        {
          "name": "IF",
          "conditions": {
            "name": "Target Exists",
            "target": {
              "name": "Target Name",
              "target": "{{BattleEvent60021}}"
            },
            "living": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{BattleEvent60021}}"
              },
              "modifier": "MissionBattleEvent60021_TriggerBEAbility"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability02_Camera",
        "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "PlayerBoy_30_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02",
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
          "modifier": "PlayerBoy_30_UltraState[<span class=\"descriptionNumberColor\">Epic</span>]",
          "addStacksPerTrigger": -1,
          "silentAdd": true
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "toRemove": [
            "STAT_CTRL"
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
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (2) || DIV || RETURN",
              "displayLines": "(AOE Toughness Value / 2)",
              "constants": [
                2
              ],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Trigger: Attack End",
          "skipDeathSettle": true
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "variableName": "CurEnergy",
          "context": "TargetEntity",
          "value": {
            "operator": "Variables[0] (0.1) || Constants[0] (100) || MUL || RETURN",
            "displayLines": "(0.1 * 100)",
            "constants": [
              100
            ],
            "variables": [
              0.1
            ]
          }
        }
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability11_Camera",
        "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "scope": "TargetEntity",
          "variableName": "Skill11_Stance",
          "value": {
            "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (2) || DIV || RETURN",
            "displayLines": "(AOE Toughness Value / 2)",
            "constants": [
              2
            ],
            "variables": [
              "AOE Toughness Value"
            ]
          }
        },
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "PlayerBoy_30_Ability11_Part02"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Servant_PlayerBoyServant_30_Ability11_Together"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability01_Camera",
        "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part02"
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
          "ability": "PlayerBoy_30_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TrailblazerRemembrance_Modifiers": {
      "fileName": "TrailblazerRemembrance_Modifiers",
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
          "for": "PlayerBoy_30_UltraState_Sub",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                }
              ]
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "PlayerBoy_30_UltraState[<span class=\"descriptionNumberColor\">Epic</span>]",
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_30_UltraState[<span class=\"descriptionNumberColor\">Epic</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "compareType": ">",
                        "value2": 0,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "PlayerBoy_30_UltraState_Sub"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "PlayerBoy_30_UltraState_Sub"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "PlayerBoy_30_UltraState_Sub"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "PlayerBoy_30_UltraState_Sub"
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
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "PlayerBoy_30_UltraState_Sub"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "PlayerBoy_30_UltraState_Sub"
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Charm"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "PlayerBoy_30_UltraState_Sub"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "Charm",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "compareType": ">",
                        "value2": 0,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "PlayerBoy_30_UltraState_Sub"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When Mem is on the field, Basic ATK is enhanced to \"Together, We Script Tomorrow!\"",
          "type": "Other",
          "effectName": "Epic",
          "statusName": "Epic",
          "stackLimit": 2,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoy_30_CreateServantPreshow",
          "stackData": [
            "ServantID"
          ],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "entityType": "Servant",
            "skillType": [
              "Skill",
              "Ultimate"
            ],
            "conditions": {
              "name": "Compare: Target Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "compareType": "<=",
              "value2": 0,
              "livingTargets": true
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_30_Halo_ListenSPChange",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_spDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_spDelta",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "compareType": ">=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_tmpTeamAddSP",
                          "value": {
                            "operator": "Variables[0] (TeamAddSP) || RETURN",
                            "displayLines": "TeamAddSP",
                            "constants": [],
                            "variables": [
                              "TeamAddSP"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_tmpTeamAddSP",
                          "context": "ContextModifier",
                          "value": {
                            "operator": "Variables[0] (_spDelta) || RETURN",
                            "displayLines": "_spDelta",
                            "constants": [],
                            "variables": [
                              "_spDelta"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Clamp Configuration",
                          "context": "ContextModifier",
                          "ignoreBelow": 0.00010000006,
                          "variableName": "_tmpTeamAddSP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "TeamAddSP",
                          "value": {
                            "operator": "Variables[0] (_tmpTeamAddSP) || RETURN",
                            "displayLines": "_tmpTeamAddSP",
                            "constants": [],
                            "variables": [
                              "_tmpTeamAddSP"
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
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "TrailblazerRemembrance_Functions": {
      "fileName": "TrailblazerRemembrance_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "PlayerBoy_30_TryCreateServant",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Memosprite}}"
                },
                "compareType": "<=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TeamAddSP",
                  "value": 0
                },
                {
                  "name": "Summon Memosprite",
                  "memoID": {
                    "operator": "Variables[0] (ServantID) || RETURN",
                    "displayLines": "ServantID",
                    "constants": [],
                    "variables": [
                      "ServantID"
                    ]
                  },
                  "valuePerStack": {
                    "Ability03_P1_DamagePercentage": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    },
                    "Ability11_P2_DamagePercentage": {
                      "operator": "Variables[0] (1.2) || RETURN",
                      "displayLines": "1.2",
                      "constants": [],
                      "variables": [
                        1.2
                      ]
                    }
                  },
                  "afterSummon": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill21",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Mem_Servant_PlayerBoyServant_30_DeathRattle": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_DeathRattle",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_DeathRattle"
      ],
      "skillTrigger": "SkillP04",
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_PlayerBoyServant_30_DeathRattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_PlayerBoyServant_30_DeathRattle",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}.[[getSummoner]]"
                  },
                  "advanceType": "Set",
                  "value": "(0 - 0.25)"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Mem_Servant_PlayerBoyServant_30_BattleCry": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_BattleCry",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_BattleCry"
      ],
      "skillTrigger": "SkillP03",
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_PlayerBoyServant_30_BattleCry"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_PlayerBoyServant_30_BattleCry",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CurEnergy",
                  "value": {
                    "operator": "Variables[0] (0.5) || Constants[0] (100) || MUL || RETURN",
                    "displayLines": "(0.5 * 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      0.5
                    ]
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
    "Mem_Servant_PlayerBoyServant_30_PassiveAbility01": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_PassiveAbility01",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_PassiveAbility01",
        "Mem_Servant_PlayerBoyServant_30_Ability03_Part02",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Together"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_PlayerBoyServant_30_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_PlayerBoyServant_30_Passive_Performance"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "PlayerBoy_30_TeamSP[<span class=\"descriptionNumberColor\">Charge</span>]",
          "counter": {
            "operator": "Variables[0] (CurEnergy) || RETURN",
            "displayLines": "CurEnergy",
            "constants": [],
            "variables": [
              "CurEnergy"
            ]
          },
          "valuePerStack": {
            "MDF_Max": 1
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (CurEnergy) || RETURN",
            "displayLines": "CurEnergy",
            "constants": [],
            "variables": [
              "CurEnergy"
            ]
          },
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getSummoner]]"
          },
          "maximum": {
            "operator": "Variables[0] (MDF_Max) || RETURN",
            "displayLines": "MDF_Max",
            "constants": [],
            "variables": [
              "MDF_Max"
            ]
          },
          "assignState": "True",
          "bar#": "Progress"
        },
        {
          "name": "Force Target-Lock on Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "enable": true
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
              "modifier": "Memosprite_PlayerBoyServant_30_Eidolon1",
              "referenceModifier": "MReference_Empty"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoyServant_30_BreakFlag",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_PlayerBoyServant_30_Passive_Performance",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
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
                      "target": "{{Caster}}.[[getSummoner]]"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_PlayerBoyServant_30_BreakFlag"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "M_PlayerBoyServant_30_BreakFlag"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ],
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction"
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
          "for": "Memosprite_PlayerBoyServant_30_Passive",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}.[[getSummoner]]"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_Max) || RETURN",
                    "displayLines": "MDF_Max",
                    "constants": [],
                    "variables": [
                      "MDF_Max"
                    ]
                  },
                  "assignState": "False",
                  "bar#": "Progress"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurEnergy",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurEnergy",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_Max) || RETURN",
                          "displayLines": "MDF_Max",
                          "constants": [],
                          "variables": [
                            "MDF_Max"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CurEnergy",
                          "value": {
                            "operator": "Variables[0] (MDF_Max) || RETURN",
                            "displayLines": "MDF_Max",
                            "constants": [],
                            "variables": [
                              "MDF_Max"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurEnergy",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MDF_Max) || RETURN",
                          "displayLines": "MDF_Max",
                          "constants": [],
                          "variables": [
                            "MDF_Max"
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
                                "name": "Current Turn Is",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "M_PlayerBoyServant_30_EnableAbility",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            }
                          ]
                        },
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": 0
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "M_PlayerBoyServant_30_EnableAbility"
                        }
                      ]
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "PlayerBoy_30_TeamSP[<span class=\"descriptionNumberColor\">Charge</span>]",
                      "value": {
                        "operator": "Variables[0] (CurEnergy) || RETURN",
                        "displayLines": "CurEnergy",
                        "constants": [],
                        "variables": [
                          "CurEnergy"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurEnergy) || RETURN",
                        "displayLines": "CurEnergy",
                        "constants": [],
                        "variables": [
                          "CurEnergy"
                        ]
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}.[[getSummoner]]"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "Memosprite_PlayerBoyServant_30_CritDmgUp[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
                      "valuePerStack": {
                        "MDF_PropertyConvert": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        },
                        "MDF_PropertyBase": {
                          "operator": "Variables[0] (0.24) || RETURN",
                          "displayLines": "0.24",
                          "constants": [],
                          "variables": [
                            0.24
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
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "Memosprite_PlayerBoyServant_30_CritDmgUp[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyConvert": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                },
                "MDF_PropertyBase": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Mem_Servant_PlayerBoyServant_30_Ability03_Part02": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getSummoner]]"
          },
          "ability": "PlayerBoy_30_Ability03_Part02_Charge",
          "isTrigger": true
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
              "operator": "Variables[0] (Ability03_P1_DamagePercentage) || RETURN",
              "displayLines": "Ability03_P1_DamagePercentage",
              "constants": [],
              "variables": [
                "Ability03_P1_DamagePercentage"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Ultra_Stance) || RETURN",
              "displayLines": "Ultra_Stance",
              "constants": [],
              "variables": [
                "Ultra_Stance"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "instanceTag": "PlayerBoy_30_Ultra",
            "Tags": null,
            "attackType": "Ultimate"
          },
          "attackType": "Ultimate"
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling"
      ],
      "whenAdded": [
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
              "modifier": "M_PlayerBoyServant_30_Eidolon6"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoyServant_30_Eidolon6",
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
                        "name": "Attack Type",
                        "attackTypes": [
                          "Ultimate"
                        ]
                      },
                      {
                        "name": "Has DMG Instance Tag",
                        "tag": "PlayerBoy_30_Ultra"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateFIXED</span>&nbsp;",
                          "value": 1
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
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part02": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "CurEnergy",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_PlayerBoyServant_30_EnableAbility"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "advanceType": "Set",
              "value": "(0 - 1)"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            },
            "MDF_BasicDamagePercentage": {
              "operator": "Variables[0] (0.28) || RETURN",
              "displayLines": "0.28",
              "constants": [],
              "variables": [
                0.28
              ]
            },
            "MDF_PointB3_P1_Basic": {
              "operator": "Variables[0] (100) || RETURN",
              "displayLines": "100",
              "constants": [],
              "variables": [
                100
              ]
            },
            "MDF_PointB3_P2_Delta": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "MDF_PointB3_P3_Ratio": {
              "operator": "Variables[0] (0.02) || RETURN",
              "displayLines": "0.02",
              "constants": [],
              "variables": [
                0.02
              ]
            },
            "MDF_PointB3_P4_Max": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_Eidolon4_P2_ExtraDamagePercentage": {
              "operator": "Variables[0] (0.06) || RETURN",
              "displayLines": "0.06",
              "constants": [],
              "variables": [
                0.06
              ]
            }
          }
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
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_PlayerBoy_30_BE_Ability02_Preshow"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoy_30_BE_Ability02_Preshow",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Memosprite"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "M_PlayerBoyServant_30_EnableAbility"
                },
                {
                  "name": "Is Part Of",
                  "of": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "mustBeAlive2": true,
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (1) || SUB || RETURN",
                "displayLines": "(0 - 1)",
                "constants": [
                  0
                ],
                "variables": [
                  1
                ]
              }
            }
          }
        }
      ]
    },
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part01": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Part01",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_Ability11_Entry",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Entry_Camera",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Part01",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Camera"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Memosprite",
      "energy": 30,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_PlayerBoyServant_30_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        }
      ],
      "references": []
    },
    "Mem_Servant_PlayerBoyServant_30_Ability11_Entry": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Entry",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "SWITCH",
          "teamCountFrom": "Player Team",
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 7
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 8
            }
          ]
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Mem_Servant_PlayerBoyServant_30_Ability11_Together": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Together",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "operator": "Variables[0] (Ability11_P2_DamagePercentage) || RETURN",
              "displayLines": "Ability11_P2_DamagePercentage",
              "constants": [],
              "variables": [
                "Ability11_P2_DamagePercentage"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Skill11_Stance) || RETURN",
              "displayLines": "Skill11_Stance",
              "constants": [],
              "variables": [
                "Skill11_Stance"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          },
          "attackType": "Basic ATK"
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part02": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB2"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurEnergy",
              "value": {
                "operator": "Variables[0] (0.05) || Constants[0] (100) || MUL || RETURN",
                "displayLines": "(0.05 * 100)",
                "constants": [
                  100
                ],
                "variables": [
                  0.05
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_index",
          "value": 0
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "_index",
              "value": {
                "operator": "Variables[0] (_index) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(_index + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_index"
                ]
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target Group}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.36) || RETURN",
                      "displayLines": "0.36",
                      "constants": [],
                      "variables": [
                        0.36
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
                    "attackType": "Memosprite"
                  },
                  "attackType": "Memosprite"
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target Group}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
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
            "attackType": "Memosprite"
          },
          "attackType": "Memosprite"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part01": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability01_Part01",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_Ability01_Part01",
        "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
        "Mem_Servant_PlayerBoyServant_30_Ability01_Camera",
        "Mem_Servant_PlayerBoyServant_30_Ability01_Camera_Charm"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Memosprite",
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
          "ability": "Servant_PlayerBoyServant_30_Ability01_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Charm"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Mem_Modifiers": {
      "fileName": "Mem_Modifiers",
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
          "for": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Is_Copy",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]] | {{Modifier Holder}}.[[getSummoner]]"
                      },
                      "includeDyingTargets": true,
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]] | {{Modifier Holder}}.[[getSummoner]]"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy",
                      "referenceModifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                          "displayLines": "MDF_PropertyRatio",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyRatio"
                          ]
                        },
                        "MDF_BasicDamagePercentage": {
                          "operator": "Variables[0] (MDF_BasicDamagePercentage) || RETURN",
                          "displayLines": "MDF_BasicDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_BasicDamagePercentage"
                          ]
                        },
                        "MDF_PointB3_P1_Basic": {
                          "operator": "Variables[0] (MDF_PointB3_P1_Basic) || RETURN",
                          "displayLines": "MDF_PointB3_P1_Basic",
                          "constants": [],
                          "variables": [
                            "MDF_PointB3_P1_Basic"
                          ]
                        },
                        "MDF_PointB3_P2_Delta": {
                          "operator": "Variables[0] (MDF_PointB3_P2_Delta) || RETURN",
                          "displayLines": "MDF_PointB3_P2_Delta",
                          "constants": [],
                          "variables": [
                            "MDF_PointB3_P2_Delta"
                          ]
                        },
                        "MDF_PointB3_P3_Ratio": {
                          "operator": "Variables[0] (MDF_PointB3_P3_Ratio) || RETURN",
                          "displayLines": "MDF_PointB3_P3_Ratio",
                          "constants": [],
                          "variables": [
                            "MDF_PointB3_P3_Ratio"
                          ]
                        },
                        "MDF_PointB3_P4_Max": {
                          "operator": "Variables[0] (MDF_PointB3_P4_Max) || RETURN",
                          "displayLines": "MDF_PointB3_P4_Max",
                          "constants": [],
                          "variables": [
                            "MDF_PointB3_P4_Max"
                          ]
                        },
                        "MDF_Eidolon4_P2_ExtraDamagePercentage": {
                          "operator": "Variables[0] (MDF_Eidolon4_P2_ExtraDamagePercentage) || RETURN",
                          "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_Eidolon4_P2_ExtraDamagePercentage"
                          ]
                        },
                        "Is_Copy": 1
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Post-DMG Effect(like True DMG)",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_originalDamage",
                      "value": "Result_FinalDamageBase",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_originalDamage",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
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
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": {}
                            },
                            "Damage": {
                              "operator": "Variables[0] (MDF_DamagePercentage) || Variables[1] (_originalDamage) || MUL || RETURN",
                              "displayLines": "(MDF_DamagePercentage * _originalDamage)",
                              "constants": [],
                              "variables": [
                                "MDF_DamagePercentage",
                                "_originalDamage"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          },
                          "overrideDamageOwner": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "isConvertedDMG": true,
                          "dealAfterOriginialHit": true
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
                        "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy"
                    }
                  ]
                },
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy",
                  "modifierNameUpdate": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "CRIT Rate increases by #2[i]%. For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to #1[i]% of the original DMG."
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
                  "name": "Use Custom Character Function",
                  "functionName": "TServant_PlayerBoyServant_30_RefreshDamagePercentage"
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
                        "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]] | {{Modifier Holder}}.[[getSummoner]]"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "TServant_PlayerBoyServant_30_RefreshDamagePercentage"
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_PropertyRatio",
            "MDF_BasicDamagePercentage",
            "MDF_PointB3_P1_Basic",
            "MDF_PointB3_P2_Delta",
            "MDF_PointB3_P3_Ratio",
            "MDF_PointB3_P4_Max",
            "MDF_Rank04_P2_ExtraDamagePercentage"
          ],
          "latentQueue": [],
          "description": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_DamagePercentage</span> of the original DMG.",
          "type": "Buff",
          "effectName": "Mem's Support",
          "statusName": "Mem's Support",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]] | {{Modifier Holder}}.[[getSummoner]]"
              },
              "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy",
              "refModifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        },
                        "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      }
                    ],
                    "invertCondition": true
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getSummoner]]"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getSummoner]]"
                        },
                        "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      }
                    ],
                    "invertCondition": true
                  }
                ]
              },
              "duration": -1,
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                  "displayLines": "MDF_PropertyRatio",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyRatio"
                  ]
                },
                "MDF_BasicDamagePercentage": {
                  "operator": "Variables[0] (MDF_BasicDamagePercentage) || RETURN",
                  "displayLines": "MDF_BasicDamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_BasicDamagePercentage"
                  ]
                },
                "MDF_PointB3_P1_Basic": {
                  "operator": "Variables[0] (MDF_PointB3_P1_Basic) || RETURN",
                  "displayLines": "MDF_PointB3_P1_Basic",
                  "constants": [],
                  "variables": [
                    "MDF_PointB3_P1_Basic"
                  ]
                },
                "MDF_PointB3_P2_Delta": {
                  "operator": "Variables[0] (MDF_PointB3_P2_Delta) || RETURN",
                  "displayLines": "MDF_PointB3_P2_Delta",
                  "constants": [],
                  "variables": [
                    "MDF_PointB3_P2_Delta"
                  ]
                },
                "MDF_PointB3_P3_Ratio": {
                  "operator": "Variables[0] (MDF_PointB3_P3_Ratio) || RETURN",
                  "displayLines": "MDF_PointB3_P3_Ratio",
                  "constants": [],
                  "variables": [
                    "MDF_PointB3_P3_Ratio"
                  ]
                },
                "MDF_PointB3_P4_Max": {
                  "operator": "Variables[0] (MDF_PointB3_P4_Max) || RETURN",
                  "displayLines": "MDF_PointB3_P4_Max",
                  "constants": [],
                  "variables": [
                    "MDF_PointB3_P4_Max"
                  ]
                },
                "MDF_Eidolon4_P2_ExtraDamagePercentage": {
                  "operator": "Variables[0] (MDF_Eidolon4_P2_ExtraDamagePercentage) || RETURN",
                  "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_Eidolon4_P2_ExtraDamagePercentage"
                  ]
                },
                "Is_Copy": 1
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_PlayerBoyServant_30_CritDmgUp[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_propertyBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyRatio",
                  "value": {
                    "operator": "Variables[0] (_propertyBase) || Variables[1] (MDF_PropertyConvert) || MUL || Variables[2] (MDF_PropertyBase) || ADD || RETURN",
                    "displayLines": "((_propertyBase * MDF_PropertyConvert) + MDF_PropertyBase)",
                    "constants": [],
                    "variables": [
                      "_propertyBase",
                      "MDF_PropertyConvert",
                      "MDF_PropertyBase"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
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
          "stackData": [
            "MDF_PropertyConvert",
            "MDF_PropertyBase"
          ],
          "latentQueue": [],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "Friends! Together!"
        },
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoyServant_30_EnableAbility",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Extra-Turn"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Memosprite"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Force Auto-Battle on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "enable": true
                },
                {
                  "name": "Force Target-Lock on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "enable": true
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Memosprite"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Force Auto-Battle on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Force Target-Lock on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start "
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_30_TeamSP[<span class=\"descriptionNumberColor\">Charge</span>]",
          "modifierFlags": [
            "RetainCountZero"
          ],
          "stackData": [
            "MDF_Max"
          ],
          "latentQueue": [],
          "description": "When Charge reaches <span class=\"descriptionNumberColor\">MDF_Max</span>, Mem immediately takes action and can use \"Lemme! Help You!\".",
          "type": "Other",
          "statusName": "Charge"
        }
      ],
      "references": []
    },
    "Mem_Functions": {
      "fileName": "Mem_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "TServant_PlayerBoyServant_30_RefreshDamagePercentage",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamagePercentage",
              "value": {
                "operator": "Variables[0] (MDF_BasicDamagePercentage) || RETURN",
                "displayLines": "MDF_BasicDamagePercentage",
                "constants": [],
                "variables": [
                  "MDF_BasicDamagePercentage"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "PointB3"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_maxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_maxSP",
                  "value": {
                    "operator": "Variables[0] (MAX) || Constants[0] (0) || Variables[1] (FLOOR) || Variables[2] (_maxSP) || Variables[3] (MDF_PointB3_P1_Basic) || SUB || Variables[4] (MDF_PointB3_P2_Delta) || DIV || PARAM_1 || FUNCTION || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, &nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((_maxSP - MDF_PointB3_P1_Basic) / MDF_PointB3_P2_Delta)))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MAX",
                      "FLOOR",
                      "_maxSP",
                      "MDF_PointB3_P1_Basic",
                      "MDF_PointB3_P2_Delta"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DamagePercentage",
                  "context": "ContextModifier",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (_maxSP) || Variables[2] (MDF_PointB3_P3_Ratio) || MUL || Variables[3] (MDF_PointB3_P4_Max) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((_maxSP * MDF_PointB3_P3_Ratio), MDF_PointB3_P4_Max)",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "_maxSP",
                      "MDF_PointB3_P3_Ratio",
                      "MDF_PointB3_P4_Max"
                    ]
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DamagePercentage",
                      "context": "ContextModifier",
                      "value": {
                        "operator": "Variables[0] (MDF_Eidolon4_P2_ExtraDamagePercentage) || RETURN",
                        "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage",
                        "constants": [],
                        "variables": [
                          "MDF_Eidolon4_P2_ExtraDamagePercentage"
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
      "references": []
    }
  }
}