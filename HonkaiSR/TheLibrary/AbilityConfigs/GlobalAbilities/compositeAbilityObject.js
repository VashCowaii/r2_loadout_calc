const compositeAbilityObject = {
  "fullCharacterName": "GlobalAbilities",
  "trimCharacterName": "GlobalAbilities",
  "abilityList": [
    "GlobalAbilities_GlobalAbility_Castorice_Insert02",
    "GlobalAbilities_GlobalAbility_Castorice_Insert",
    "GlobalAbilities_Castotice_BE_PassiveAbility",
    "GlobalAbilities_GlobalAbility_Castorice_Main",
    "GlobalAbilities_DanHengIL_SpecialPassive",
    "GlobalAbilities_Standard_TechniqueInLevel",
    "GlobalAbilities_Servant_Standard_PassiveAbility",
    "GlobalAbilities_Summoner_Standard_PassiveAbility",
    "GlobalAbilities_Standard_PassiveAbility",
    "GlobalAbilities_Modifiers",
    "GlobalAbilities_Functions",
    "GlobalAbilities_BE_BattleEvents"
  ],
  "abilityObject": {
    "GlobalAbilities_GlobalAbility_Castorice_Insert02": {
      "fileName": "GlobalAbilities_GlobalAbility_Castorice_Insert02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": "Single Target (Primary)",
          "ignoreHPLossTriggers": true,
          "ignoreDeathTriggers": true
        }
      ],
      "references": []
    },
    "GlobalAbilities_GlobalAbility_Castorice_Insert": {
      "fileName": "GlobalAbilities_GlobalAbility_Castorice_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "GlobalAbility_Castorice_Main"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Allied Team(ALL) [Exclude battle mechanics]",
          "modifier": "GlobalAbility_Castorice_Listen"
        },
        {
          "name": "Assign Global Buff State",
          "buffID": 140703,
          "state": "False",
          "amount": 0
        },
        {
          "name": "UI Display Event",
          "popUpText": "Sanctuary of Mooncocoon"
        },
        {
          "name": "Find New Target",
          "from": "Allied Team",
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Allied Team(ALL)",
          "modifier": "GlobalAbility_Castorice_Listen"
        },
        {
          "name": "Find New Target",
          "from": "Allied Team",
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
          },
          "ifTargetFound": [
            {
              "name": "Set HP Value",
              "target": "Use Prior Target(s) Defined",
              "setValue": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "GlobalAbility_Castorice_DeathTime[<span class=\"descriptionNumberColor\">Mooncocoon</span>]",
              "duration": 2
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Allied Team(ALL) [Exclude battle mechanics]",
          "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
        }
      ],
      "references": []
    },
    "GlobalAbilities_Castotice_BE_PassiveAbility": {
      "fileName": "GlobalAbilities_Castotice_BE_PassiveAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "GlobalAbility_Castorice_Main"
        }
      ],
      "references": []
    },
    "GlobalAbilities_GlobalAbility_Castorice_Main": {
      "fileName": "GlobalAbilities_GlobalAbility_Castorice_Main",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": "Level Entity",
          "modifier": "GlobalAbility_Castorice_CreateBattleEvent"
        }
      ],
      "references": []
    },
    "GlobalAbilities_DanHengIL_SpecialPassive": {
      "fileName": "GlobalAbilities_DanHengIL_SpecialPassive",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "DanHengIL_SpecialPassiveModifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_SpecialModifier_DisableAbility",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_SpecialPassiveModifier",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TurnCount",
                  "value": {
                    "operator": "Variables[0] (TurnCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(TurnCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "TurnCount"
                    ]
                  }
                },
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": 5,
                  "adjustmentType": "+"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
                  "abilityTypes": [
                    "Ultimate"
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "EXSkill01",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 2,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TurnCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "DanHengIL_SpecialModifier_DisableAbility",
                          "immediateEffect": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 3,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TurnCount",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "DanHengIL_SpecialModifier_DisableAbility",
                          "immediateEffect": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 3,
                  "maxValue": 4,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TurnCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "DanHengIL_SpecialModifier_DisableAbility",
                          "immediateEffect": true
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
      ]
    },
    "GlobalAbilities_Standard_TechniqueInLevel": {
      "fileName": "GlobalAbilities_Standard_TechniqueInLevel",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "GlobalAbilities_Servant_Standard_PassiveAbility": {
      "fileName": "GlobalAbilities_Servant_Standard_PassiveAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Servant_Standard_PassiveModifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Servant_Standard_PassiveModifier",
          "modifierFlags": [
            "KeepAllModifierOnDeathRattle"
          ],
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Owner of this Modifier"
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": "Owner of this Modifier",
                      "ignoreHPLossTriggers": true,
                      "ignoreDeathTriggers": true,
                      "abortInsertedAbilities": true
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "GlobalAbilities_Summoner_Standard_PassiveAbility": {
      "fileName": "GlobalAbilities_Summoner_Standard_PassiveAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Summoner_Standard_PassiveModifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Summoner_Standard_PassiveModifier",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target Exists",
                        "target": "Caster's Memosprite",
                        "living": true
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": "Caster's Memosprite",
                          "toRemove": [
                            "STAT_CTRL",
                            "DisableAction"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": "Caster's Memosprite",
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": "Caster's Memosprite",
                      "toRemove": [
                        "STAT_CTRL",
                        "DisableAction"
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
      ]
    },
    "GlobalAbilities_Standard_PassiveAbility": {
      "fileName": "GlobalAbilities_Standard_PassiveAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Local_SPAdd",
          "valuePerStack": {
            "MDF_AddValue": 10
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "TriggerStanceCountDown_Test"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Standard_TriggerDeparted"
        }
      ],
      "references": []
    },
    "GlobalAbilities_Modifiers": {
      "fileName": "GlobalAbilities_Modifiers",
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
          "for": "ClearAvatarArea_ByAbility",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "GlobalAbility_Castorice_DeathTime[<span class=\"descriptionNumberColor\">Mooncocoon</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LifeTime",
                  "value": {
                    "operator": "Variables[0] (MDF_LifeTime) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_LifeTime + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_LifeTime",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": "Owner of this Modifier",
                      "ignoreDeathTriggers": true,
                      "canRevive": true
                    }
                  ],
                  "failed": [
                    "Abort Modifier Phase Action"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Record Global Buff Usage",
                  "buffID": 140703
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
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Created Shield [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Secondary Prior Target(s) Defined",
                    "target2": "Owner of this Modifier"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "This character delays becoming downed and can take actions normally. After the action and before the next turn, if they receive healing or they gain a Shield, \"Mooncocoon\" is removed. Otherwise, they will be downed immediately.",
          "type": "Other",
          "effectName": "Mooncocoon",
          "statusName": "Mooncocoon"
        },
        {
          "name": "Modifier Construction",
          "for": "GlobalAbility_Castorice_LimboWakeUpMark"
        },
        {
          "name": "Modifier Construction",
          "for": "GlobalAbility_Castorice_Listen",
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
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Mark for Future Revive",
                      "target": "Owner of this Modifier"
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "GlobalAbility_Castorice_Insert",
                      "abilitySource": "Caster",
                      "priorityTag": "AvatarReviveOthers",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "AADF_1": {
                          "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                          "displayLines": "MDF_HealPercentage",
                          "constants": [],
                          "variables": [
                            "MDF_HealPercentage"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "GlobalAbility_Castorice_CD"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "GlobalAbility_Castorice_LimboWakeUpMark"
                    }
                  ]
                }
              ],
              "priorityLevel": -69
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "GlobalAbility_Castorice_CD",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "GlobalAbility_Castorice_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Assign Global Buff State",
                  "buffID": 140703,
                  "state": "True",
                  "amount": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team(ALL) NO Memosprites",
                  "modifier": "GlobalAbility_Castorice_Listen",
                  "valuePerStack": {
                    "MDF_HealPercentage": {
                      "operator": "Variables[0] (UNUSED_OBJECT_CAS_REVIVE_HEAL_AMOUNT) || RETURN",
                      "displayLines": "UNUSED_OBJECT_CAS_REVIVE_HEAL_AMOUNT",
                      "constants": [],
                      "variables": [
                        "UNUSED_OBJECT_CAS_REVIVE_HEAL_AMOUNT"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Memosprite",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "GlobalAbility_Castorice_Listen"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "GlobalAbility_Castorice_CD",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Allied Team(ALL) [Exclude battle mechanics, NO Memosprites]",
                      "modifier": "GlobalAbility_Castorice_Listen",
                      "valuePerStack": {
                        "MDF_HealPercentage": {
                          "operator": "Variables[0] (UNUSED_OBJECT_CAS_REVIVE_HEAL_AMOUNT) || RETURN",
                          "displayLines": "UNUSED_OBJECT_CAS_REVIVE_HEAL_AMOUNT",
                          "constants": [],
                          "variables": [
                            "UNUSED_OBJECT_CAS_REVIVE_HEAL_AMOUNT"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "GlobalAbility_Castorice_CreateBattleEvent",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Allied Team",
                  "eventID": 11407,
                  "variables": {
                    "MDF_Castorice_CreateBattleEvent": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
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
          "for": "Standard_Departed_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add to Team Target Grouping",
                  "target": "Owner of this Modifier"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Remove from Team Target Grouping",
                  "target": "Owner of this Modifier",
                  "stayInTeam": true
                }
              ]
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Standard_Departed",
            "casterFilter": "Caster"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_Departed",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": "Owner of this Modifier",
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
                  "stateName": "Standard_Departed"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Standard_Departed",
                  "state": false
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Standard_Departed_Sub",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Standard_Departed_Sub"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
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
                            "name": "Modifier Has Flag",
                            "flagName": "TeamAction"
                          },
                          {
                            "name": "Modifier Has Flag",
                            "flagName": "AttackSign"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Owner of this Modifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Monster_Beast02_Attack_Sign"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Monster_W2_Beast02_RLElite_Attack_Sign"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "ParamModifier"
                    }
                  ]
                }
              ]
            }
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Owner of this Modifier (with Battle Events/Summon)",
              "modifier": "Standard_Departed_Sub",
              "aliveOnly": "False",
              "haloStatus": true,
              "includeBattleEvent": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Standard_TriggerDeparted",
          "execute": [
            {
              "eventTrigger": "Departed State: Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Standard_Departed"
                }
              ]
            },
            {
              "eventTrigger": "Departed State: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Standard_Departed"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "TriggerStanceCountDown_Monster",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "CanBeAddedToServant"
          ],
          "execute": [
            {
              "eventTrigger": "Caused Depleted Toughness [Owner][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": "Use Prior Target(s) Defined",
                        "value1": "TargetCurrentToughness",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Physical"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Physical",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Ice"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Ice",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Fire"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Fire",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Wind"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Wind",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Thunder"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Thunder",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Imaginary"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Imaginary",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Quantum"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Quantum",
                          "variables": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TT_TriggerBreak"
                }
              ]
            },
            {
              "eventTrigger": "Cause Exo-Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TT_TriggerBreak"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "TT_TriggerBreak",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Physical"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Physical",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Ice"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Ice",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Fire",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Wind"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Wind",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Thunder"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Thunder",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Imaginary"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Imaginary",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Quantum",
                      "variables": {}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "TriggerStanceCountDown_Test",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "CanBeAddedToServant"
          ],
          "execute": [
            {
              "eventTrigger": "Caused Depleted Toughness [Owner][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": "Use Prior Target(s) Defined",
                        "value1": "TargetCurrentToughness",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Physical"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Physical",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Ice"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Ice",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Fire"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Fire",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Wind"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Wind",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Thunder"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Thunder",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Imaginary"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Imaginary",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Quantum"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "StanceCountDown_Quantum",
                          "variables": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Physical"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Physical",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Ice"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Ice",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Fire",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Wind"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Wind",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Thunder"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Thunder",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Imaginary"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Imaginary",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": "Owner of this Modifier",
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "StanceBreak_Quantum",
                      "variables": {}
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
          "for": "Local_SPAdd",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (MDF_AddValue) || RETURN",
                    "displayLines": "MDF_AddValue",
                    "constants": [],
                    "variables": [
                      "MDF_AddValue"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AddValue"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "GlobalAbilities_Functions": {
      "fileName": "GlobalAbilities_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "GlobalFunction_ClearAvatarArea_ByAbility",
          "parse": [
            {
              "name": "Find New Target",
              "from": "Allied Team",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1407,
                    "target": "Use Prior Target(s) Defined",
                    "characterName": "Castorice"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1408,
                    "target": "Use Prior Target(s) Defined",
                    "characterName": "Phainon"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "ClearAvatarArea_ByAbility"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "GlobalAbilities_BE_BattleEvents": {
      "fileName": "GlobalAbilities_BE_BattleEvents",
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
          "ID": 11407,
          "team": "TeamLight",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}