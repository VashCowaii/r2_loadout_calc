const configAbility = {
  "fileName": "3014022_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1685076974\">Monster_W3_DeathPart_RLBoss_WeakPointProtected</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
      "modifierFlags": [
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
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"721704074\">Monster_W3_Death_Ability06_Charge_CharacterChangePhase</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Bullet_Flag"
      ],
      "description": "Toughness cannot be reduced before the Nightfall state ends.",
      "type": "Other",
      "statusName": "Weakness Protected"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__94854948\">Monster_W3_DeathPart_RLBoss_SetMaxHP</a>",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Owner_MaxHPCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 10,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Divide HP Bar into Segments",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "segCount": {
                    "operator": "Variables[0] (Owner_MaxHPCount) || RETURN",
                    "displayLines": "Owner_MaxHPCount",
                    "constants": [],
                    "variables": [
                      "Owner_MaxHPCount"
                    ]
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1476787547\">Monster_W3_DeathPart_ListenDie</a>",
                  "variableName": "MDF_ShowValue",
                  "value": {
                    "operator": "Variables[0] (Owner_MaxHPCount) || RETURN",
                    "displayLines": "Owner_MaxHPCount",
                    "constants": [],
                    "variables": [
                      "Owner_MaxHPCount"
                    ]
                  }
                },
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "casterFilter": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"785799791\">Monster_W3_DeathPart_PreShow_Attack</a>",
                  "execute": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                      "variableName": "MDF_ShowValue",
                      "value": {
                        "operator": "Variables[0] (Owner_MaxHPCount) || RETURN",
                        "displayLines": "Owner_MaxHPCount",
                        "constants": [],
                        "variables": [
                          "Owner_MaxHPCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "casterFilter": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1415744166\">Monster_W3_DeathPart_PreShow_Break</a>",
                  "execute": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                      "variableName": "MDF_ShowValue",
                      "value": {
                        "operator": "Variables[0] (Owner_MaxHPCount) || RETURN",
                        "displayLines": "Owner_MaxHPCount",
                        "constants": [],
                        "variables": [
                          "Owner_MaxHPCount"
                        ]
                      }
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2051878613\">Monster_W3_Death_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">Elegy</span>]",
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
        "MDF_DamageUpRatio_PerLayer",
        "MDF_DeathPartMaxHPCount",
        "MDF_DeathPartAddHPCount"
      ],
      "latentQueue": [],
      "description": "Deals <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span> more DMG and increases Sombrous Sepulcher's HP by <span class=\"descriptionNumberColor\">MDF_DeathPartAddHPCount</span> bar(s). This effect is stackable. The initial HP for Sombrous Sepulcher is currently <span class=\"descriptionNumberColor\">MDF_DeathPartMaxHPCount</span> bars.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Elegy",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__91362459\">Modifier_W3_Death_RLBoss_PartController_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "DeathPartMaxHPCount",
              "value": {
                "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                "displayLines": "{[Skill03[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[3]]}"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-314968673\">Enemy_W3_Death_Minions_Mark_PartChange</a>"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck"
                },
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Death_RLBoss_Part1T2",
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"163694883\">Modifier_W3_Death_ChargeShoot</a>[<span class=\"descriptionNumberColor\">Nightfall</span>]"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_Death_RLBoss_Part2T3",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DeathPart_AppearSkill_Flag",
        "Effect_Flag",
        "UsedSkill08_Flag",
        "Bullet_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-874770796\">W2_Death_BattleScore1</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
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
              "variableName": "Death_CharacterCount"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 4,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Death_CharacterCount",
                  "value": 1,
                  "max": 5
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
                "value1": "Death_CharacterCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Memento Mori",
                      "desc": "Defeat the Memory Zone meme \"Something Unto Death\" with only one character able to take action",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1087767431\">Enemy_W3_Deathpart_Appear</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "DeathPart_Appear_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "Monster_DeathPart",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DeathPart_Appear_Flag"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DeathPart_AppearSkill_Flag",
        "Effect_Flag",
        "UsedSkill08_Flag",
        "Bullet_Flag",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__721704074\">Monster_W3_Death_Ability06_Charge_CharacterChangePhase</a>",
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
              "phase": "PhaseCharge"
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
              "phase": "PhaseNormal"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "PhaseChargeBreak"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Bullet_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1728469043\">Death_UseAbility07_Modifier</a>",
      "stackData": [],
      "latentQueue": [
        "Skill07_EffectFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1176710437\">Monster_W3_Death_IsSummoner</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
                "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                "displayLines": "MDF_ShowValue1",
                "constants": [],
                "variables": [
                  "MDF_ShowValue1"
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
                    "name": "Skill Name",
                    "skillName": "Skill05"
                  },
                  {
                    "name": "Skill Name",
                    "skillName": "Skill07"
                  },
                  {
                    "name": "Skill Name",
                    "skillName": "Skill12"
                  }
                ]
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill05"
                  },
                  {
                    "name": "Skill Name",
                    "skillName": "Skill07"
                  },
                  {
                    "name": "Skill Name",
                    "skillName": "Skill12"
                  }
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_ShowValue1"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. This effect is removed when this unit becomes Weakness Broken.",
      "type": "Buff",
      "effectName": "Biting Obituary",
      "statusName": "Biting Obituary"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-9479983\">Monster_W3_Death_HasUseAbility</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__163694883\">Modifier_W3_Death_ChargeShoot</a>[<span class=\"descriptionNumberColor\">Nightfall</span>]",
      "stackType": "Refresh",
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
                "target": "{{All Unselectable Targets}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-9479983\">Monster_W3_Death_HasUseAbility</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Entity Death [Anyone]"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-9479983\">Monster_W3_Death_HasUseAbility</a>",
                    "invertCondition": true
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
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "Break"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Bullet_Flag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-9479983\">Monster_W3_Death_HasUseAbility</a>"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Bullet_Flag",
                      "context": "TargetEntity",
                      "value": -1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Bullet_Flag",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
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
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Locks on to the next 2 characters who either use their Basic ATK, Skill, or Ultimate.",
      "type": "Other",
      "effectName": "Nightfall",
      "statusName": "Nightfall"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2068180165\">Modifier_W3_Death_AbilityTypeDisable</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
                "Basic ATK",
                "Skill"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "stackType": "Multiple",
      "modifierFlags": [
        "TeamAction"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
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
                "Modifier Deletes Itself"
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
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Bullet_Flag"
      ],
      "description": "Locked On by \"Something Unto Death\" as an attack target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-466857338\">Monster_W3_Death_SummonerSpeed0</a>",
      "modifierFlags": [
        "MuteSpeed"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W3_Death_00"
            },
            {
              "name": "Lock Target AV",
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
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_W3_Death_00",
              "state": false
            },
            {
              "name": "Lock Target AV",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Event Owner Change",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>",
                "invertCondition": true
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]",
      "modifierFlags": [
        "AlwaysSuccess",
        "DisableAction",
        "STAT_CTRL",
        "Stealth",
        "DisableHealHP"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
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
              "modifier": "<a class=\"gModGreen\" id=\"488990783\">W3_DeathPart_Sgin_Modifier</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-466857338\">Monster_W3_Death_SummonerSpeed0</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1176710437\">Monster_W3_Death_IsSummoner</a>"
            }
          ]
        }
      ],
      "description": "Cannot be selected, cannot take action.",
      "type": "Other",
      "effectName": "Morbid Dream",
      "statusName": "Morbid Dream"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__787482349\">Death_Control_Modifier_MainLine</a>",
      "modifierFlags": [
        "AlwaysSuccess",
        "STAT_ForceControl",
        "STAT_CTRL_UnOperable"
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
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-1139623579\">Monster_W3_Death_LockHP</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_AddSPValue) || RETURN",
                "displayLines": "MDF_AddSPValue",
                "constants": [],
                "variables": [
                  "MDF_AddSPValue"
                ]
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HealHPPercentage) || RETURN",
                "displayLines": "MDF_HealHPPercentage",
                "constants": [],
                "variables": [
                  "MDF_HealHPPercentage"
                ]
              },
              "formula": "Heal from Target MaxHP"
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
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Effect_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]",
              "valuePerStack": {}
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_HealHPPercentage",
        "MDF_AddSPValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-804634083\">Death_Control_Modifier</a>",
      "modifierFlags": [
        "AlwaysSuccess",
        "STAT_ForceControl",
        "UnOperable",
        "STAT_CTRL_UnOperable"
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
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-1139623579\">Monster_W3_Death_LockHP</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_AddSPValue) || RETURN",
                "displayLines": "MDF_AddSPValue",
                "constants": [],
                "variables": [
                  "MDF_AddSPValue"
                ]
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HealHPPercentage) || RETURN",
                "displayLines": "MDF_HealHPPercentage",
                "constants": [],
                "variables": [
                  "MDF_HealHPPercentage"
                ]
              },
              "formula": "Heal from Target MaxHP"
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
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Effect_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]",
              "valuePerStack": {}
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_HealHPPercentage",
        "MDF_AddSPValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2048900042\">W3_Death_AddDeathSuccess</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1295202561\">W3_Death_AddMoifierSuccess</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_Death_Ability08_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "EnemyAttackFromOthers",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1985441632\">Monster_W3_Death_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "Fatal Damage [Owner]: Start",
          "execute": [
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
              "lockHolder": "<a class=\"gModGreen\" id=\"-1139623579\">Monster_W3_Death_LockHP</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>",
              "valuePerStack": {
                "MDF_HealHPPercentage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "MDF_AddSPValue": {
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1295202561\">W3_Death_AddMoifierSuccess</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2048900042\">W3_Death_AddDeathSuccess</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1091581769\">Monster_W3_Death_ListenBreak</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2048900042\">W3_Death_AddDeathSuccess</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2048900042\">W3_Death_AddDeathSuccess</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                  }
                ]
              },
              "passed": [
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Death_SpecialVictory_Flag",
                        "compareType": "NOT=",
                        "value2": 1
                      },
                      "passed": [
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
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 6
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
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
        "DeathPart_AppearSkill_Flag",
        "Effect_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1562873953\">Monster_W3_Death_BattleAlert</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BonusAttackCounter",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BonusAttackCounter",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"163694883\">Modifier_W3_Death_ChargeShoot</a>[<span class=\"descriptionNumberColor\">Nightfall</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__690221189\">Modifier_W3_Death_HuntingMode3</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Gained 3 stacks of Sunset. It is about to deal a killing blow.",
      "type": "Other",
      "effectName": "The Sun Sinks, Night Falls",
      "statusName": "Sunset"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Gained 2 stacks of Sunset.",
      "type": "Other",
      "effectName": "The Sun Sinks, Dusk Arrives",
      "statusName": "Sunset"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Gained 1 stack of Sunset.",
      "type": "Other",
      "effectName": "The Sun Sinks, In Dying Light",
      "statusName": "Sunset"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
      "description": "\"Death\" has gained 0 stacks of \"Sunset.\"",
      "type": "Other",
      "effectName": "Sunset, Afternoon",
      "statusName": "Sunset"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1900940108\">Modifier_W3_Death_HuntingMode</a>",
      "stackType": "ReplaceByCaster",
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1646802425\">Modifier_W3_Death_BonusAttackCounter</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1731578033\">Modifier_W3_Death_BonusAttackHandler</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"690221189\">Modifier_W3_Death_HuntingMode3</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            }
          ]
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
              "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1731578033\">Modifier_W3_Death_BonusAttackHandler</a>"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "BonusAttackCounter",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || Constants[0] (1) || SUB || RETURN",
                      "displayLines": "({[PassiveSkill02[0]]} - 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    }
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
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "Break"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": "Base Insert Condition",
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 3
                              }
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Death_SpecialVictory_Flag",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "abilityName": "Monster_W3_Death_Ability05_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "EnemyAttackFromOthers",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
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
      "for": "<a class=\"gModGreen\" id=\"mod__1646802425\">Modifier_W3_Death_BonusAttackCounter</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "BonusAttackCounter",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"639888332\">Modifier_W3_Death_HuntingMode0</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"656665951\">Modifier_W3_Death_HuntingMode1</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"690221189\">Modifier_W3_Death_HuntingMode3</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
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
                    "modifier": "<a class=\"gModGreen\" id=\"673443570\">Modifier_W3_Death_HuntingMode2</a>[<span class=\"descriptionNumberColor\">Sunset</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "BonusAttackCounter",
                    "compareType": "<=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Death_Ability10_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "EnemyAttackFromOthers",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1731578033\">Modifier_W3_Death_BonusAttackHandler</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
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
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
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
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "Break"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "STAT_CTRL"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "DisableAction"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Skill Type",
                      "skillType": "Elation"
                    }
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
                  "modifier": "<a class=\"gModGreen\" id=\"1646802425\">Modifier_W3_Death_BonusAttackCounter</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-314968673\">Enemy_W3_Death_Minions_Mark_PartChange</a>",
      "modifierFlags": [
        "DisableHealHP"
      ],
      "stackData": [],
      "latentQueue": [
        "Bullet_Flag",
        "UsedSkill08_Flag",
        "Effect_Flag",
        "DeathPart_AppearSkill_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-745487733\">Modifier_W3_Death_PartController_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-314968673\">Enemy_W3_Death_Minions_Mark_PartChange</a>"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
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
                  "abilityName": "Monster_W3_Death_Part1T2",
                  "priorityTag": "EnemyPhaseChange",
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
        "DeathPart_AppearSkill_Flag",
        "Effect_Flag",
        "UsedSkill08_Flag",
        "Bullet_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__77028713\">Monster_W3_Death_HitTarget</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"77028713\">Monster_W3_Death_HitTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2003204085\">Enemy_W3_Death_Mainline_Battle1_CatchID1</a>",
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}