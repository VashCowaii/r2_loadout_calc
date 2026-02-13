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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166883348\">GlobalAbility_Castorice_Main</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1718302990\">GlobalAbility_Castorice_Listen</a>"
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
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-224007130\">GlobalAbility_Castorice_LimboWakeUpMark</a>"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1718302990\">GlobalAbility_Castorice_Listen</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-224007130\">GlobalAbility_Castorice_LimboWakeUpMark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "setValue": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-678658688\">GlobalAbility_Castorice_DeathTime</a>[<span class=\"descriptionNumberColor\">Mooncocoon</span>]",
              "duration": 2
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-224007130\">GlobalAbility_Castorice_LimboWakeUpMark</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166883348\">GlobalAbility_Castorice_Main</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"708690209\">GlobalAbility_Castorice_CreateBattleEvent</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-138851216\">DanHengIL_SpecialPassiveModifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__954381819\">DanHengIL_SpecialModifier_DisableAbility</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                }
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-138851216\">DanHengIL_SpecialPassiveModifier</a>",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"954381819\">DanHengIL_SpecialModifier_DisableAbility</a>",
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"954381819\">DanHengIL_SpecialModifier_DisableAbility</a>",
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"954381819\">DanHengIL_SpecialModifier_DisableAbility</a>",
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
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1385373133\">Servant_Standard_PassiveModifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1385373133\">Servant_Standard_PassiveModifier</a>",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
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
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1237494040\">Summoner_Standard_PassiveModifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1237494040\">Summoner_Standard_PassiveModifier</a>",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}.[[getMemosprite]]"
                        },
                        "living": true
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}.[[getMemosprite]]"
                          },
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}.[[getMemosprite]]"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}.[[getMemosprite]]"
                      },
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
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-205377483\">Local_SPAdd</a>",
          "valuePerStack": {
            "MDF_AddValue": 10
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2041921887\">TriggerStanceCountDown_Test</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1176583887\">Standard_TriggerDeparted</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__253720974\">ClearAvatarArea_ByAbility</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-678658688\">GlobalAbility_Castorice_DeathTime</a>[<span class=\"descriptionNumberColor\">Mooncocoon</span>]",
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
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
          "latentQueue": [],
          "description": "This character delays becoming downed and can take actions normally. After the action and before the next turn, if they receive healing or they gain a Shield, \"Mooncocoon\" is removed. Otherwise, they will be downed immediately.",
          "type": "Other",
          "effectName": "Mooncocoon",
          "statusName": "Mooncocoon"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-224007130\">GlobalAbility_Castorice_LimboWakeUpMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1718302990\">GlobalAbility_Castorice_Listen</a>",
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
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Mark for Future Revive",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "GlobalAbility_Castorice_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1108004202\">GlobalAbility_Castorice_CD</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-224007130\">GlobalAbility_Castorice_LimboWakeUpMark</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1108004202\">GlobalAbility_Castorice_CD</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1166883348\">GlobalAbility_Castorice_Main</a>",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1718302990\">GlobalAbility_Castorice_Listen</a>",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1718302990\">GlobalAbility_Castorice_Listen</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1108004202\">GlobalAbility_Castorice_CD</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1718302990\">GlobalAbility_Castorice_Listen</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__708690209\">GlobalAbility_Castorice_CreateBattleEvent</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1136407126\">Standard_Departed_Sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": true
                }
              ]
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__123456163\">Standard_Departed</a>",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[addBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>",
              "aliveOnly": "False",
              "haloStatus": true,
              "includeBattleEvent": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1176583887\">Standard_TriggerDeparted</a>",
          "execute": [
            {
              "eventTrigger": "Departed State: Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>"
                }
              ]
            },
            {
              "eventTrigger": "Departed State: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1581220157\">TriggerStanceCountDown_Monster</a>",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Physical"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1088674520\">StanceCountDown_Physical</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Ice"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-184331160\">StanceCountDown_Ice</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Fire"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1895171535\">StanceCountDown_Fire</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Wind"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1032587311\">StanceCountDown_Wind</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Thunder"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"983067753\">StanceCountDown_Thunder</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Imaginary"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1968828018\">StanceCountDown_Imaginary</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Quantum"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1123715482\">StanceCountDown_Quantum</a>",
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
                  "functionName": "<a class=\"gTempYellow\" id=\"801909437\">TT_TriggerBreak</a>"
                }
              ]
            },
            {
              "eventTrigger": "Cause Exo-Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"801909437\">TT_TriggerBreak</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__801909437\">TT_TriggerBreak</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Physical"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"485608192\">StanceBreak_Physical</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Ice"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-687043424\">StanceBreak_Ice</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"483030905\">StanceBreak_Fire</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Wind"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1573629529\">StanceBreak_Wind</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Thunder"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1796036529\">StanceBreak_Thunder</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Imaginary"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-433289498\">StanceBreak_Imaginary</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"789833122\">StanceBreak_Quantum</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2041921887\">TriggerStanceCountDown_Test</a>",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Physical"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1088674520\">StanceCountDown_Physical</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Ice"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-184331160\">StanceCountDown_Ice</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Fire"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1895171535\">StanceCountDown_Fire</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Wind"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1032587311\">StanceCountDown_Wind</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Thunder"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"983067753\">StanceCountDown_Thunder</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Imaginary"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1968828018\">StanceCountDown_Imaginary</a>",
                          "variables": {}
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Quantum"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1123715482\">StanceCountDown_Quantum</a>",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Physical"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"485608192\">StanceBreak_Physical</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Ice"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-687043424\">StanceBreak_Ice</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"483030905\">StanceBreak_Fire</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Wind"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1573629529\">StanceBreak_Wind</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Thunder"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1796036529\">StanceBreak_Thunder</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Imaginary"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-433289498\">StanceBreak_Imaginary</a>",
                      "variables": {}
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"789833122\">StanceBreak_Quantum</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-205377483\">Local_SPAdd</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 9001013,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-777670637\">GlobalFunction_ClearAvatarArea_ByAbility</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
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
                    "ID": 1408,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Phainon"
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
                  "modifier": "<a class=\"gModGreen\" id=\"253720974\">ClearAvatarArea_ByAbility</a>"
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
          "team": "Player Team",
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