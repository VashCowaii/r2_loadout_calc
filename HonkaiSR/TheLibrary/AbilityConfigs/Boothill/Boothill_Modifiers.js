const configAbility = {
  "fileName": "Boothill_Modifiers",
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
      "for": "Boothill_Eidolon2_CD[<span class=\"descriptionNumberColor\">Milestonemonger</span>]",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "description": "Milestonemonger's effect cannot be triggered yet.",
      "type": "Other",
      "statusName": "Milestonemonger"
    },
    {
      "name": "Modifier Construction",
      "for": "Boothill_Eidolon2_Enhance[<span class=\"descriptionNumberColor\">Milestonemonger</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
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
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "statusName": "Milestonemonger"
    },
    {
      "name": "Modifier Construction",
      "for": "Boothill_SelfModification[<span class=\"descriptionNumberColor\">Pocket Trickshot</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextOwner",
              "variableName": "CurEnhance",
              "value": 0
            }
          ]
        },
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
              "variableName": "_layer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Boothill_DuelState[<span class=\"descriptionNumberColor\">Standoff</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Point Blank"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
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
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Boothill_Eidolon2_CD[<span class=\"descriptionNumberColor\">Milestonemonger</span>]",
                        "invertCondition": true
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
                      "modifier": "Boothill_Eidolon2_CD[<span class=\"descriptionNumberColor\">Milestonemonger</span>]"
                    },
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
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Boothill_Eidolon2_Enhance[<span class=\"descriptionNumberColor\">Milestonemonger</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
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
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextOwner",
              "variableName": "CurEnhance",
              "value": {
                "operator": "Variables[0] (_layer) || RETURN",
                "displayLines": "_layer",
                "constants": [],
                "variables": [
                  "_layer"
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
                "value1": "_layer",
                "compareType": "<",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxLayer",
        "MDF_StanceAdded",
        "MDF_GainFromPassive"
      ],
      "latentQueue": [
        "Avatar_1315_Enhance"
      ],
      "description": "Every stack increases the Toughness Reduction of the Enhanced Basic Attack by <span class=\"descriptionNumberColor\">MDF_StanceAdded</span>. If the target is Weakness Broken while the Enhanced Basic ATK is being used, deals additional Physical Break DMG based on the number of Pocket Trickshot stacks. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Other",
      "effectName": "Pocket Trickshot",
      "statusName": "Pocket Trickshot",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Boothill_Ultimate_PhysicalWeakness[<span class=\"descriptionNumberColor\">Extra Physical Weakness</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Physical"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Implanted with extra Physical Weakness.",
      "type": "Debuff",
      "effectName": "Implant Weakness: Physical",
      "statusName": "Extra Physical Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "M_Boothill_AutoWinDuelTag",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "stackLimit": 999,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "M_Boothill_EnemySpecialMark",
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
          "eventTrigger": "Active Ability Chosen [Anyone]",
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
                    "team": "Player Team"
                  }
                ]
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
      "for": "M_Boothill_DuelEndFollowingListener",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
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
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "team": "Enemy Team"
                        }
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
                      "modifier": "Boothill_SelfModification[<span class=\"descriptionNumberColor\">Pocket Trickshot</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "MDF_StanceAdded": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_GainFromPassive": 1
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Boothill_OnDuelEndCheck"
    },
    {
      "name": "Modifier Construction",
      "for": "Boothill_DuelTarget[<span class=\"descriptionNumberColor\">Standoff</span>]",
      "stackType": "ReplaceByCaster",
      "targetRestriction": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "targetRestrictionFor": "EnemySelect",
      "modifierFlags": [
        "Taunt",
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_Boothill_EnemySpecialMark"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_Win_Check"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_is_attacked_by_target",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_PropertyRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_Break_Check"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Boothill_DuelState[<span class=\"descriptionNumberColor\">Standoff</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_is_attacked_by_target",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_is_attacked_by_target",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_Break_Check"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_is_attacked_by_target",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_break_count",
              "context": "ContextModifier",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_Win_Check"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_Win_Check"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "M_Boothill_OnDuelEndCheck"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Duel_Break_Check"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Boothill_OnDuelEndCheck"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_Win_Check"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Duel_Win_Check",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Boothill_DuelState[<span class=\"descriptionNumberColor\">Standoff</span>]",
                "invertCondition": true
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Duel_Break_Check",
          "parse": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_break_count) || RETURN",
                "displayLines": "_break_count",
                "constants": [],
                "variables": [
                  "_break_count"
                ]
              },
              "Event": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "M_Boothill_AutoWinDuelTag",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_break_count",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "This is considered a Taunt state and only %CasterName can be selected as the attack target. Increases DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> when attacked by %CasterName.",
      "type": "Debuff",
      "effectName": "Standoff",
      "statusName": "Standoff"
    },
    {
      "name": "Modifier Construction",
      "for": "Boothill_DuelState[<span class=\"descriptionNumberColor\">Standoff</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Boothill_DuelTarget[<span class=\"descriptionNumberColor\">Standoff</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "M_Boothill_AutoWinDuelTag"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Boothill_AutoWinDuelTag"
                }
              ]
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
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_End_Check"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_is_attacked_by_target",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_PropertyRatio"
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
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Skill"
              ]
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
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "M_Boothill_AutoWinDuelTag"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Boothill_DuelTarget[<span class=\"descriptionNumberColor\">Standoff</span>]"
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_LimboOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Deathrattle"
                      }
                    ],
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Boothill_DuelTarget[<span class=\"descriptionNumberColor\">Standoff</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_is_attacked_by_target",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_is_attacked_by_target",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_is_attacked_by_target",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_End_Check"
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_End_Check"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_End_Check"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_End_Check"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_End_Check"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Duel_End_Check"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Duel_End_Check",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Boothill_DuelTarget[<span class=\"descriptionNumberColor\">Standoff</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "M_Boothill_OnDuelEndCheck"
                }
              ],
              "noTargetFound": [
                "Modifier Deletes Itself"
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
                "modifier": "M_Boothill_AutoWinDuelTag"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Boothill_DuelTarget[<span class=\"descriptionNumberColor\">Standoff</span>]"
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Living State",
                            "state": "Mask_LimboOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Deathrattle",
                            "invertCondition": true
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Boothill_DuelEndFollowingListener",
                      "duration": 1,
                      "silentAdd": true
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Boothill_DuelTarget[<span class=\"descriptionNumberColor\">Standoff</span>]"
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Living State",
                            "state": "Mask_LimboOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Deathrattle"
                          }
                        ],
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "When getting attacked by the target in the Standoff, increases the DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. The Basic ATK becomes Enhanced.",
      "type": "Other",
      "effectName": "Standoff",
      "statusName": "Standoff",
      "duration": 2
    }
  ],
  "references": []
}