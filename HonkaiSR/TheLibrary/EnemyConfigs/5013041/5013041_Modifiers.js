const configAbility = {
  "fileName": "5013041_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-488756959\">Enemy_W5_RangerGroup_SpecialWin</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.01
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0.01
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": [
                      "Break"
                    ],
                    "invertCondition": true
                  }
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_RangerGroup_SpecialWin",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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
      "for": "<a class=\"gModGreen\" id=\"mod__2082758660\">Enemy_W5_RangerGroup_MainEnd</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.5
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentRanger",
                "compareType": "=",
                "value2": 3
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_Ranger_Ability04_Part01_Main",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "priorityTag": "EnemyAttackFromSelf",
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1643569913\">Enemy_W5_Ranger_Main_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUp) || RETURN",
                "displayLines": "MDF_DamageUp",
                "constants": [],
                "variables": [
                  "MDF_DamageUp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUp"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUp</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-680453013\">Enemy_W5_Ranger_Main_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                "displayLines": "MDF_SpeedUp",
                "constants": [],
                "variables": [
                  "MDF_SpeedUp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedUp"
      ],
      "latentQueue": [],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedUp</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2046853963\">Enemy_W5_RangerGroup_Unselectable</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1422594911\">Enemy_W5_RangerGroup_PartController</a>",
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
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
                      "name": "Create Shared HP Group",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "isRemove": true,
                      "team": "Enemy Team"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_RangerGroup_PassiveAbility01_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.3
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
      "for": "<a class=\"gModGreen\" id=\"mod__2004703763\">Enemy_W5_RangerGroup_PassiveAbilityInitiate</a>",
      "modifierFlags": [
        "MuteSpeed",
        "ImmuneDebuff",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Override Enemy Rank",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              }
            },
            {
              "name": "Override Enemy Rank",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "revert": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": []
            },
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                    "displayLines": "SummonList_ADF_1",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_1"
                    ]
                  },
                  "locationType": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                    "displayLines": "SummonList_ADF_3",
                    "constants": [],
                    "variables": [
                      "SummonList_ADF_3"
                    ]
                  },
                  "locationType": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>"
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "stayInTeam": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1602736914\">W5_Ranger_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "And the Sun Rises",
                  "desc": "During combat against the Daybreak Squadron, hit them with a specific Type attack while they're in the \"Daybreak Forcefield\" state to trigger an immediate action",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-415333397\">Enemy_W5_Ranger_Debuff_Physical</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Physical RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
      "type": "Debuff",
      "effectName": "Disheartened",
      "statusName": "Disheartened"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-443896273\">Enemy_W5_Ranger_Debuff_Imaginary</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Imaginary RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
      "type": "Debuff",
      "effectName": "Disheartened",
      "statusName": "Disheartened"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1680582294\">Enemy_W5_Ranger_Debuff_Fire</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Fire RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
      "type": "Debuff",
      "effectName": "Disheartened",
      "statusName": "Disheartened"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-370236757\">Enemy_W5_Ranger_Debuff_Quantum</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Quantum RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
      "type": "Debuff",
      "effectName": "Disheartened",
      "statusName": "Disheartened"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-258343603\">Enemy_W5_Ranger_Debuff</a>",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentRanger) || RETURN",
                "displayLines": "CurrentRanger",
                "constants": [],
                "variables": [
                  "CurrentRanger"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDelta"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-370236757\">Enemy_W5_Ranger_Debuff_Quantum</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDelta"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1680582294\">Enemy_W5_Ranger_Debuff_Fire</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDelta"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-443896273\">Enemy_W5_Ranger_Debuff_Imaginary</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDelta"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-415333397\">Enemy_W5_Ranger_Debuff_Physical</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTypeTakenRatio",
        "MDF_ResistanceDelta"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-832135330\">Enemy_W5_Ranger_Shield_Physical</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
      "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Physical-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
      "type": "Buff",
      "effectName": "Daybreak Forcefield",
      "statusName": "Daybreak Forcefield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__304872220\">Enemy_W5_Ranger_Shield_Imaginary</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
      "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Imaginary-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
      "type": "Buff",
      "effectName": "Daybreak Forcefield",
      "statusName": "Daybreak Forcefield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1260475625\">Enemy_W5_Ranger_Shield_Fire</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
      "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Fire-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
      "type": "Buff",
      "effectName": "Daybreak Forcefield",
      "statusName": "Daybreak Forcefield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__743513856\">Enemy_W5_Ranger_Shield_Quantum</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
      "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Quantum attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
      "type": "Buff",
      "effectName": "Daybreak Forcefield",
      "statusName": "Daybreak Forcefield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1927239462\">Enemy_W5_Ranger_Shield</a>",
      "modifierFlags": [
        "MuteBreak",
        "Endurance"
      ],
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
              "revertDefault": true
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_isBeingAttacked",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isBeingAttacked",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CurrentChargeValue",
                  "value": {
                    "operator": "Variables[0] (MDF_HitCharge) || RETURN",
                    "displayLines": "MDF_HitCharge",
                    "constants": [],
                    "variables": [
                      "MDF_HitCharge"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                    "displayLines": "MDF_MaxCharge",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCharge"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCharge",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                    "displayLines": "MDF_CurrentCharge",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCharge"
                    ]
                  }
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurrentRanger) || RETURN",
                    "displayLines": "CurrentRanger",
                    "constants": [],
                    "variables": [
                      "CurrentRanger"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentChargeValue",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                      "displayLines": "MDF_MaxCharge",
                      "constants": [],
                      "variables": [
                        "MDF_MaxCharge"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 5
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
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
                            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                          },
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
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
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
                    "value1": "MDF_isBeingAttacked",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingAttackedSpecial",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT",
                              "Additional DMG"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Quantum"
                            ]
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT",
                              "Additional DMG"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Fire"
                            ]
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT",
                              "Additional DMG"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Imaginary"
                            ]
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 3
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT",
                              "Additional DMG"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Physical"
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isBeingAttackedSpecial",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1602736914\">W5_Ranger_BattleScore1</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
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
                            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                          },
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
                        }
                      ]
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
                    "value1": "CurrentChargeValue",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                      "displayLines": "MDF_MaxCharge",
                      "constants": [],
                      "variables": [
                        "MDF_MaxCharge"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 6
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
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
                            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                          },
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
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
              "name": "Define Custom Variable",
              "variableName": "CurrentChargeValue",
              "value": 0
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "AllType"
              ]
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentRanger) || RETURN",
                "displayLines": "CurrentRanger",
                "constants": [],
                "variables": [
                  "CurrentRanger"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"743513856\">Enemy_W5_Ranger_Shield_Quantum</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1260475625\">Enemy_W5_Ranger_Shield_Fire</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"304872220\">Enemy_W5_Ranger_Shield_Imaginary</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-832135330\">Enemy_W5_Ranger_Shield_Physical</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isBeingAttacked",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isBeingAttackedSpecial",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Quantum"
                            }
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Fire"
                            }
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Imaginary"
                            }
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 3
                          },
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Physical"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurrentRanger) || RETURN",
                    "displayLines": "CurrentRanger",
                    "constants": [],
                    "variables": [
                      "CurrentRanger"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "trigger": "SpEff_Trigger"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "trigger": "SpEff_Trigger"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "trigger": "SpEff_Trigger"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "trigger": "SpEff_Trigger"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxCharge",
        "MDF_HitCharge"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}