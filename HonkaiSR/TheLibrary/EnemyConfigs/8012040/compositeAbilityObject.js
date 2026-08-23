const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 8012040,
  "trimCharacterName": 8012040,
  "abilityList": [
    "8012040_Modifiers",
    "8012040_Monster_W5_Shell_Deathrattle_Part01",
    "8012040_Monster_W5_Shell_Deathrattle",
    "8012040_Monster_W5_Shell_AbilityP01",
    "8012040_Monster_W5_Shell_Ability02_Part02",
    "8012040_Monster_W5_Shell_Ability02_Part01",
    "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_01",
    "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_00",
    "8012040_Monster_W5_Shell_Ability01Multi_Part02",
    "8012040_Monster_W5_Shell_Ability01Multi_Part01",
    "8012040_Monster_W5_Shell_Ability01_Part02",
    "8012040_Monster_W5_Shell_Ability01_Part01",
    "8012040_Monster_W5_Shell_Restart",
    "8012040_BE_BattleEvents",
    "8012040_Handling"
  ],
  "abilityObject": {
    "8012040_Modifiers": {
      "fileName": "8012040_Modifiers",
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
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
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
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
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
    "8012040_Monster_W5_Shell_Deathrattle_Part01": {
      "fileName": "8012040_Monster_W5_Shell_Deathrattle_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Deathrattle": {
      "fileName": "8012040_Monster_W5_Shell_Deathrattle",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Curtain Call"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Search",
            "livingState": "Bit_Deathrattle"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
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
                "compareType": ">",
                "value2": 1
              },
              "passed": [
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
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target List}}"
                },
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1171587599\">W5_Shell_BattleScore1</a>"
                }
              ]
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target List}}"
                },
                "compareType": ">",
                "value2": 1
              },
              "passed": [
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
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target List}}"
                },
                "compareType": ">",
                "value2": 1
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"804424870\">Enemy_W5_Shell_AddShield</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
          },
          "noTargetFound": [
            {
              "name": "Destroy Battle Entity",
              "identifier": "W5_Shell_Attack"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_AbilityP01": {
      "fileName": "8012040_Monster_W5_Shell_AbilityP01",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"597793268\">Enemy_W5_Shell_Deathrattle</a>[<span class=\"descriptionNumberColor\">Ensemble Slapstick</span>]"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Target Exists",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W5_Shell_Attack"
            },
            "living": true
          },
          "failed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20047,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-368521336\">Enemy_W5_Shell_BESpeed</a>",
                  "valuePerStack": {
                    "MDF_Speed": {
                      "operator": "Variables[0] (BaseSpeed) || RETURN",
                      "displayLines": "BaseSpeed",
                      "constants": [],
                      "variables": [
                        "BaseSpeed"
                      ]
                    }
                  }
                },
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W5_Shell_Attack",
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
          "name": "Add Stage Ability",
          "abilityName": "Monster_W5_Shell_Restart"
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W5_Shell_Deathrattle",
          "parameters": {
            "P1_ShieldPercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__597793268\">Enemy_W5_Shell_Deathrattle</a>[<span class=\"descriptionNumberColor\">Ensemble Slapstick</span>]",
          "modifierFlags": [
            "Deathrattle"
          ],
          "description": "All Comediologists will attack together.",
          "type": "Other",
          "statusName": "Ensemble Slapstick",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "W5_Shell_AttackControl",
                  "state": false
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>",
                        "invertCondition": true
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W5_Shell_Deathrattle",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "priorityTag": "EnemyDeathTogether",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
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
                              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[0]]}"
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
                              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[0]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Shell_Deathrattle_Part01",
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W5_Shell"
                  },
                  "noTargetFound": [
                    {
                      "name": "Destroy Battle Entity",
                      "identifier": "W5_Shell_Attack"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-368521336\">Enemy_W5_Shell_BESpeed</a>",
          "stackType": "Replace",
          "stackData": [
            "MDF_Speed"
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
          ]
        }
      ]
    },
    "8012040_Monster_W5_Shell_Ability02_Part02": {
      "fileName": "8012040_Monster_W5_Shell_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Ability02_Part01": {
      "fileName": "8012040_Monster_W5_Shell_Ability02_Part01",
      "childAbilityList": [
        "8012040_Monster_W5_Shell_Ability02_Camera",
        "8012040_Monster_W5_Shell_Ability02_Part01",
        "8012040_Monster_W5_Shell_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Shell_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_01": {
      "fileName": "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Shell: Skill01 Main}}"
          },
          "variableName": "Skill01_AssistCount",
          "value": 1,
          "max": 4
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_00": {
      "fileName": "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_00",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Comedian Ensemble"
        },
        "Deleted bullshit",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Shell: Skill01 Target 1}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Shell: Skill01 Target 2}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": ">=",
            "value2": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Shell: Skill01 Target 3}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Shell: Skill01 Target 4}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Shell: Skill01 Target 5}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"809036258\">Enemy_W5_Shell_Ability01Target1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"792258639\">Enemy_W5_Shell_Ability01Target2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"775481020\">Enemy_W5_Shell_Ability01Target3</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"758703401\">Enemy_W5_Shell_Ability01Target4</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"741925782\">Enemy_W5_Shell_Ability01Target5</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"603597471\">Enemy_W5_Shell_Ability01Main</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
          },
          "ifTargetFound": [
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
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              "passed": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Ability01Multi_Part02": {
      "fileName": "8012040_Monster_W5_Shell_Ability01Multi_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"603597471\">Enemy_W5_Shell_Ability01Main</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill01_AssistCount",
          "value": 0
        },
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
            "Deleted bullshit"
          ],
          "noTargetFound": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
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
                "modifier": "<a class=\"gModGreen\" id=\"809036258\">Enemy_W5_Shell_Ability01Target1</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"792258639\">Enemy_W5_Shell_Ability01Target2</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"775481020\">Enemy_W5_Shell_Ability01Target3</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"758703401\">Enemy_W5_Shell_Ability01Target4</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"741925782\">Enemy_W5_Shell_Ability01Target5</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"809036258\">Enemy_W5_Shell_Ability01Target1</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"809036258\">Enemy_W5_Shell_Ability01Target1</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
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
                "modifier": "<a class=\"gModGreen\" id=\"809036258\">Enemy_W5_Shell_Ability01Target1</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"792258639\">Enemy_W5_Shell_Ability01Target2</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"775481020\">Enemy_W5_Shell_Ability01Target3</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"758703401\">Enemy_W5_Shell_Ability01Target4</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"741925782\">Enemy_W5_Shell_Ability01Target5</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"792258639\">Enemy_W5_Shell_Ability01Target2</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"792258639\">Enemy_W5_Shell_Ability01Target2</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
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
                "modifier": "<a class=\"gModGreen\" id=\"809036258\">Enemy_W5_Shell_Ability01Target1</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"792258639\">Enemy_W5_Shell_Ability01Target2</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"775481020\">Enemy_W5_Shell_Ability01Target3</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"758703401\">Enemy_W5_Shell_Ability01Target4</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"741925782\">Enemy_W5_Shell_Ability01Target5</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"775481020\">Enemy_W5_Shell_Ability01Target3</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"775481020\">Enemy_W5_Shell_Ability01Target3</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
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
                "modifier": "<a class=\"gModGreen\" id=\"809036258\">Enemy_W5_Shell_Ability01Target1</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"792258639\">Enemy_W5_Shell_Ability01Target2</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"775481020\">Enemy_W5_Shell_Ability01Target3</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"758703401\">Enemy_W5_Shell_Ability01Target4</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"741925782\">Enemy_W5_Shell_Ability01Target5</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"758703401\">Enemy_W5_Shell_Ability01Target4</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"758703401\">Enemy_W5_Shell_Ability01Target4</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
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
                "modifier": "<a class=\"gModGreen\" id=\"809036258\">Enemy_W5_Shell_Ability01Target1</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"792258639\">Enemy_W5_Shell_Ability01Target2</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"775481020\">Enemy_W5_Shell_Ability01Target3</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"758703401\">Enemy_W5_Shell_Ability01Target4</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"741925782\">Enemy_W5_Shell_Ability01Target5</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"741925782\">Enemy_W5_Shell_Ability01Target5</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"741925782\">Enemy_W5_Shell_Ability01Target5</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
          },
          "ifTargetFound": [
            {
              "name": "Trigger Joint-Attack Ability",
              "abilityList": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Shell: Skill01 Target 1}}"
                  },
                  "ability": "Monster_W5_Shell_Ability01Multi_Part01_Assist_00"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict"
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Shell: Skill01 Target 2}}"
                  },
                  "delay": 0.1,
                  "ability": "Monster_W5_Shell_Ability01Multi_Part01_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 1
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Shell: Skill01 Target 3}}"
                  },
                  "delay": 0.3,
                  "ability": "Monster_W5_Shell_Ability01Multi_Part01_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 2
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Shell: Skill01 Target 4}}"
                  },
                  "delay": 0.5,
                  "ability": "Monster_W5_Shell_Ability01Multi_Part01_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 3
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Shell: Skill01 Target 5}}"
                  },
                  "delay": 0.8,
                  "ability": "Monster_W5_Shell_Ability01Multi_Part01_Assist_01"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Ability01Multi_Part01": {
      "fileName": "8012040_Monster_W5_Shell_Ability01Multi_Part01",
      "childAbilityList": [
        "8012040_Monster_W5_Shell_Ability01Multi_Camera",
        "8012040_Monster_W5_Shell_Ability01Multi_Boss_Camera",
        "8012040_Monster_W5_Shell_Ability01Multi_Part01",
        "8012040_Monster_W5_Shell_Ability01Multi_Part02",
        "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_00",
        "8012040_Monster_W5_Shell_Ability01Multi_Part01_Assist_01"
      ],
      "skillTrigger": "Skill01Multi",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Shell_Ability01Multi_Part02",
          "isTrigger": true
        },
        "Wait for Pending Ability Completions"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Ability01_Part02": {
      "fileName": "8012040_Monster_W5_Shell_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Punchline Analysis"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
          },
          "ifTargetFound": [
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
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              "passed": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Ability01_Part01": {
      "fileName": "8012040_Monster_W5_Shell_Ability01_Part01",
      "childAbilityList": [
        "8012040_Monster_W5_Shell_Ability01_Camera",
        "8012040_Monster_W5_Shell_Ability01_Part01",
        "8012040_Monster_W5_Shell_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W5_Shell_Ability01_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "8012040_Monster_W5_Shell_Restart": {
      "fileName": "8012040_Monster_W5_Shell_Restart",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  }
                ]
              },
              "passed": [
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  "passed": [
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "flagNames": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8012040_BE_BattleEvents": {
      "fileName": "8012040_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20047,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_W5_Shell_Ability01Check"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 150
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Whenever \"Comedian Ensemble\" takes action, all \"Comediologists\" will attack simultaneously."
        }
      ],
      "references": []
    },
    "8012040_Handling": {
      "fileName": "8012040_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Common_SequenceThree_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSequenceSkill",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Use Sequence Ability Option"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
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