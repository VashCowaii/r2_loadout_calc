const configAbility = {
  "fileName": "4015011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
                  "success": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Get Revived [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
                  "success": [
                    "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__196132555\">Enemy_W4_DawnsEye_01_MainStoryLockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.00010000006
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
              "valuePerStack": {
                "MDF_DeathSPAdd": {
                  "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                  "displayLines": "MDF_DeathSPAdd",
                  "constants": [],
                  "variables": [
                    "MDF_DeathSPAdd"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DeathSPAdd"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-633741031\">Enemy_W4_DawnsEye_01_HyacineStun</a>",
      "modifierFlags": [
        "STAT_CTRL_UnOperable"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__428140510\">Enemy_W4_DawnsEye_01_BESpeed</a>",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Speed) || RETURN",
                "displayLines": "MDF_Speed",
                "constants": [],
                "variables": [
                  "MDF_Speed"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Speed"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
      "modifierFlags": [
        "DisableAction",
        "STAT_CTRL_Shake",
        "STAT_CTRL",
        "AvatarBreak",
        "MuteSpeed",
        "AlwaysSuccess",
        "Stealth",
        "DisableHealHP",
        "STAT_ForceControl",
        "UnOperable",
        "STAT_CTRL_UnOperable",
        "RemoveWhenCasterDead"
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
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W4_DawnsEye_01"
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W4_DawnsEye_01"
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getBattleEvents]]"
              },
              "isLock": false
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
            },
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W4_DawnsEye_01",
              "state": false
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W4_DawnsEye_01",
              "state": false
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getBattleEvents]]"
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Add Target by Unique Identifier",
                "identifier": "HealBattleEvent"
              },
              "value": {
                "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                "displayLines": "MDF_DeathSPAdd",
                "constants": [],
                "variables": [
                  "MDF_DeathSPAdd"
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "eventTrigger": "Owner Changed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSourceCreator]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_W4_DawnsEye_01"
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "isLock": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DeathSPAdd"
      ],
      "latentQueue": [],
      "description": "Cannot be selected, cannot take action.",
      "type": "Debuff",
      "effectName": "Tide-Corrosion",
      "statusName": "Tide-Corrosion"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1645075522\">Modifier_Monster_W4_DawnsEye_01_BlockDirtyHP</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__27951832\">Modifier_Monster_W4_DawnsEye_01_HOT</a>[<span class=\"descriptionNumberColor\">Eagerness</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healFlat": {
                "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                "displayLines": "MDF_HPDelta",
                "constants": [],
                "variables": [
                  "MDF_HPDelta"
                ]
              },
              "formula": "Heal from Base Value"
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
                "operator": "Variables[0] (MDF_DamageAddRatio) || RETURN",
                "displayLines": "MDF_DamageAddRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageAddRatio"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Restores this unit's HP by <span class=\"descriptionNumberColor\">MDF_HPDelta</span> at the start of every turn, and increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span>.",
      "type": "Buff",
      "effectName": "Eagerness",
      "statusName": "Eagerness"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
      "stackType": "Multiple",
      "modifierFlags": [
        "CanBeAddedToServant"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                "displayLines": "MDF_HPDelta",
                "constants": [],
                "variables": [
                  "MDF_HPDelta"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
                "displayLines": "MDF_HealAddRatio",
                "constants": [],
                "variables": [
                  "MDF_HealAddRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "CanBeAddedToServant"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
                  "valuePerStack": {
                    "MDF_HPDelta": {
                      "operator": "Variables[0] (MDF_HPDeltaPerLayer) || RETURN",
                      "displayLines": "MDF_HPDeltaPerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_HPDeltaPerLayer"
                      ]
                    },
                    "MDF_HealAddRatio": {
                      "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
                      "displayLines": "MDF_HealAddRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HealAddRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HPDelta",
              "value": {
                "operator": "Variables[0] (MDF_HPDeltaPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_HPDeltaPerLayer * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_HPDeltaPerLayer",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_HPDelta</span>.",
      "type": "Buff",
      "effectName": "Flame-Chase",
      "statusName": "Flame-Chase"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__560024402\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddHalo</a>",
      "modifierFlags": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_HPDeltaPerLayer": {
              "operator": "Variables[0] (MDF_HPDelta) || RETURN",
              "displayLines": "MDF_HPDelta",
              "constants": [],
              "variables": [
                "MDF_HPDelta"
              ]
            },
            "MDF_HealAddRatio": {
              "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
              "displayLines": "MDF_HealAddRatio",
              "constants": [],
              "variables": [
                "MDF_HealAddRatio"
              ]
            },
            "MDF_Layer": {
              "operator": "Variables[0] (BattleEventHeal_HPDeltaLayer) || RETURN",
              "displayLines": "BattleEventHeal_HPDeltaLayer",
              "constants": [],
              "variables": [
                "BattleEventHeal_HPDeltaLayer"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1306101572\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokChange</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "=",
                "value2": 5
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
                  "valuePerStack": {
                    "MDF_DamageValue": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__157) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__157",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__157"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1053321581\">Modifier_Monster_W4_DawnsEye_01_WheaterMarkSpecial</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
                  "valuePerStack": {
                    "MDF_DamageValue": {
                      "operator": "Variables[0] ({[SkillP07[1]]}) || Variables[1] (BaseAttack) || MUL || RETURN",
                      "displayLines": "({[SkillP07[1]]} * BaseAttack)",
                      "constants": [],
                      "variables": [
                        "{[SkillP07[1]]}",
                        "BaseAttack"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>",
      "stackType": "Merge",
      "modifierFlags": [
        "CanBeAddedToServant",
        "RemoveWhenCasterDead"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DirtyHPDelta) || RETURN",
                "displayLines": "MDF_DirtyHPDelta",
                "constants": [],
                "variables": [
                  "MDF_DirtyHPDelta"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "CanBeAddedToServant",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageValueTotal",
              "value": {
                "operator": "Variables[0] (MDF_DamageValueTotal) || Variables[1] (MDF_DamageValue) || ADD || RETURN",
                "displayLines": "(MDF_DamageValueTotal + MDF_DamageValue)",
                "constants": [],
                "variables": [
                  "MDF_DamageValueTotal",
                  "MDF_DamageValue"
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
                "value1": "MDF_DamageValueTotal",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValueTotal",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_DamageRatio",
              "value": {
                "operator": "Variables[0] (MDF_DamageRatioAdd) || RETURN",
                "displayLines": "MDF_DamageRatioAdd",
                "constants": [],
                "variables": [
                  "MDF_DamageRatioAdd"
                ]
              },
              "max": 100
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageValueFinal",
              "value": {
                "operator": "Variables[0] (MDF_DamageValueTotal) || Variables[1] (MDF_DamageRatio) || MUL || RETURN",
                "displayLines": "(MDF_DamageValueTotal * MDF_DamageRatio)",
                "constants": [],
                "variables": [
                  "MDF_DamageValueTotal",
                  "MDF_DamageRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_DamageValueFinal",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageValueFinal) || Variables[1] (MDF_MaxHP) || DIV || RETURN",
                    "displayLines": "(MDF_DamageValueFinal / MDF_MaxHP)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageValueFinal",
                      "MDF_MaxHP"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": 0
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>",
              "valuePerStack": {
                "MDF_DirtyHPRatio": {
                  "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                  "displayLines": "MDF_CurrentDirtyHPRatio",
                  "constants": [],
                  "variables": [
                    "MDF_CurrentDirtyHPRatio"
                  ]
                },
                "MDF_DirtyHPDelta": {
                  "operator": "Variables[0] (MDF_DamageValueFinal) || RETURN",
                  "displayLines": "MDF_DamageValueFinal",
                  "constants": [],
                  "variables": [
                    "MDF_DamageValueFinal"
                  ]
                }
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
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Memosprite",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetSource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": 1
                },
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Constants[0] (0.000010000076) || RETURN",
                    "displayLines": "0.000010000076",
                    "constants": [
                      0.000010000076
                    ],
                    "variables": []
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"-1214340360\">Monster_W4_DawnsEye_LockHP</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                  "valuePerStack": {
                    "MDF_DeathSPAdd": {
                      "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                      "displayLines": "MDF_DeathSPAdd",
                      "constants": [],
                      "variables": [
                        "MDF_DeathSPAdd"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -50
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_DamageValue"
      ],
      "latentQueue": [],
      "description": "Maximum Restorable HP decreases by <span class=\"descriptionNumberColor\">MDF_DamageValueFinal</span>.",
      "type": "Debuff",
      "effectName": "Rot",
      "statusName": "Rot"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
              "valuePerStack": {
                "MDF_TotalDamageRatioAdd": {
                  "operator": "Variables[0] (MDF_TotalDamageRatioAdd) || RETURN",
                  "displayLines": "MDF_TotalDamageRatioAdd",
                  "constants": [],
                  "variables": [
                    "MDF_TotalDamageRatioAdd"
                  ]
                }
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
                  "valuePerStack": {
                    "MDF_TotalDamageRatioAdd": {
                      "operator": "Constants[0] (0) || Variables[0] (MDF_TotalDamageRatioCut) || SUB || RETURN",
                      "displayLines": "(0 - MDF_TotalDamageRatioCut)",
                      "constants": [
                        0
                      ],
                      "variables": [
                        "MDF_TotalDamageRatioCut"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_TotalDamageRatioAdd",
        "MDF_TotalDamageRatioCut"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1717270165\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamageMark</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__74735154\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamage</a>[<span class=\"descriptionNumberColor\">Skygash</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "team": "Enemy Team",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "team": "Enemy Team",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "TotalDamageRatio",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_TotalDamageRatio"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "Damage": {
                          "operator": "Variables[0] (MDF_TotalDamageRatio) || Variables[1] (MDF_DamagePercentage) || MUL || RETURN",
                          "displayLines": "(MDF_TotalDamageRatio * MDF_DamagePercentage)",
                          "constants": [],
                          "variables": [
                            "MDF_TotalDamageRatio",
                            "MDF_DamagePercentage"
                          ]
                        },
                        "cantKill": true,
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                }
              ]
            }
          ]
        }
      ],
      "description": "After targets attack, deals True DMG based on \"Black Tide Sync Rate.\" This DMG is \"Non-fatal.\"",
      "type": "Buff",
      "statusName": "Skygash"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_TotalDamageRatio",
              "value": {
                "operator": "Variables[0] (MDF_TotalDamageRatioAdd) || RETURN",
                "displayLines": "MDF_TotalDamageRatioAdd",
                "constants": [],
                "variables": [
                  "MDF_TotalDamageRatioAdd"
                ]
              },
              "min": {
                "operator": "Variables[0] (MDF_TotalDamageRatioMin) || RETURN",
                "displayLines": "MDF_TotalDamageRatioMin",
                "constants": [],
                "variables": [
                  "MDF_TotalDamageRatioMin"
                ]
              },
              "max": {
                "operator": "Variables[0] (MDF_TotalDamageRatioMax) || RETURN",
                "displayLines": "MDF_TotalDamageRatioMax",
                "constants": [],
                "variables": [
                  "MDF_TotalDamageRatioMax"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentDamage",
              "value": {
                "operator": "Variables[0] (MDF_BaseAttack) || Variables[1] (MDF_TotalDamageRatio) || MUL || RETURN",
                "displayLines": "(MDF_BaseAttack * MDF_TotalDamageRatio)",
                "constants": [],
                "variables": [
                  "MDF_BaseAttack",
                  "MDF_TotalDamageRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TotalDamageRatio",
              "value": {
                "operator": "Variables[0] (MDF_TotalDamageRatio) || RETURN",
                "displayLines": "MDF_TotalDamageRatio",
                "constants": [],
                "variables": [
                  "MDF_TotalDamageRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ChargePercentage",
              "value": {
                "operator": "Variables[0] (TotalDamageRatio) || Variables[1] (MDF_TotalDamageRatioMax) || DIV || RETURN",
                "displayLines": "(TotalDamageRatio / MDF_TotalDamageRatioMax)",
                "constants": [],
                "variables": [
                  "TotalDamageRatio",
                  "MDF_TotalDamageRatioMax"
                ]
              }
            },
            {
              "name": "Set Aquila UI Data"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4015021,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Hyacinthia, Eye of Twilight",
                "isBaseCompare": true
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_TotalDamageRatioAdd"
      ],
      "latentQueue": [
        "AIFlag"
      ],
      "description": "The current Charge ratio of \"Eye of Twilight\" is <span class=\"descriptionNumberColor\">MDF_ChargePercentage</span>.",
      "type": "Other",
      "statusName": "Black Tide Sync Rate"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Battle Event ID",
                    "ID": 20015,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Battle Event ID",
                    "ID": 60029,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
        "MDF_DamageValue"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[Remove Backup Memosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_RecoverRatioAttack": {
              "operator": "Variables[0] (MDF_DirtyHPBase) || RETURN",
              "displayLines": "MDF_DirtyHPBase",
              "constants": [],
              "variables": [
                "MDF_DirtyHPBase"
              ]
            },
            "MDF_BaseAttack": {
              "operator": "Variables[0] (MDF_BaseAttack) || RETURN",
              "displayLines": "MDF_BaseAttack",
              "constants": [],
              "variables": [
                "MDF_BaseAttack"
              ]
            },
            "MDF_DamageRatioAdd": 0,
            "MDF_DamageValueFinal": {
              "operator": "Variables[0] (MDF_DamageValueFinal) || RETURN",
              "displayLines": "MDF_DamageValueFinal",
              "constants": [],
              "variables": [
                "MDF_DamageValueFinal"
              ]
            },
            "MDF_DeathSPAdd": {
              "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
              "displayLines": "MDF_DeathSPAdd",
              "constants": [],
              "variables": [
                "MDF_DeathSPAdd"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"74735154\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamage</a>[<span class=\"descriptionNumberColor\">Skygash</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] ({[SkillP09[4]]}) || RETURN",
              "displayLines": "{[SkillP09[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[4]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Default"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase1"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1259657295\">Enemy_W4_DawnsEye_01_BreakController</a>",
      "modifierFlags": [
        "ForceHitH"
      ],
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPart"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPartP3"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "<",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (StanceDamage) || RETURN",
                    "displayLines": "StanceDamage",
                    "constants": [],
                    "variables": [
                      "StanceDamage"
                    ]
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "forceReduction": true,
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPart"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      "passed": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "{[SkillP10[4]]}"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>"
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Set",
              "multiAdd": "{[SkillP10[3]]}"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 3
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_BossPart"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>"
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPartRight"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "MonsterType_W4_BossPartLeft"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (StanceDamage) || RETURN",
                    "displayLines": "StanceDamage",
                    "constants": [],
                    "variables": [
                      "StanceDamage"
                    ]
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "forceReduction": true,
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "StanceDamage"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1480712068\">W4_DawnsEye_BattleScore3</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill04P3"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "TotalDamageRatio",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] ({[SkillP09[1]]}) || RETURN",
                      "displayLines": "{[SkillP09[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP09[1]]}"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isSkill04",
                  "value": 1
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isSkill04",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isTriggerDeath",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Divine Retribution from Up Above",
                      "desc": "When the Decimator, Karma of Daythunder, Eye of Twilight's \"Black Tide Sync Rate\" reaches the maximum, endure the attack of \"Unmaking Ashes: Godsfall\" with no ally character being knocked down",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isSkill04",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isTriggerDeath",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
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
                    "value1": "MDF_isSkill04",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isTriggerDeath",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1497489687\">W4_DawnsEye_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Battle for Dominion Over Lightning",
                  "desc": "In the battle against Sublime, Radiant, Avatar of the Sky, interrupt the enemy's \"Thunderclap, Quake of Mount and Seas\" by seizing all \"Thunderclouds\"",
                  "rarity": "Low"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1514267306\">W4_DawnsEye_BattleScore1</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Sunny_Temperature",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 999,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "MDF_TemperatureChangeDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_TemperatureChangeDelta",
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
                      "variableName": "MDF_TemperatureChangeTotal",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_TemperatureChangeDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_TemperatureChangeDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_TemperatureChangeDelta"
                        ]
                      },
                      "max": 999
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_TemperatureChangeTotal",
                        "compareType": ">=",
                        "value2": 30
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Rage Against the Dying Light",
                              "desc": "In the battle against Sublime, Radiant, Avatar of the Sky, lower \"Temperature\" by #1",
                              "rarity": "Low",
                              "params": [
                                30
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
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__357250261\">Enemy_W4_DawnsEye_Part02Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "Dawnseye_AllPhase",
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-484779713\">Enemy_W4_DawnsEye_Ability05_HitTag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__155112882\">Enemy_W4_DawnsEye_Ability02_EnhanceMessage</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-122136541\">Enemy_W4_DawnsEye_MainBlock</a>",
      "modifierFlags": [
        "STAT_AITargetLowerPriority",
        "MuteBreak"
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
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]",
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
                "name": "Enemy ID",
                "ID": 401501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W4_BossPartLeft"
                  }
                }
              ]
            },
            {
              "name": "Add to Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 401501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W4_BossPartLeft"
                  }
                }
              ]
            },
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ],
      "description": "Currently unselectable.",
      "type": "Other",
      "statusName": "Marine Layer"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W4_BossPartP3"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W4_BossPart"
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SunnyBreakColdFinal",
                      "value": {
                        "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                        "displayLines": "Sunny_Temperature",
                        "constants": [],
                        "variables": [
                          "Sunny_Temperature"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SunnyBreakColdFinal",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_SunnyBreakColdFinal) || Variables[2] (MDF_SunnyBreakColdRatio) || MUL || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_SunnyBreakColdFinal * MDF_SunnyBreakColdRatio))",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "MDF_SunnyBreakColdFinal",
                          "MDF_SunnyBreakColdRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_SunnyBreakColdFinal",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_SunnyBreakCold) || RETURN",
                          "displayLines": "MDF_SunnyBreakCold",
                          "constants": [],
                          "variables": [
                            "MDF_SunnyBreakCold"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakColdFinal) || SUB || RETURN",
                            "displayLines": "(0 - MDF_SunnyBreakColdFinal)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_SunnyBreakColdFinal"
                            ]
                          },
                          "max": 999
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakCold) || SUB || RETURN",
                            "displayLines": "(0 - MDF_SunnyBreakCold)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_SunnyBreakCold"
                            ]
                          },
                          "max": 999
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
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
                            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_CountTotal",
                          "value": {
                            "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
                            "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
                            "constants": [],
                            "variables": [
                              "Thunder_CountLight",
                              "Thunder_CountDark"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Thunder_CountLight",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
                                "displayLines": "{[SkillP02[4]]}",
                                "constants": [],
                                "variables": [
                                  "{[SkillP02[4]]}"
                                ]
                              },
                              "max": {
                                "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                                "displayLines": "MDF_CountTotal",
                                "constants": [],
                                "variables": [
                                  "MDF_CountTotal"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Thunder_CountDark",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Constants[0] (0) || Variables[0] ({[SkillP02[4]]}) || SUB || RETURN",
                                "displayLines": "(0 - {[SkillP02[4]]})",
                                "constants": [
                                  0
                                ],
                                "variables": [
                                  "{[SkillP02[4]]}"
                                ]
                              },
                              "max": {
                                "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                                "displayLines": "MDF_CountTotal",
                                "constants": [],
                                "variables": [
                                  "MDF_CountTotal"
                                ]
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Thunder_CountDark",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variableName": "MDF_BreakStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                    },
                                    {
                                      "name": "Trigger 0-Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      }
                                    },
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Trigger 0-Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Thunder_CountDark",
                                "compareType": ">=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "ThunderKillCount",
                                  "value": {
                                    "operator": "Variables[0] (ThunderKillCount) || Constants[0] (1) || ADD || RETURN",
                                    "displayLines": "(ThunderKillCount + 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "ThunderKillCount"
                                    ]
                                  }
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "conditionActive": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": "=",
                                        "value2": 2
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "ThunderKillCount",
                                        "compareType": ">=",
                                        "value2": 1
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "Thunder_CountDark",
                                        "compareType": ">=",
                                        "value2": 1
                                      }
                                    ]
                                  },
                                  "abilityName": "BattleEventAbility_W4_DawnsEye_RainKillSummon",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "priorityTag": "EnemyDeathEffect",
                                  "canHitNonTargets": true,
                                  "allowAbilityTriggers": false
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 401502,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "When receiving DMG, \"Decimator, Karma of Daythunder, Eye of Twilight\" loses equal amount of HP."
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
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "PartLoseHpValue"
                },
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Constants[0] (0) || Variables[0] (PartLoseHpValue) || SUB || RETURN",
                    "displayLines": "(0 - PartLoseHpValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "PartLoseHpValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Was Overhealed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "MonsterType_W4_BossSummon"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "PartHPOverflow"
                    },
                    {
                      "name": "Consume",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "sourceTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "flatConsume": {
                        "operator": "Constants[0] (0) || Variables[0] (PartHPOverflow) || SUB || RETURN",
                        "displayLines": "(0 - PartHPOverflow)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "PartHPOverflow"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
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
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPartP3"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPart"
                      }
                    ]
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SunnyBreakColdFinal",
                      "value": {
                        "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                        "displayLines": "Sunny_Temperature",
                        "constants": [],
                        "variables": [
                          "Sunny_Temperature"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SunnyBreakColdFinal",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_SunnyBreakColdFinal) || Variables[2] (MDF_SunnyBreakColdRatio) || MUL || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_SunnyBreakColdFinal * MDF_SunnyBreakColdRatio))",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "MDF_SunnyBreakColdFinal",
                          "MDF_SunnyBreakColdRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_SunnyBreakColdFinal",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_SunnyBreakCold) || RETURN",
                          "displayLines": "MDF_SunnyBreakCold",
                          "constants": [],
                          "variables": [
                            "MDF_SunnyBreakCold"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakColdFinal) || SUB || RETURN",
                            "displayLines": "(0 - MDF_SunnyBreakColdFinal)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_SunnyBreakColdFinal"
                            ]
                          },
                          "max": 999
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakCold) || SUB || RETURN",
                            "displayLines": "(0 - MDF_SunnyBreakCold)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_SunnyBreakCold"
                            ]
                          },
                          "max": 999
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
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
                            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_CountTotal",
                          "value": {
                            "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
                            "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
                            "constants": [],
                            "variables": [
                              "Thunder_CountLight",
                              "Thunder_CountDark"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Thunder_CountLight",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
                            "displayLines": "{[SkillP02[4]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP02[4]]}"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                            "displayLines": "MDF_CountTotal",
                            "constants": [],
                            "variables": [
                              "MDF_CountTotal"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Thunder_CountDark",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] ({[SkillP02[4]]}) || SUB || RETURN",
                            "displayLines": "(0 - {[SkillP02[4]]})",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "{[SkillP02[4]]}"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                            "displayLines": "MDF_CountTotal",
                            "constants": [],
                            "variables": [
                              "MDF_CountTotal"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Thunder_CountDark",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "MDF_BreakStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                },
                                {
                                  "name": "Trigger 0-Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  }
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Trigger 0-Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
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
      ],
      "stackData": [
        "MDF_SunnyBreakCold",
        "MDF_SunnyBreakColdRatio"
      ],
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ],
      "description": "When receiving DMG, \"Sublime, Radiant, Avatar of the Sky\" loses an equal amount of HP.",
      "type": "Other",
      "statusName": "All As One"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1514798128\">Enemy_W4_DawnsEye_SummonController</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "CountDown",
              "value": -1,
              "max": 100
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CountDown",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CountDown",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 2
                },
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-460192420\">Enemy_W4_DawnsEye_DamageTakenUp</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team",
                        "location": "Right"
                      }
                    ]
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
        "MDF_SunnyBreakCold"
      ],
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "MDF_ThunderDark"
      ],
      "latentQueue": [
        "WeatherPhase02Flag"
      ],
      "description": "Uses \"Wrath, Rend of Eternal Sky\" in the next action and additionally deals DMG based on the number of Thunderclouds possessed. Current Thundercloud(s): <span class=\"descriptionNumberColor\">MDF_ThunderDark</span>.",
      "type": "Buff",
      "statusName": "Ionization"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Thunder_CountLight",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Thunder_CountDark",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  }
                ]
              },
              "abilityName": "BattleEventAbility_W4_DawnsEye_RainChargeBreak",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "WeatherPhase02Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]"
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "MDF_Count",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CountTotal",
                  "value": {
                    "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
                    "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
                    "constants": [],
                    "variables": [
                      "Thunder_CountLight",
                      "Thunder_CountDark"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Thunder_CountLight",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                    "displayLines": "MDF_CountTotal",
                    "constants": [],
                    "variables": [
                      "MDF_CountTotal"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Thunder_CountDark",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_Count) || SUB || RETURN",
                    "displayLines": "(0 - MDF_Count)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                    "displayLines": "MDF_CountTotal",
                    "constants": [],
                    "variables": [
                      "MDF_CountTotal"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Thunder_CountDark",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_BreakStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        },
                        {
                          "name": "Trigger 0-Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Trigger 0-Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-961317684\">Enemy_W4_DawnsEye_SummonLimboMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1862939413\">Modifier_Monster_W4_DawnsEye_WheaterRainTriggerBreak</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                },
                {
                  "name": "Trigger 0-Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                }
              ],
              "failed": [
                {
                  "name": "Trigger 0-Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1412292158\">Modifier_Monster_W4_DawnsEye_WheaterRainDeathrattle</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.00010000006
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-961317684\">Enemy_W4_DawnsEye_SummonLimboMark</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
              },
              "passed": [
                {
                  "name": "Set Aquila UI Data"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]",
                  "valuePerStack": {
                    "MDF_ThunderDark": {
                      "operator": "Variables[0] (Thunder_CountDark) || RETURN",
                      "displayLines": "Thunder_CountDark",
                      "constants": [],
                      "variables": [
                        "Thunder_CountDark"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Set Aquila UI Data"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountDark",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        }
      ],
      "stackData": [
        "Weather_Thunder",
        "Weather_ThunderChange",
        "Weather_ThunderDamageLight",
        "Weather_ThunderDamageDark",
        "Weather_ThunderCount",
        "Weather_ThunderChance",
        "Weather_ThunderKillCount",
        "Weather_Skill05MaxCount"
      ],
      "latentQueue": [
        "AIFlag"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_Count",
                  "value": 1,
                  "max": 100
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Skill04P1SunnyHeat",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_Count) || Variables[1] (MDF_Skill04SunnyHeatColdDown) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_Count * MDF_Skill04SunnyHeatColdDown))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_Count",
                      "MDF_Skill04SunnyHeatColdDown"
                    ]
                  },
                  "min": {
                    "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
                    "displayLines": "{[Skill04P1[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04P1[3]]}"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                    "displayLines": "{[Skill04P1[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04P1[0]]}"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]",
                  "valuePerStack": {
                    "MDF_Ability04P1SunnyHeat": {
                      "operator": "Variables[0] (Skill04P1SunnyHeat) || RETURN",
                      "displayLines": "Skill04P1SunnyHeat",
                      "constants": [],
                      "variables": [
                        "Skill04P1SunnyHeat"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill04P1SunnyHeat",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
                      "displayLines": "{[Skill04P1[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04P1[3]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1201435172\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeatStatus</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]",
      "stackType": "Replace",
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
              "variableName": "Skill04P1SunnyHeat",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1201435172\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeatStatus</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_Skill04P1SunnyHeat"
      ],
      "latentQueue": [],
      "description": "Uses \"Fury, Incineration of Dawn and Dusk\" on all targets in the next action and increases the Temperature by <span class=\"descriptionNumberColor\">MDF_Skill04P1SunnyHeat</span>.",
      "type": "Buff",
      "statusName": "Helium Flash"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__299637479\">Modifier_Monster_W4_DawnsEye_WheaterSunnyChange</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
              "valuePerStack": {
                "Weather_SunnyChange": {
                  "operator": "Variables[0] (Weather_SunnyChange) || RETURN",
                  "displayLines": "Weather_SunnyChange",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyChange"
                  ]
                }
              },
              "casterAssign": "CasterSelf"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
      "stackType": "Replace",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "CanBeAddedToServant"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variable": "Sunny_Temperature",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "Weather_SunnyHeat"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Weather_SunnyHeat",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AllDamageTypeAddedRatioCurrent",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Variables[1] (Weather_SunnyHeat) || Variables[2] (Weather_SunnyHeatInitial) || SUB || Constants[0] (10) || ADD || MUL || RETURN",
                    "displayLines": "(MDF_AllDamageTypeAddedRatio * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10))",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "MDF_AllDamageTypeAddedRatio",
                      "Weather_SunnyHeat",
                      "Weather_SunnyHeatInitial"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AllDamageTypeAddedRatioCurrent",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Constants[0] (10) || MUL || RETURN",
                    "displayLines": "(MDF_AllDamageTypeAddedRatio * 10)",
                    "constants": [
                      10
                    ],
                    "variables": [
                      "MDF_AllDamageTypeAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_AllDamageTypeAddedRatioCurrent) || RETURN",
                  "displayLines": "MDF_AllDamageTypeAddedRatioCurrent",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTypeAddedRatioCurrent"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather_SunnyHeat",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                      "displayLines": "Weather_SunnyHeatInitial",
                      "constants": [],
                      "variables": [
                        "Weather_SunnyHeatInitial"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AllDamageTypeAddedRatioCurrent",
                      "value": {
                        "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Variables[1] (Weather_SunnyHeat) || Variables[2] (Weather_SunnyHeatInitial) || SUB || Constants[0] (10) || ADD || MUL || RETURN",
                        "displayLines": "(MDF_AllDamageTypeAddedRatio * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10))",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_AllDamageTypeAddedRatio",
                          "Weather_SunnyHeat",
                          "Weather_SunnyHeatInitial"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AllDamageTypeAddedRatioCurrent",
                      "value": {
                        "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Constants[0] (10) || MUL || RETURN",
                        "displayLines": "(MDF_AllDamageTypeAddedRatio * 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_AllDamageTypeAddedRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatioCurrent) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatioCurrent",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatioCurrent"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatioCurrent</span>.",
      "type": "Buff",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Burn",
        "CanBeAddedToServant"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_BaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variable": "Sunny_Temperature",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "Weather_SunnyHeat"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Weather_SunnyHeat",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Variables[1] (Weather_SunnyHeat) || Variables[2] (Weather_SunnyHeatInitial) || SUB || Constants[0] (10) || ADD || MUL || Variables[3] (MDF_BaseAttack) || MUL || RETURN",
                      "displayLines": "((Modifier_Burn_DamagePercentage * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10)) * MDF_BaseAttack)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "Modifier_Burn_DamagePercentage",
                        "Weather_SunnyHeat",
                        "Weather_SunnyHeatInitial",
                        "MDF_BaseAttack"
                      ]
                    },
                    "cantKill": true,
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Constants[0] (10) || MUL || Variables[1] (MDF_BaseAttack) || MUL || RETURN",
                      "displayLines": "((Modifier_Burn_DamagePercentage * 10) * MDF_BaseAttack)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "Modifier_Burn_DamagePercentage",
                        "MDF_BaseAttack"
                      ]
                    },
                    "cantKill": true,
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
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
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                }
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Sort by Monster Rank",
                        "byHighest": true
                      }
                    ]
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_BaseAttack",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variable": "Sunny_Temperature",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "Weather_SunnyHeat"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Weather_SunnyHeat",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Variables[1] (Weather_SunnyHeat) || Variables[2] (Weather_SunnyHeatInitial) || SUB || Constants[0] (10) || ADD || MUL || Variables[3] (MDF_BaseAttack) || MUL || RETURN",
                      "displayLines": "((Modifier_Burn_DamagePercentage * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10)) * MDF_BaseAttack)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "Modifier_Burn_DamagePercentage",
                        "Weather_SunnyHeat",
                        "Weather_SunnyHeatInitial",
                        "MDF_BaseAttack"
                      ]
                    },
                    "cantKill": true,
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Constants[0] (10) || MUL || Variables[1] (MDF_BaseAttack) || MUL || RETURN",
                      "displayLines": "((Modifier_Burn_DamagePercentage * 10) * MDF_BaseAttack)",
                      "constants": [
                        10
                      ],
                      "variables": [
                        "Modifier_Burn_DamagePercentage",
                        "MDF_BaseAttack"
                      ]
                    },
                    "cantKill": true,
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                }
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Sort by Monster Rank",
                        "byHighest": true
                      }
                    ]
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_BaseAttack",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Takes Fire DMG based on the current Temperature at the start of each turn.",
      "type": "Other",
      "effectName": "Solar Storm",
      "statusName": "Solar Storm"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
              },
              "passed": [
                {
                  "name": "Set Aquila UI Data"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Skill04P1SunnyHeat) || RETURN",
                    "displayLines": "Skill04P1SunnyHeat",
                    "constants": [],
                    "variables": [
                      "Skill04P1SunnyHeat"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                    "displayLines": "{[Skill04P1[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04P1[0]]}"
                    ]
                  },
                  "assignState": "True"
                }
              ],
              "failed": [
                {
                  "name": "Set Aquila UI Data"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Sunny_Temperature",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (Weather_SunnyHeatInitial) || Constants[0] (20) || ADD || RETURN",
                          "displayLines": "(Weather_SunnyHeatInitial + 20)",
                          "constants": [
                            20
                          ],
                          "variables": [
                            "Weather_SunnyHeatInitial"
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variable": "Sunny_Temperature",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "Weather_SunnyHeat"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Weather_SunnyHeat",
              "value": {
                "operator": "Variables[0] (Weather_SunnyHeat) || Variables[1] (Weather_HeatAddPerAction) || ADD || RETURN",
                "displayLines": "(Weather_SunnyHeat + Weather_HeatAddPerAction)",
                "constants": [],
                "variables": [
                  "Weather_SunnyHeat",
                  "Weather_HeatAddPerAction"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Sunny_Temperature",
              "value": {
                "operator": "Variables[0] (Weather_SunnyHeat) || RETURN",
                "displayLines": "Weather_SunnyHeat",
                "constants": [],
                "variables": [
                  "Weather_SunnyHeat"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
              "casterAssign": "TargetSelf"
            }
          ],
          "priorityLevel": -10
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1982815636\">Modifier_Monster_W4_DawnsEye_WheaterSunnyForLevel</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "Sunny_Temperature",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Sunny_Temperature"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Sunny_Temperature",
              "value": {
                "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                "displayLines": "Weather_SunnyHeatInitial",
                "constants": [],
                "variables": [
                  "Weather_SunnyHeatInitial"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
              "valuePerStack": {
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                }
              }
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
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Sunny_Temperature",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (Weather_HeatCountDown) || SUB || RETURN",
                    "displayLines": "(0 - Weather_HeatCountDown)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "Weather_HeatCountDown"
                    ]
                  },
                  "max": 999
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "Weather_SunnyHeatInitial",
        "Weather_HeatDamage",
        "Weather_HeatAddPerAction",
        "Weather_HeatCountDown",
        "Weather_AllDamageTypeAddedRatio"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(Exclude Netherwing)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] (Weather_HeatDamage) || RETURN",
              "displayLines": "Weather_HeatDamage",
              "constants": [],
              "variables": [
                "Weather_HeatDamage"
              ]
            },
            "Weather_SunnyHeat": {
              "operator": "Variables[0] (Sunny_Temperature) || RETURN",
              "displayLines": "Sunny_Temperature",
              "constants": [],
              "variables": [
                "Sunny_Temperature"
              ]
            },
            "Weather_SunnyHeatInitial": {
              "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
              "displayLines": "Weather_SunnyHeatInitial",
              "constants": [],
              "variables": [
                "Weather_SunnyHeatInitial"
              ]
            },
            "MDF_BaseAttack": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__163) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__163",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__163"
              ]
            },
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (Weather_AllDamageTypeAddedRatio) || RETURN",
              "displayLines": "Weather_AllDamageTypeAddedRatio",
              "constants": [],
              "variables": [
                "Weather_AllDamageTypeAddedRatio"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(Exclude Netherwing)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "Weather_SunnyHeat": {
              "operator": "Variables[0] (Sunny_Temperature) || RETURN",
              "displayLines": "Sunny_Temperature",
              "constants": [],
              "variables": [
                "Sunny_Temperature"
              ]
            },
            "Weather_SunnyHeatInitial": {
              "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
              "displayLines": "Weather_SunnyHeatInitial",
              "constants": [],
              "variables": [
                "Weather_SunnyHeatInitial"
              ]
            },
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (Weather_AllDamageTypeAddedRatio) || RETURN",
              "displayLines": "Weather_AllDamageTypeAddedRatio",
              "constants": [],
              "variables": [
                "Weather_AllDamageTypeAddedRatio"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Join Targets",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All}}"
              },
              {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Is Entity a Battle Event/Summon",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "invertCondition": true
                    }
                  }
                ]
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
          "haloStatus": true,
          "valuePerStack": {
            "Weather_HeatAddPerAction": {
              "operator": "Variables[0] (Weather_HeatAddPerAction) || RETURN",
              "displayLines": "Weather_HeatAddPerAction",
              "constants": [],
              "variables": [
                "Weather_HeatAddPerAction"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Sunny_Temperature",
              "value": {
                "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                "displayLines": "Weather_SunnyHeatInitial",
                "constants": [],
                "variables": [
                  "Weather_SunnyHeatInitial"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
              "valuePerStack": {
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                }
              }
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
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "Weather_SunnyChange"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "isDev",
            "compareType": "=",
            "value2": 0
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] (Weather_HeatDamage) || RETURN",
              "displayLines": "Weather_HeatDamage",
              "constants": [],
              "variables": [
                "Weather_HeatDamage"
              ]
            },
            "Weather_SunnyHeat": {
              "operator": "Variables[0] (Sunny_Temperature) || RETURN",
              "displayLines": "Sunny_Temperature",
              "constants": [],
              "variables": [
                "Sunny_Temperature"
              ]
            },
            "Weather_SunnyHeatInitial": {
              "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
              "displayLines": "Weather_SunnyHeatInitial",
              "constants": [],
              "variables": [
                "Weather_SunnyHeatInitial"
              ]
            },
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (Weather_AllDamageTypeAddedRatio) || RETURN",
              "displayLines": "Weather_AllDamageTypeAddedRatio",
              "constants": [],
              "variables": [
                "Weather_AllDamageTypeAddedRatio"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "Weather_SunnyHeat": {
              "operator": "Variables[0] (Sunny_Temperature) || RETURN",
              "displayLines": "Sunny_Temperature",
              "constants": [],
              "variables": [
                "Sunny_Temperature"
              ]
            },
            "Weather_SunnyHeatInitial": {
              "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
              "displayLines": "Weather_SunnyHeatInitial",
              "constants": [],
              "variables": [
                "Weather_SunnyHeatInitial"
              ]
            },
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (Weather_AllDamageTypeAddedRatio) || RETURN",
              "displayLines": "Weather_AllDamageTypeAddedRatio",
              "constants": [],
              "variables": [
                "Weather_AllDamageTypeAddedRatio"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Join Targets",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All}}"
              },
              {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Is Entity a Battle Event/Summon",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "invertCondition": true
                    }
                  }
                ]
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
          "haloStatus": true,
          "valuePerStack": {
            "Weather_HeatAddPerAction": {
              "operator": "Variables[0] (Weather_HeatAddPerAction) || RETURN",
              "displayLines": "Weather_HeatAddPerAction",
              "constants": [],
              "variables": [
                "Weather_HeatAddPerAction"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_Ability04SunnyHeatColdDown": {
              "operator": "Variables[0] (MDF_Skill04SunnyHeatColdDown) || RETURN",
              "displayLines": "MDF_Skill04SunnyHeatColdDown",
              "constants": [],
              "variables": [
                "MDF_Skill04SunnyHeatColdDown"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1803162686\">Enemy_W4_DawnsEye_SoundController</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle"
        },
        {
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "Enemy HP Phased",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-283400185\">Enemy_W4_DawnsEye_DisableLookAt</a>",
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Default"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase1"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-440353918\">Enemy_W4_DawnsEye_BreakController</a>",
      "modifierFlags": [
        "ForceHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPart"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPartP3"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "<=",
                    "value2": 3
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    },
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (StanceDamage) || RETURN",
                        "displayLines": "StanceDamage",
                        "constants": [],
                        "variables": [
                          "StanceDamage"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (StanceDamage) || RETURN",
                        "displayLines": "StanceDamage",
                        "constants": [],
                        "variables": [
                          "StanceDamage"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPartLeft"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "MonsterType_W4_BossPartP3"
                          },
                          {
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Enemy Team"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPartRight"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "MonsterType_W4_BossPartP3"
                          },
                          {
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Enemy Team",
                            "location": "Max"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
                }
              ]
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_BossPart"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    },
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (StanceDamage) || RETURN",
                        "displayLines": "StanceDamage",
                        "constants": [],
                        "variables": [
                          "StanceDamage"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (StanceDamage) || RETURN",
                        "displayLines": "StanceDamage",
                        "constants": [],
                        "variables": [
                          "StanceDamage"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "StanceDamage"
      ],
      "latentQueue": [
        "AIFlag",
        "PauseLevelForCameraPerform"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1987146522\">Enemy_W4_DawnsEye_PartController</a>",
      "counter": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ChangePhase_InsertController"
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1514267306\">W4_DawnsEye_BattleScore1</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "OR",
                          "conditionList": [
                            {
                              "name": "Enemy ID",
                              "ID": {
                                "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                                "displayLines": "PartEntity1_MonsterID",
                                "constants": [],
                                "variables": [
                                  "PartEntity1_MonsterID"
                                ]
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null
                            },
                            {
                              "name": "Enemy ID",
                              "ID": {
                                "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                                "displayLines": "PartEntity3_MonsterID",
                                "constants": [],
                                "variables": [
                                  "PartEntity3_MonsterID"
                                ]
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": {
                            "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                            "displayLines": "SummonedMonsterID",
                            "constants": [],
                            "variables": [
                              "SummonedMonsterID"
                            ]
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": null
                        }
                      }
                    ]
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ChangePhase_InsertController",
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
                      "variableName": "ChangePhase_InsertController",
                      "value": 1
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
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
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          }
                        },
                        {
                          "name": "Mark Entity For Immediate Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_DawnsEye_PassiveAbility_InsertMainStory",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_DawnsEye_PassiveAbility_Insert",
                          "priorityTag": "EnemyPhaseChange",
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
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    }
  ],
  "references": []
}