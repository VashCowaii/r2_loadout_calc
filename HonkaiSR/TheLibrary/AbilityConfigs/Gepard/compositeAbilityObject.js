const compositeAbilityObject = {
  "fullCharacterName": "Gepard",
  "trimCharacterName": "Gepard",
  "abilityList": [
    "Gepard_Gepard_Trace03",
    "Gepard_Gepard_Trace02",
    "Gepard_Gepard_Trace01",
    "Gepard_Gepard_TechniqueInLevel",
    "Gepard_Gepard_PassiveAbility_1_Insert",
    "Gepard_Gepard_PassiveAbility01",
    "Gepard_Gepard_Ability03_Part02",
    "Gepard_Gepard_Ability03_Part01",
    "Gepard_Gepard_Ability03_EnterReady",
    "Gepard_Gepard_Ability02_Part02",
    "Gepard_Gepard_Ability02_Part01",
    "Gepard_Gepard_Ability01_Part02",
    "Gepard_Gepard_Ability01_Part01",
    "Gepard_Modifiers"
  ],
  "abilityObject": {
    "Gepard_Gepard_Trace03": {
      "fileName": "Gepard_Gepard_Trace03",
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
          "modifier": "M_Gepard_AttackConvert",
          "valuePerStack": {
            "MDF_ConvertRatio": {
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
          "for": "M_Gepard_AttackConvert",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Avatar_Gepard_DefenceValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Avatar_Gepard_DefenceConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Gepard_Passive02_AttackDeltaUp",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (Avatar_Gepard_DefenceValue) || Variables[1] (Avatar_Gepard_DefenceConvert) || SUB || Variables[2] (MDF_ConvertRatio) || MUL || RETURN",
                      "displayLines": "((Avatar_Gepard_DefenceValue - Avatar_Gepard_DefenceConvert) * MDF_ConvertRatio)",
                      "constants": [],
                      "variables": [
                        "Avatar_Gepard_DefenceValue",
                        "Avatar_Gepard_DefenceConvert",
                        "MDF_ConvertRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Avatar_Gepard_DefenceValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Avatar_Gepard_DefenceConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Gepard_Passive02_AttackDeltaUp",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (Avatar_Gepard_DefenceValue) || Variables[1] (Avatar_Gepard_DefenceConvert) || SUB || Variables[2] (MDF_ConvertRatio) || MUL || RETURN",
                      "displayLines": "((Avatar_Gepard_DefenceValue - Avatar_Gepard_DefenceConvert) * MDF_ConvertRatio)",
                      "constants": [],
                      "variables": [
                        "Avatar_Gepard_DefenceValue",
                        "Avatar_Gepard_DefenceConvert",
                        "MDF_ConvertRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ConvertRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "Gepard_Gepard_Trace02": {
      "fileName": "Gepard_Gepard_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Gepard_Gepard_Trace01": {
      "fileName": "Gepard_Gepard_Trace01",
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
          "modifier": "M_Trace_AggroUp",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        }
      ],
      "references": []
    },
    "Gepard_Gepard_TechniqueInLevel": {
      "fileName": "Gepard_Gepard_TechniqueInLevel",
      "childAbilityList": [
        "Gepard_Gepard_TechniqueInLevel"
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
          "modifier": "Gepard_Maze_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Gepard_Maze_Modifier",
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
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Avatar_Gepard_BaseDefenceValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "Gepard_Ultimate_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
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
                        "MDF_ShowValue": {
                          "operator": "Variables[0] (Avatar_Gepard_BaseDefenceValue) || Variables[1] (0.24) || MUL || Variables[2] (150) || ADD || RETURN",
                          "displayLines": "((Avatar_Gepard_BaseDefenceValue * 0.24) + 150)",
                          "constants": [],
                          "variables": [
                            "Avatar_Gepard_BaseDefenceValue",
                            0.24,
                            150
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
    "Gepard_Gepard_PassiveAbility_1_Insert": {
      "fileName": "Gepard_Gepard_PassiveAbility_1_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Unyielding Will"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Gepard_MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setValue": {
            "operator": "Variables[0] (Gepard_MaxHPValue) || Variables[1] (0.5) || Variables[2] (0.5) || ADD || MUL || RETURN",
            "displayLines": "(Gepard_MaxHPValue * (0.5 + 0.5))",
            "constants": [],
            "variables": [
              "Gepard_MaxHPValue",
              0.5,
              0.5
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
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
                  "modifier": "Gepard_Eidolon6ActionDelay0",
                  "duration": 1,
                  "immediateEffect": true
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Commander"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_MaxSP) || RETURN",
                "displayLines": "MDF_MaxSP",
                "constants": [],
                "variables": [
                  "MDF_MaxSP"
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "name": "Define Modifier Variable",
          "modifierName": "Gepard_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Unyielding Will</span>]",
          "function": "Add"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": 1,
          "assignState": "True",
          "priorState": "Disable"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "_Gepard_00_PassiveSkill_InsertController"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Gepard_Eidolon6ActionDelay0",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "OneMore"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
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
    "Gepard_Gepard_PassiveAbility01": {
      "fileName": "Gepard_Gepard_PassiveAbility01",
      "childAbilityList": [
        "Gepard_Gepard_PassiveAbility01",
        "Gepard_Gepard_PassiveAbility_1_Insert"
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
          "modifier": "Gepard_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Unyielding Will</span>]"
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
              "variableName": "MDF_Rank01_P1_Chance",
              "value": {
                "operator": "Variables[0] (0.35) || RETURN",
                "displayLines": "0.35",
                "constants": [],
                "variables": [
                  0.35
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Gepard_Eidolon4"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Gepard_PassiveAbility_UnDead[<span class=\"descriptionNumberColor\">Unyielding Will</span>]",
          "counter": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "maximum": 1,
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_Gepard_00_PassiveSkill_InsertController"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Gepard_00_PassiveSkillSuccess"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Modifier_Gepard_00_Ratio",
                  "value": {
                    "operator": "Variables[0] (0.5) || RETURN",
                    "displayLines": "0.5",
                    "constants": [],
                    "variables": [
                      0.5
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_Gepard_00_PassiveSkill_InsertController",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Gepard_00_PassiveSkillSuccess",
                          "value": 1
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Gepard_PassiveAbility_1_Insert",
                          "priorityTag": "AvatarReviveSelf",
                          "ownerState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_Gepard_00_PassiveSkill_InsertController",
                          "value": 1
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
          "latentQueue": [],
          "description": "When struck with a killing blow, instead of becoming downed, Gepard immediately restores HP equal to <span class=\"descriptionNumberColor\">Modifier_Gepard_00_Ratio</span> of his Max HP.",
          "type": "Buff",
          "statusName": "Unyielding Will"
        },
        {
          "name": "Modifier Construction",
          "for": "Gepard_Eidolon4",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Gepard_Eidolon4_AddStatusResistance[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
                  "valuePerStack": {
                    "MDF_AddStatusResistance": {
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
                      "modifier": "Gepard_Eidolon4_AddStatusResistance[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
                      "valuePerStack": {
                        "MDF_AddStatusResistance": {
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
                  "modifier": "Gepard_Eidolon4_AddStatusResistance[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Gepard_Gepard_Ability03_Part02": {
      "fileName": "Gepard_Gepard_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Avatar_Gepard_DefenceValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "Gepard_Ultimate_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] (Avatar_Gepard_DefenceValue) || Variables[1] (0.45) || MUL || Variables[2] (600) || ADD || RETURN",
              "displayLines": "((Avatar_Gepard_DefenceValue * 0.45) + 600)",
              "constants": [],
              "variables": [
                "Avatar_Gepard_DefenceValue",
                0.45,
                600
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
      "references": []
    },
    "Gepard_Gepard_Ability03_Part01": {
      "fileName": "Gepard_Gepard_Ability03_Part01",
      "childAbilityList": [
        "Gepard_Gepard_Ability03_Camera",
        "Gepard_Gepard_Ability03_EnterReady",
        "Gepard_Gepard_Ability03_Part01",
        "Gepard_Gepard_Ability03_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Gepard_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Gepard_Gepard_Ability03_EnterReady": {
      "fileName": "Gepard_Gepard_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Gepard_Gepard_Ability02_Part02": {
      "fileName": "Gepard_Gepard_Ability02_Part02",
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
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (2) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "(2 * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (2) || Constants[0] (0.35) || MUL || RETURN",
              "displayLines": "(2 * 0.35)",
              "constants": [
                0.35
              ],
              "variables": [
                2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.35) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.35)",
              "constants": [
                0.35
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "35%"
          }
        },
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
              "operator": "Variables[0] (2) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(2 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (0.65) || Variables[1] (MDF_Rank01_P1_Chance) || ADD || RETURN",
            "displayLines": "(0.65 + MDF_Rank01_P1_Chance)",
            "constants": [],
            "variables": [
              0.65,
              "MDF_Rank01_P1_Chance"
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          },
          "success": [
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
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Gepard_Eidolon2_Delay",
                  "valuePerStack": {
                    "MDF_SPD": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_Lifetime": {
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
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Gepard_Gepard_Ability02_Part01": {
      "fileName": "Gepard_Gepard_Ability02_Part01",
      "childAbilityList": [
        "Gepard_Gepard_Ability02_Camera",
        "Gepard_Gepard_Ability02_Part01",
        "Gepard_Gepard_Ability02_Part02"
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Gepard_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Gepard_Gepard_Ability01_Part02": {
      "fileName": "Gepard_Gepard_Ability01_Part02",
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
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
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
              "operator": "Variables[0] (1) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Gepard_Gepard_Ability01_Part01": {
      "fileName": "Gepard_Gepard_Ability01_Part01",
      "childAbilityList": [
        "Gepard_Gepard_Ability01_Camera",
        "Gepard_Gepard_Ability01_Part01",
        "Gepard_Gepard_Ability01_Part02"
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
          "ability": "Gepard_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Gepard_Modifiers": {
      "fileName": "Gepard_Modifiers",
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
          "for": "Gepard_Eidolon4_AddStatusResistance[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AddStatusResistance) || RETURN",
                    "displayLines": "MDF_AddStatusResistance",
                    "constants": [],
                    "variables": [
                      "MDF_AddStatusResistance"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AddStatusResistance"
          ],
          "latentQueue": [],
          "description": "Effect RES +<span class=\"descriptionNumberColor\">MDF_AddStatusResistance</span>.",
          "type": "Buff",
          "statusName": "Effect RES Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Gepard_Eidolon2_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_SpeedDown"
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
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRaito) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyRaito)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyRaito"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD -<span class=\"descriptionNumberColor\">MDF_PropertyRaito</span>.",
          "type": "Debuff",
          "effectName": "Slow",
          "statusName": "Slow"
        },
        {
          "name": "Modifier Construction",
          "for": "Gepard_Eidolon2_Delay",
          "execute": [
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
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Gepard_Eidolon2_Delay"
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
                      "modifier": "Gepard_Eidolon2_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_Lifetime) || RETURN",
                        "displayLines": "MDF_Lifetime",
                        "constants": [],
                        "variables": [
                          "MDF_Lifetime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRaito": {
                          "operator": "Variables[0] (MDF_SPD) || RETURN",
                          "displayLines": "MDF_SPD",
                          "constants": [],
                          "variables": [
                            "MDF_SPD"
                          ]
                        }
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SPD",
            "MDF_Lifetime"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Gepard_Passive02_AttackDeltaUp",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Gepard_Ultimate_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Shield State/Value"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue) || RETURN",
                    "displayLines": "MDF_ShowValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShowValue"
          ],
          "latentQueue": [],
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield"
        }
      ],
      "references": []
    }
  }
}