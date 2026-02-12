const configAbility = {
  "fileName": "4014033_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1292838645\">Modifier_Monster_W4_Pollux_B_HardLockHp</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": {
                "operator": "Variables[0] (MDF_LockHp) || RETURN",
                "displayLines": "MDF_LockHp",
                "constants": [],
                "variables": [
                  "MDF_LockHp"
                ]
              }
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
              "modifier": "<a class=\"gModGreen\" id=\"-460415799\">Modifier_StageSpecialAbility_MuteBreak</a>"
            },
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
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": -1,
                  "adjustmentType": "Advance"
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
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
                  "set": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_IsStoryTri",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 99
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
                    "name": "Skill Name",
                    "skillName": "Skill03"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1408,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Phainon"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1398737430\">Modifier_StageSpecialAbility_SoftRage</a>",
                  "valuePerStack": {
                    "MDF_DamageAddedRatio": {
                      "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                      "displayLines": "{[Skill01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[4]]}"
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
        "MDF_LockHp"
      ],
      "latentQueue": [
        "IsNeedFade",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1324293112\">Modifier_Monster_W4_Pollux_B_HardLockHp_BFAbility05</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": {
                "operator": "Variables[0] (MDF_LockHp) || RETURN",
                "displayLines": "MDF_LockHp",
                "constants": [],
                "variables": [
                  "MDF_LockHp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_LockHp"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1099423808\">W4_Pollux_BattleScore3</a>",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Castorice"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "characterName": "Castorice"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Resting in the Cocoon",
                      "desc": "Use ally character Castorice to deal the final blow against \"Pollux, Netherwing Husk, Ferry of Souls\"",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1116201427\">W4_Pollux_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": 0.5
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CheckAvatarHpRatio2",
                  "value": 1
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
                "value1": "_CheckAvatarHpRatio2",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Half-Life",
                      "desc": "Defeat \"Pollux, Netherwing Husk, Ferry of Souls\" while all ally characters' Max HP percentage is below #1%",
                      "rarity": "Low",
                      "params": [
                        50
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1132979046\">W4_Pollux_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill06"
                  },
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team(Exclude Memosprites)}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]"
                          }
                        }
                      ]
                    },
                    "compareType": "=",
                    "value2": 0,
                    "livingTargets": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "After Death... There Will Be No Eternal Sleep",
                      "desc": "When \"Pollux, Netherwing Husk, Ferry of Souls\" uses \"Death Wishes For More Death,\" no ally characters enter the \"Indulging Slumber\" state",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Pollux_SpecailAbility05",
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySkill05",
              "value": 1
            }
          ]
        },
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
              "name": "Lock HP",
              "threshold": 0.000010000076
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "StoryMode",
        "_StorySkill05"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT"
      ],
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
              "variableName": "_TargetMaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                  "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "MDF_DamagePercentage",
                    "_TargetCurrentHp",
                    "_TargetMaxHp",
                    "MDF_DamageHpAddedRatio"
                  ]
                },
                "cantKill": true,
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_TargetMaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                  "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "MDF_DamagePercentage",
                    "_TargetCurrentHp",
                    "_TargetMaxHp",
                    "MDF_DamageHpAddedRatio"
                  ]
                },
                "cantKill": true,
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_DamagePercentage",
        "MDF_DamageHpAddedRatio"
      ],
      "latentQueue": [],
      "description": "Receives DMG at the start of the turn. The higher the target's current HP percentage, the more DMG they receive. This DMG is \"Non-fatal.\"",
      "type": "Debuff",
      "effectName": "DoT",
      "statusName": "Hastened Death",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1688517080\">Enemy_W4_Pollux_Endurance</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-289587260\">Monster_W4_Pollux_StoryMode_LockHP</a>",
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
                "value1": "EndCheck",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "StunCheck",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "StunCheck02",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Minions}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Minions}}"
                  },
                  "silent": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "EndCheck"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Pollux_EndInsert_Part01",
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
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_StorySimulationSpeed",
        "AIFlag",
        "StoryMode"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-720682465\">Monster_W4_Pollux_PartController_LockHP</a>",
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
                "value1": "InsertCheck",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "StunCheck",
                    "compareType": "=",
                    "value2": 0
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
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
                  "abilityName": "Monster_W4_Pollux_PassiveAbility_Insert",
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
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_WorldLevel"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1861751766\">Monster_W4_Pollux_PartStrong</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__931855053\">Monster_W4_Pollux_Fatigue</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": "_FatigueRatio"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
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
              "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>"
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
              "variableName": "_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (_TargetCurrentHp) || Variables[1] (_TargetMaxHP) || DIV || Variables[2] (_HpLimitRatio) || DIV || SUB || Variables[3] (_FatigueRatio) || MUL || RETURN",
                "displayLines": "((1 - ((_TargetCurrentHp / _TargetMaxHP) / _HpLimitRatio)) * _FatigueRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp",
                  "_TargetMaxHP",
                  "_HpLimitRatio",
                  "_FatigueRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue2",
              "value": {
                "operator": "Variables[0] (_TargetMaxHP) || Variables[1] (_HpLimitRatio) || MUL || RETURN",
                "displayLines": "(_TargetMaxHP * _HpLimitRatio)",
                "constants": [],
                "variables": [
                  "_TargetMaxHP",
                  "_HpLimitRatio"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>",
              "valuePerStack": {
                "_FatigueRatio": {
                  "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                  "displayLines": "MDF_ShowValue1",
                  "constants": [],
                  "variables": [
                    "MDF_ShowValue1"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Variables[0] (MDF_ShowValue1) || Constants[0] (0.01) || ADD || RETURN",
                "displayLines": "(MDF_ShowValue1 + 0.01)",
                "constants": [
                  0.01
                ],
                "variables": [
                  "MDF_ShowValue1"
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
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (_HpLimitRatio) || RETURN",
                  "displayLines": "_HpLimitRatio",
                  "constants": [],
                  "variables": [
                    "_HpLimitRatio"
                  ]
                }
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (_HpLimitRatio) || RETURN",
                  "displayLines": "_HpLimitRatio",
                  "constants": [],
                  "variables": [
                    "_HpLimitRatio"
                  ]
                }
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (_TargetCurrentHp) || Variables[1] (_TargetMaxHP) || DIV || Variables[2] (_HpLimitRatio) || DIV || SUB || Variables[3] (_FatigueRatio) || MUL || RETURN",
                    "displayLines": "((1 - ((_TargetCurrentHp / _TargetMaxHP) / _HpLimitRatio)) * _FatigueRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_TargetCurrentHp",
                      "_TargetMaxHP",
                      "_HpLimitRatio",
                      "_FatigueRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue2",
                  "value": {
                    "operator": "Variables[0] (_TargetMaxHP) || Variables[1] (_HpLimitRatio) || MUL || RETURN",
                    "displayLines": "(_TargetMaxHP * _HpLimitRatio)",
                    "constants": [],
                    "variables": [
                      "_TargetMaxHP",
                      "_HpLimitRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>",
                  "valuePerStack": {
                    "_FatigueRatio": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || Constants[0] (0.01) || ADD || RETURN",
                    "displayLines": "(MDF_ShowValue1 + 0.01)",
                    "constants": [
                      0.01
                    ],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "_HpLimitRatio",
        "_FatigueRatio"
      ],
      "latentQueue": [
        "AIFlag",
        "_WorldLevel"
      ],
      "description": "When this target deals DMG to enemy targets, decreases DMG received by enemy targets by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. Restore HP to an ally target until it reaches <span class=\"descriptionNumberColor\">MDF_ShowValue2</span> to dispel this effect.",
      "type": "Other",
      "effectName": "DMG Reduction",
      "statusName": "Indulging Slumber"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Endurance"
      ],
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
                "value1": "_LifeCountTime",
                "compareType": "=",
                "value2": 3
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_LifeCountTime",
              "value": 1,
              "max": 3
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
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "-{[Skill04[0]]}"
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
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4014033,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Castorice, Hand of Shadow",
                    "isBaseCompare": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
                          }
                        }
                      ]
                    },
                    "compareType": "=",
                    "value2": 2,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "\"The Living Shan't Flee\" enhances to \"The Dead Shan't Avoid.\"",
      "type": "Other",
      "effectName": "Enhance",
      "statusName": "Overdue Obituary"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__276281376\">Monster_W4_Pollux_Main_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__891735658\">Monster_W4_Pollux_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": [
        "_WorldLevel"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-888665654\">Monster_W4_Pollux_Strengthen_Break</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "StunCheck",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Pollux_StunRecover_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_WorldLevel"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
      "stackType": "Replace",
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
                "value1": "MDF_CurrentShieldValue",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "StunCheck",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Pollux_Stun_Insert",
                  "priorityTag": "MonsterForceKill",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 1,
              "assignState": "False"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Anyone]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_AttackDamageData",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_AttackDamageData) || SUB || RETURN",
                    "displayLines": "(MDF_CurrentShieldValue - MDF_AttackDamageData)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentShieldValue",
                      "MDF_AttackDamageData"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastEnergyBarValue",
                  "value": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  }
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsAttack",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_LastEnergyBarValue_RLCheck",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEnergyBarValue_RL",
                      "value": {
                        "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                        "displayLines": "MDF_EnergyBarValue",
                        "constants": [],
                        "variables": [
                          "MDF_EnergyBarValue"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEnergyBarValue_RLCheck",
                      "value": 1
                    }
                  ]
                },
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
                        "value1": "MDF_CurrentShieldValue",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"23603986\">Modifier_StageSpecialAbility_10441065_OnPollux</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_EnergyBarValue",
                      "value": 0
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                        "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_LastEnergyBarValue_RL",
                          "MDF_EnergyBarValue",
                          "MDF_ShieldAttack_HealRatio"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_EnergyBarValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_MaxShieldValue) || DIV || RETURN",
                        "displayLines": "(MDF_CurrentShieldValue / MDF_MaxShieldValue)",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentShieldValue",
                          "MDF_MaxShieldValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_IsAttack",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue_RL",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                        "displayLines": "MDF_EnergyBarValue",
                        "constants": [],
                        "variables": [
                          "MDF_EnergyBarValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 1
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
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_SummonerMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_MaxShieldValue",
              "value": {
                "operator": "Variables[0] (MDF_SummonerMaxHP) || Variables[1] (MDF_ShieldPercentage) || MUL || RETURN",
                "displayLines": "(MDF_SummonerMaxHP * MDF_ShieldPercentage)",
                "constants": [],
                "variables": [
                  "MDF_SummonerMaxHP",
                  "MDF_ShieldPercentage"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CurrentShieldValue",
              "value": {
                "operator": "Variables[0] (MDF_MaxShieldValue) || RETURN",
                "displayLines": "MDF_MaxShieldValue",
                "constants": [],
                "variables": [
                  "MDF_MaxShieldValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EnergyBarValue",
              "value": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                "displayLines": "MDF_EnergyBarValue",
                "constants": [],
                "variables": [
                  "MDF_EnergyBarValue"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                "displayLines": "MDF_EnergyBarValue",
                "constants": [],
                "variables": [
                  "MDF_EnergyBarValue"
                ]
              },
              "assignState": "True",
              "state": "Active",
              "trigger": "SpEff_Trigger"
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
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
                  "name": "Define Custom Variable",
                  "variableName": "_IsAttack",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                  "name": "Define Custom Variable",
                  "variableName": "_IsAttack",
                  "value": 0
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_LastEnergyBarValue_RL",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                          "displayLines": "MDF_EnergyBarValue",
                          "constants": [],
                          "variables": [
                            "MDF_EnergyBarValue"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_LastEnergyBarValue_RLCheck",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (MDF_LastEnergyBarValue) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                        "displayLines": "((MDF_LastEnergyBarValue - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_LastEnergyBarValue",
                          "MDF_EnergyBarValue",
                          "MDF_ShieldAttack_HealRatio"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEnergyBarValue_RLCheck",
                      "value": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                "displayLines": "MDF_ShowValue1",
                "constants": [],
                "variables": [
                  "MDF_ShowValue1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
      "modifierFlags": [
        "MuteBreak",
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
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
            },
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance",
              "whitelistTagType": "Bit_Decrease"
            },
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
      ],
      "description": "Before \"Pollux\" takes their next action, their Toughness cannot be reduced and is immune to action delay effects inflicted by targets.",
      "type": "Other",
      "statusName": "Weakness Protected"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "assignState": "False"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 4014032,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_WorldLevel",
                    "compareType": "<",
                    "value2": 6
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
                  "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
                  "valuePerStack": {
                    "MDF_ShieldPercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_71) || RETURN",
                      "displayLines": "UnusedUnderThisBase_71",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_71"
                      ]
                    },
                    "MDF_ShieldAttack_HealRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_69) || RETURN",
                      "displayLines": "UnusedUnderThisBase_69",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_69"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
                  "valuePerStack": {
                    "MDF_ShieldPercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    },
                    "MDF_ShieldAttack_HealRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    }
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
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4014033,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Castorice, Hand of Shadow",
                    "isBaseCompare": true
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
                    "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
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
                    "value2": 100,
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
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 0
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_EnergyValue",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_EnergyValue) || RETURN",
                "displayLines": "_EnergyValue",
                "constants": [],
                "variables": [
                  "_EnergyValue"
                ]
              },
              "entityClass": "Enemy",
              "maximum": 1,
              "assignState": "True",
              "state": "Normal",
              "trigger": "SpEff_Trigger"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Variables[0] (MDF_ShowValue1) || Variables[1] (MDF_SpeedUpRatio) || ADD || RETURN",
                "displayLines": "(MDF_ShowValue1 + MDF_SpeedUpRatio)",
                "constants": [],
                "variables": [
                  "MDF_ShowValue1",
                  "MDF_SpeedUpRatio"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                  "displayLines": "MDF_ShowValue1",
                  "constants": [],
                  "variables": [
                    "MDF_ShowValue1"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageUpTemp",
              "value": {
                "operator": "Variables[0] (_DamageUpTemp) || Variables[1] (MDF_DamageUpRatio) || ADD || RETURN",
                "displayLines": "(_DamageUpTemp + MDF_DamageUpRatio)",
                "constants": [],
                "variables": [
                  "_DamageUpTemp",
                  "MDF_DamageUpRatio"
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
                "value1": "_DamageUpTemp",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                      "displayLines": "MDF_DamageUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio"
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
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014033,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Castorice, Hand of Shadow",
                "isBaseCompare": true
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span> at the end of each turn. Attacks against \"Castorice, Hand of Shadow\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\""
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        }
      ],
      "stackData": [
        "MDF_ShowValue1",
        "MDF_SpeedUpRatio"
      ],
      "latentQueue": [
        "AIFlag",
        "_WorldLevel"
      ],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. Attacks against \"Pollux\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\"",
      "type": "Other",
      "effectName": "Enhance",
      "statusName": "Fragrance of Death"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2086497725\">Monster_W4_Pollux_EnergyBar</a>",
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "StoryMode",
        "_StorySkill05"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]",
      "stackData": [],
      "latentQueue": [
        "_WorldLevel",
        "AIFlag"
      ],
      "description": "When ally targets' HP reduces, accumulates \"Desperate Bubble.\" When \"Desperate Bubble\" reaches the limit, this unit action advances and enters \"Fragrance of Death\" state in the next turn.",
      "type": "Other",
      "statusName": "Dream of Demise"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__599310144\">Monster_W4_Pollux_FX_Ground</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "IsNeedFade",
                "compareType": "=",
                "value2": 0
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
                "name": "Compare: Variable",
                "value1": "IsNeedFade",
                "compareType": "=",
                "value2": 0
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "StoryMode",
        "_StorySetSpeed",
        "_StorySimulationSpeed",
        "IsNeedFade",
        "AIFlag"
      ]
    }
  ],
  "references": []
}