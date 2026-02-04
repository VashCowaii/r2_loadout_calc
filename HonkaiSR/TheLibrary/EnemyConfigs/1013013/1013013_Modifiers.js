const configAbility = {
  "fileName": "1013013_Modifiers",
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
      "for": "Monster_W1_Mecha03_RL_AfterCharge",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ChargeUse",
                "compareType": "=",
                "value2": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill03"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ChargeUse",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_ChargeDecision",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Monster_W1_Mecha03_RL_Ability03_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
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
                  "modifier": "Monster_W1_Mecha03_RL_AfterCharge",
                  "valuePerStack": {
                    "MDF_RogueGoalID": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__33) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__33",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__33"
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
      "for": "Monster_W1_Mecha03_RL_Part03Effect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_Part02Effect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_Explode",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Deathrattle"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "SummonSequence",
        "TeammateSurvive"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_ChargeFlag",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha04_RL_PartController"
              },
              "ifTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase2ChargeFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_ChargeFlag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
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
      "for": "Monster_W1_Mecha03_RL_Ability03_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio_PerLayer"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_Revenge[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
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
                "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                "displayLines": "MDF_DamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio"
      ],
      "latentQueue": [],
      "description": "Increases DMG by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>. Every time this unit enters the Charging state, DMG is increased further.",
      "type": "Buff",
      "effectName": "Obliteration Order",
      "statusName": "Obliteration Order"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_BreakTarget"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_Support",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_BreakTarget"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_BreakTarget",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha04_RL_PartController"
              },
              "ifTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase2InsertFlag",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_Mecha04_RL_PassiveAbility_InsertCamera",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackOthers",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_Endurance",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_Stealth",
      "modifierFlags": [
        "Stealth",
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
      "modifierFlags": [
        "DisableHealHP"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "DormancyFlag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Stealth"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "OneMorePerTurn"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "OneMorePerTurn"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "DormancyFlag",
              "value": 0
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "InsertCheck",
              "value": 1
            },
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Stealth"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase0"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Stealth"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Stealth"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Toughness Reduction Resistance</span>&nbsp;",
              "value": 1
            }
          ]
        }
      ],
      "description": "Currently cannot take action.",
      "type": "Other",
      "statusName": "Firepower Recovery",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_Dormancy",
      "modifierFlags": [
        "DisableHealHP",
        "DisableAction",
        "MuteSpeed"
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
              "modifier": "Monster_W1_Mecha03_RL_Stealth"
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
              "modifier": "Monster_W1_Mecha03_RL_Stealth"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Toughness Reduction Resistance</span>&nbsp;",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RL_PartController",
      "execute": [
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W1_Mecha04_RL_PartController"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Monster_W1_Mecha04_RL_Dormancy",
                                "justAddedOrActive": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                "justAddedOrActive": true
                              }
                            ]
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
                                "value1": "InsertCheck",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Dispel Debuffs",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "silent": true
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "Monster_W1_Mecha03_RL_Endurance"
                                },
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "InsertCheck"
                                },
                                {
                                  "name": "Set Enemy Phase",
                                  "mode": "Inc"
                                },
                                {
                                  "name": "Set Enemy Phase",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "mode": "Inc"
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W1_Mecha03_RL_PassiveAbility_Insert",
                                  "priorityTag": "MonsterChangePhase",
                                  "ownerState": "Mask_AliveOrLimbo",
                                  "targetState": "Mask_AliveOrLimbo",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "allowAbilityTriggers": false
                                },
                                {
                                  "name": "Dispel Debuffs",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "silent": true
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "Monster_W1_Mecha04_RL_Endurance",
                                  "casterAssign": "TargetSelf"
                                },
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "InsertCheck"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "Mecha03_00_DamageUpPercentage",
                                  "value": {
                                    "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                    "displayLines": "{[Skill02[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill02[0]]}"
                                    ]
                                  }
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013012,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013014,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "Mecha03_00_DamageUpBasePercentage",
                                      "value": {
                                        "operator": "Variables[0] (UnusedUnderThisBase_48) || RETURN",
                                        "displayLines": "UnusedUnderThisBase_48",
                                        "constants": [],
                                        "variables": [
                                          "UnusedUnderThisBase_48"
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "InsertCheck",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Dispel Debuffs",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "silent": true
                                },
                                {
                                  "name": "Set HP Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "setValue": 1
                                },
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "InsertCheck"
                                },
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  }
                                },
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  }
                                },
                                {
                                  "name": "Lock HP",
                                  "threshold": 0.0009999999,
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  }
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013014,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": ">=",
                                        "value2": 2
                                      }
                                    ]
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
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": "=",
                                        "value2": 2
                                      },
                                      "passed": [
                                        {
                                          "name": "Action Advance/Delay",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "advanceType": "Set",
                                          "multiAdd": "UnusedUnderThisBase_53"
                                        },
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                          "duration": {
                                            "operator": "Variables[0] (UnusedUnderThisBase_52) || RETURN",
                                            "displayLines": "UnusedUnderThisBase_52",
                                            "constants": [],
                                            "variables": [
                                              "UnusedUnderThisBase_52"
                                            ]
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Action Advance/Delay",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "advanceType": "Set",
                                          "multiAdd": "UnusedUnderThisBase_51"
                                        },
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                          "duration": {
                                            "operator": "Variables[0] (UnusedUnderThisBase_50) || RETURN",
                                            "displayLines": "UnusedUnderThisBase_50",
                                            "constants": [],
                                            "variables": [
                                              "UnusedUnderThisBase_50"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "Monster_W1_Mecha03_RL_Dormancy"
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "Mecha03_00_DamageUpPercentage",
                                  "value": {
                                    "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                    "displayLines": "{[Skill02[0]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[Skill02[0]]}"
                                    ]
                                  }
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013012,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013014,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "Mecha03_00_DamageUpBasePercentage",
                                      "value": {
                                        "operator": "Variables[0] (UnusedUnderThisBase_48) || RETURN",
                                        "displayLines": "UnusedUnderThisBase_48",
                                        "constants": [],
                                        "variables": [
                                          "UnusedUnderThisBase_48"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "W1_Mecha02_AttackBonus_Effect"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Player Team All}}"
                                  },
                                  "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
                                  "onlyRemoveOwnersInstance": true
                                },
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "AIFlag",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 1013022,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Automaton Direwolf (Complete)"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W1_Mecha04_RL_Endurance",
                          "casterAssign": "TargetSelf"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Mecha04_RL_PassiveAbility_Insert2",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Minions}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Remove Modifier Behavior Flag(s)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "flagNames": []
                            },
                            {
                              "name": "Mark Entity For Immediate Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              }
                            },
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              }
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "modifier": "Monster_W1_Mecha03_RL_Explode"
                            }
                          ]
                        },
                        "Modifier Deletes Itself"
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          "searchRandom": true,
                          "includeDyingTargets": true,
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 1013024,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Automaton Direwolf (Complete)"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All(with Unselectable)}}"
                              },
                              "searchRandom": true,
                              "includeDyingTargets": true,
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Monster_W1_Mecha04_RL_PartController"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "OR",
                                        "conditionList": [
                                          {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "modifier": "Monster_W1_Mecha04_RL_Dormancy",
                                            "justAddedOrActive": true
                                          },
                                          {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                            "justAddedOrActive": true
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "HP_Bars_Remaining",
                                            "compareType": "=",
                                            "value2": 3
                                          },
                                          "passed": [
                                            {
                                              "name": "Mark Entity For Immediate Death",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              }
                                            },
                                            {
                                              "name": "Force Entity Death",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              }
                                            },
                                            "Modifier Deletes Itself"
                                          ],
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "value1": "InsertCheck",
                                                "compareType": "=",
                                                "value2": 1,
                                                "contextScope": "TargetEntity"
                                              },
                                              "passed": [
                                                {
                                                  "name": "Dispel Debuffs",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "silent": true
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha03_RL_Part02Effect"
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha03_RL_Part03Effect"
                                                },
                                                {
                                                  "name": "Add Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha03_RL_Endurance"
                                                },
                                                {
                                                  "name": "Declare Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "scope": "TargetEntity",
                                                  "variableName": "InsertCheck"
                                                },
                                                {
                                                  "name": "Set Enemy Phase",
                                                  "mode": "Inc"
                                                },
                                                {
                                                  "name": "Set Enemy Phase",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "mode": "Inc"
                                                },
                                                {
                                                  "name": "Inject Ability Use",
                                                  "abilityName": "Monster_W1_Mecha03_RL_PassiveAbility_Insert3",
                                                  "priorityTag": "MonsterChangePhase",
                                                  "ownerState": "Mask_AliveOrLimbo",
                                                  "targetState": "Mask_AliveOrLimbo",
                                                  "canHitNonTargets": true,
                                                  "showInActionOrder": true,
                                                  "allowAbilityTriggers": false
                                                },
                                                {
                                                  "name": "Dispel Debuffs",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "silent": true
                                                },
                                                {
                                                  "name": "Add Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha04_RL_Endurance",
                                                  "casterAssign": "TargetSelf"
                                                },
                                                {
                                                  "name": "Declare Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "scope": "TargetEntity",
                                                  "variableName": "InsertCheck"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "variableName": "Mecha03_00_DamageUpPercentage",
                                                  "value": {
                                                    "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                                    "displayLines": "{[Skill02[0]]}",
                                                    "constants": [],
                                                    "variables": [
                                                      "{[Skill02[0]]}"
                                                    ]
                                                  }
                                                },
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "OR",
                                                    "conditionList": [
                                                      {
                                                        "name": "Enemy ID",
                                                        "ID": 1013012,
                                                        "target": {
                                                          "name": "Target Name",
                                                          "target": "{{Caster}}"
                                                        },
                                                        "characterName": "Automaton Grizzly (Complete)"
                                                      },
                                                      {
                                                        "name": "Enemy ID",
                                                        "ID": 1013014,
                                                        "target": {
                                                          "name": "Target Name",
                                                          "target": "{{Caster}}"
                                                        },
                                                        "characterName": "Automaton Grizzly (Complete)"
                                                      }
                                                    ]
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "variableName": "Mecha03_00_DamageUpBasePercentage",
                                                      "value": {
                                                        "operator": "Variables[0] (UnusedUnderThisBase_48) || RETURN",
                                                        "displayLines": "UnusedUnderThisBase_48",
                                                        "constants": [],
                                                        "variables": [
                                                          "UnusedUnderThisBase_48"
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
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "value1": "InsertCheck",
                                            "compareType": "=",
                                            "value2": 1,
                                            "contextScope": "TargetEntity"
                                          },
                                          "passed": [
                                            {
                                              "name": "Dispel Debuffs",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "silent": true
                                            },
                                            {
                                              "name": "Set HP Value",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "setValue": 1
                                            },
                                            {
                                              "name": "Declare Custom Variable",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "scope": "TargetEntity",
                                              "variableName": "InsertCheck"
                                            },
                                            {
                                              "name": "Exit Broken-State",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              }
                                            },
                                            {
                                              "name": "Reset Toughness",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              }
                                            },
                                            {
                                              "name": "Lock HP",
                                              "threshold": 0.0009999999,
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              }
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "AND",
                                                "conditionList": [
                                                  {
                                                    "name": "Enemy ID",
                                                    "ID": 1013014,
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Modifier Holder}}"
                                                    },
                                                    "characterName": "Automaton Grizzly (Complete)"
                                                  },
                                                  {
                                                    "name": "Compare: Variable",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Modifier Holder}}"
                                                    },
                                                    "value1": "HP_Bars_Remaining",
                                                    "compareType": ">=",
                                                    "value2": 2
                                                  }
                                                ]
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
                                                    "value1": "HP_Bars_Remaining",
                                                    "compareType": "=",
                                                    "value2": 2
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Action Advance/Delay",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "advanceType": "Set",
                                                      "multiAdd": "UnusedUnderThisBase_53"
                                                    },
                                                    {
                                                      "name": "Add Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                                      "duration": {
                                                        "operator": "Variables[0] (UnusedUnderThisBase_52) || RETURN",
                                                        "displayLines": "UnusedUnderThisBase_52",
                                                        "constants": [],
                                                        "variables": [
                                                          "UnusedUnderThisBase_52"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Action Advance/Delay",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "advanceType": "Set",
                                                      "multiAdd": "UnusedUnderThisBase_51"
                                                    },
                                                    {
                                                      "name": "Add Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                                      "duration": {
                                                        "operator": "Variables[0] (UnusedUnderThisBase_50) || RETURN",
                                                        "displayLines": "UnusedUnderThisBase_50",
                                                        "constants": [],
                                                        "variables": [
                                                          "UnusedUnderThisBase_50"
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Add Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha03_RL_Dormancy"
                                                }
                                              ]
                                            },
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "Monster_W1_Mecha03_RL_Part02Effect"
                                            },
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "Monster_W1_Mecha03_RL_Part03Effect"
                                            },
                                            {
                                              "name": "Define Custom Variable",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Parameter Target}}"
                                              },
                                              "variableName": "Mecha03_00_DamageUpPercentage",
                                              "value": {
                                                "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                                "displayLines": "{[Skill02[0]]}",
                                                "constants": [],
                                                "variables": [
                                                  "{[Skill02[0]]}"
                                                ]
                                              }
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "OR",
                                                "conditionList": [
                                                  {
                                                    "name": "Enemy ID",
                                                    "ID": 1013012,
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Caster}}"
                                                    },
                                                    "characterName": "Automaton Grizzly (Complete)"
                                                  },
                                                  {
                                                    "name": "Enemy ID",
                                                    "ID": 1013014,
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Caster}}"
                                                    },
                                                    "characterName": "Automaton Grizzly (Complete)"
                                                  }
                                                ]
                                              },
                                              "passed": [
                                                {
                                                  "name": "Define Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "variableName": "Mecha03_00_DamageUpBasePercentage",
                                                  "value": {
                                                    "operator": "Variables[0] (UnusedUnderThisBase_48) || RETURN",
                                                    "displayLines": "UnusedUnderThisBase_48",
                                                    "constants": [],
                                                    "variables": [
                                                      "UnusedUnderThisBase_48"
                                                    ]
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                                            },
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "W1_Mecha02_AttackBonus_Effect"
                                            },
                                            {
                                              "name": "Remove Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Player Team All}}"
                                              },
                                              "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
                                              "onlyRemoveOwnersInstance": true
                                            },
                                            {
                                              "name": "Declare Custom Variable",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "scope": "TargetEntity",
                                              "variableName": "AIFlag",
                                              "value": 1
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All(with Unselectable)}}"
                              },
                              "searchRandom": true,
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Monster_W1_Mecha04_RL_PartController"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "TeammateSurvive"
                                }
                              ]
                            },
                            "Modifier Deletes Itself"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_RemoveOneMore",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
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
                  "modifier": "OneMorePerTurn"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "OneMorePerTurn"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "OneMorePerTurn"
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
}