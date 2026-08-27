const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20047,
  "trimCharacterName": 20047,
  "abilityList": [
    "20047_Modifiers",
    "20047_BattleEventAbility_Monster_W5_Shell_Ability01Check"
  ],
  "abilityObject": {
    "20047_Modifiers": {
      "fileName": "20047_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1171587599\">W5_Shell_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Deathbed Chorus",
                      "desc": "In a combat against the Comediologist, cause 4 or more Comediologists to use \"Curtain Call\" simultaneously",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1600419310\">Enemy_W5_Shell_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Tragic Core</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield",
            "MuteHitH"
          ],
          "description": "A Shield that offsets DMG taken by all allies. Before the Shield is depleted or its effect expires, enemy targets' attacks won't reduce the Shielded allies' HP. Currently, the Shield has <span class=\"descriptionNumberColor\">MDF_CurShield_Display</span> point(s) remaining.",
          "type": "Buff",
          "effectName": "Tragic Core",
          "statusName": "Tragic Core",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "valueType": "CurrentShield",
                  "variableName": "MDF_CurShield_Display",
                  "modifierName": "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Shield Value Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "valueType": "CurrentShield",
                  "variableName": "MDF_CurShield_Display",
                  "modifierName": "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>",
                  "multiplier": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1432687016\">Enemy_W5_Shell_LightTeam_Shield_Stack</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1600419310\">Enemy_W5_Shell_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Tragic Core</span>]"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "valueType": "CurrentShield",
                  "variableName": "CurShield",
                  "modifierName": "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterBaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AddShield",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldPercentage_Add) || Variables[1] (CasterBaseAttack) || MUL || RETURN",
                    "displayLines": "(MDF_ShieldPercentage_Add * CasterBaseAttack)",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldPercentage_Add",
                      "CasterBaseAttack"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MaxShield",
                  "value": {
                    "operator": "Variables[0] (CurShield) || Variables[1] (AddShield) || ADD || RETURN",
                    "displayLines": "(CurShield + AddShield)",
                    "constants": [],
                    "variables": [
                      "CurShield",
                      "AddShield"
                    ]
                  }
                },
                {
                  "name": "Adjust Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "modifierNameArray": [
                    "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>"
                  ],
                  "value": {
                    "operator": "Variables[0] (MaxShield) || RETURN",
                    "displayLines": "MaxShield",
                    "constants": [],
                    "variables": [
                      "MaxShield"
                    ]
                  },
                  "operation": "Set"
                },
                {
                  "name": "Adjust Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "modifierNameArray": [
                    "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>"
                  ],
                  "value": {
                    "operator": "Variables[0] (AddShield) || RETURN",
                    "displayLines": "AddShield",
                    "constants": [],
                    "variables": [
                      "AddShield"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__234920767\">Enemy_W5_Shell_LightTeam_Shield</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Shield"
          ],
          "useEntitySnapshot": true,
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1600419310\">Enemy_W5_Shell_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Tragic Core</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterBaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AddShield",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldPercentage) || Variables[1] (CasterBaseAttack) || MUL || RETURN",
                    "displayLines": "(MDF_ShieldPercentage * CasterBaseAttack)",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldPercentage",
                      "CasterBaseAttack"
                    ]
                  }
                },
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "value": {
                    "operator": "Variables[0] (AddShield) || RETURN",
                    "displayLines": "AddShield",
                    "constants": [],
                    "variables": [
                      "AddShield"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1600419310\">Enemy_W5_Shell_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Tragic Core</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1600419310\">Enemy_W5_Shell_LightTeam_Shield_Display</a>[<span class=\"descriptionNumberColor\">Tragic Core</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__741925782\">Enemy_W5_Shell_Ability01Target5</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__758703401\">Enemy_W5_Shell_Ability01Target4</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__775481020\">Enemy_W5_Shell_Ability01Target3</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__792258639\">Enemy_W5_Shell_Ability01Target2</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__809036258\">Enemy_W5_Shell_Ability01Target1</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__603597471\">Enemy_W5_Shell_Ability01Main</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__804424870\">Enemy_W5_Shell_AddShield</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
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
                      "target": "{{Player Team Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1432687016\">Enemy_W5_Shell_LightTeam_Shield_Stack</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage_Add": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13718) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13718",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13718"
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
                        "target": "{{Player Team Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"234920767\">Enemy_W5_Shell_LightTeam_Shield</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13718) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13718",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13718"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1053529619\">Enemy_W5_Shell_DamageTakenUp</a>",
          "stackType": "Replace",
          "useEntitySnapshot": true,
          "addStacksPerTrigger": 1,
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "20047_BattleEventAbility_Monster_W5_Shell_Ability01Check": {
      "fileName": "20047_BattleEventAbility_Monster_W5_Shell_Ability01Check",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"980695647\">MBattleEventAbility_Monster_W5_Shell_Ability01Check</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__980695647\">MBattleEventAbility_Monster_W5_Shell_Ability01Check</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
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
                        "value": "W5_Shell"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        },
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W5_Shell_Ability01_Part01",
                          "abilitySource": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              {
                                "name": "Return Target",
                                "value": 1
                              }
                            ]
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W5_Shell_Ability01Multi_Part01",
                          "abilitySource": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Parameter Target List}}"
                              },
                              "Shuffle Targets",
                              {
                                "name": "Return Target",
                                "value": 1
                              }
                            ]
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Shell_Restart",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "priorityTag": "EnemyChangeState",
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
  },
  "enemyData": {},
  "isBattleEvent": true
}