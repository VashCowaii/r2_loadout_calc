const configAbility = {
  "fileName": "1014014_Modifiers",
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
      "for": "Monster_W1_SvarogPart_RL_CountDown[<span class=\"descriptionNumberColor\">Overload Countdown</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
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
                "value1": "PartDecisionFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartDecisionFlag",
                  "value": 2
                }
              ]
            }
          ]
        }
      ],
      "description": "Auxiliary Robot Arm Unit initiates Overload countdown. After the countdown ends, cast Overload Warning.",
      "type": "Other",
      "statusName": "Overload Countdown",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_SvarogPart_RL_ListenBreak_Modifier",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CanUseSkill03"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase0"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Svarog_RL_Control_OnPart_Modifier",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Turn [Action-End Phase]"
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.33
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.5
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "Modifier_DamagePercentage"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Svarog_RL_ListenPlayerDie_Modifier",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target v2}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Svarog_RL_Endurance",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseChange"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            }
          ]
        },
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
      "for": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]",
      "modifierFlags": [
        "Stealth",
        "DisableHealHP",
        "AlwaysSuccess",
        "MuteSpeed",
        "STAT_ForceControl"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1310,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Firefly"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_Svarog_CTRL"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_W1_Svarog_RL_ListenPlayerDie_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Svarog_ListenPlayerAllDie_Modifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_Svarog_CTRL",
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": 0
              }
            },
            "Mark Entity as Non-Target(Unselectable)"
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": [],
      "description": "Restrained. Cannot take action.",
      "type": "Debuff",
      "effectName": "Restrain",
      "statusName": "Restrain"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Svarog_RL_PartController_LockHP",
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
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Endurance"
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_GS_Svarog_RL_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Endurance"
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_GS_Svarog_RL_PassiveAbility_Insert2",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
      "for": "Monster_W1_Svarog_RL_Part_ListenHP_Modifier",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Svarog's Confinement Target v2}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Svarog's Confinement Target v2}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (PassiveSkill02_P2_HPRatio) || RETURN",
                      "displayLines": "PassiveSkill02_P2_HPRatio",
                      "constants": [],
                      "variables": [
                        "PassiveSkill02_P2_HPRatio"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "value1": "SelfDestroy_Controller",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Svarog's Confinement Target v2}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CanUseSkill03",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartCanUseSkill03",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": -1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 2
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SelfDestroy_Controller",
                  "value": 1
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "PassiveSkill02_P2_HPRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Svarog_RL_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                "displayLines": "(0 - (MDF_DefenceAddedRatio_PerLayer * ModifierLayers))",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_DefenceAddedRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DefenceAddedRatio_PerLayer"
      ],
      "latentQueue": [],
      "description": "Reduces DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio_PerLayer</span>. This effect can stack.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "DEF Reduction",
      "duration": 3,
      "stackLimit": 10,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Control_OnPart_Modifier",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.33
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.5
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Ability07_AllDamageUp_Modifier[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">Modifier_AllDamageUp</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Amplification",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Part_ListenBreak_Modifier",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CanUseSkill03"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Part_OnTurnEndChangePhaseModifier",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase0"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_ListenPlayerDie_Modifier",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_Control_OnPart_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_Part_OnTurnEndChangePhaseModifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_Part_OnTurnEndChangePhaseModifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_Control_OnPart_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Ability06_Bonus",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
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
              "modifier": "W1_Mecha02_AttackBonus_Effect"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Part0_DamageReduceModifier",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__32) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__32",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__32"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_StanceLock",
              "value": {
                "operator": "Variables[0] (_StanceLock) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_StanceLock - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_StanceLock"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Kaboom_Modifier[<span class=\"descriptionNumberColor\">Overheat</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                "displayLines": "MDF_StanceBreakTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakTakenRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Received Toughness DMG increases by <span class=\"descriptionNumberColor\">MDF_StanceBreakTakenRatio</span>, and received damage increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
      "type": "Debuff",
      "effectName": "Overheat",
      "statusName": "Overheat"
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Part_ListenHP_Modifier",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Svarog_Control_OnPart_Modifier"
            }
          ]
        }
      ],
      "stackData": [
        "PassiveSkill02_P2_HPRatio",
        "PassiveSkill02_P3_StanceBreakTakenRatio",
        "PassiveSkill02_P4_MDF_AllDamageTypeTakenRatio",
        "PassiveSkill02_P5_LifeTime"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Ability06_Insert_Modifier",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W1_GS_Svarog_Insert_Part01",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Svarog_CTRL",
      "stackType": "Merge",
      "modifierFlags": [
        "DisableAction",
        "STAT_CTRL_Stun",
        "STAT_CTRL",
        "AlwaysSuccess",
        "STAT_ForceControl"
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
              "modifier": "Stun_Effect"
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
              "modifier": "Stun_Effect"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "living": true
              },
              "passed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "Broke Free From Restrain"
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": "=",
                "value2": 1,
                "valueType": "LifeTime"
              },
              "passed": [
                "Abort Modifier Phase Action"
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "Restrained"
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
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            }
          ]
        }
      ],
      "stackData": [
        "Modifier_Frozen_DamagePercentage"
      ],
      "latentQueue": [
        "CanUseSkill03",
        "PartCanUseSkill03"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Electric_Modifier[<span class=\"descriptionNumberColor\">Grievous</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Modifier_DamagePercentage) || RETURN",
                  "displayLines": "Modifier_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Modifier_DamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (Modifier_DefenceAddedRatio) || SUB || RETURN",
                "displayLines": "(0 - Modifier_DefenceAddedRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "Modifier_DefenceAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "For a certain number of turns, DEF is reduced by <span class=\"descriptionNumberColor\">Modifier_DefenceAddedRatio</span>, and takes Physical DMG at the beginning of each turn.",
      "type": "Debuff",
      "effectName": "Grievous",
      "statusName": "Grievous"
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]",
      "modifierFlags": [
        "Stealth",
        "DisableHealHP",
        "AlwaysSuccess",
        "MuteSpeed",
        "STAT_ForceControl"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1310,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Firefly"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_Svarog_CTRL"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Svarog_ListenPlayerDie_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Svarog_ListenPlayerAllDie_Modifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "CanUseSkill03",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartCanUseSkill03",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_Svarog_CTRL",
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": 0
              }
            },
            "Mark Entity as Non-Target(Unselectable)"
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": [],
      "description": "Restrained. Cannot take action.",
      "type": "Debuff",
      "effectName": "Restrain",
      "statusName": "Restrain"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_GS_Svarog_Level_SpecialWin",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_GS_Svarog_DisableAction",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": [
        "Svarog_SpecialVictory_Flag",
        "DecisionFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_SvarogPart_CD",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_SvarogPart_Overload[<span class=\"descriptionNumberColor\">Overload</span>]",
      "description": "Casts Controlled Blasting in the next action.",
      "type": "Other",
      "effectName": "Overload",
      "statusName": "Overload"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_SvarogPart_CountDown[<span class=\"descriptionNumberColor\">Overload Countdown</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
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
                "value1": "PartDecisionFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartDecisionFlag",
                  "value": 2
                }
              ]
            }
          ]
        }
      ],
      "description": "Auxiliary Robot Arm Unit initiates Overload countdown. After the countdown ends, cast Overload Warning.",
      "type": "Other",
      "statusName": "Overload Countdown",
      "duration": 2
    }
  ],
  "references": []
}