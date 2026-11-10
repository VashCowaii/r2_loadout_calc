const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 1013014,
  "trimCharacterName": 1013014,
  "abilityList": [
    "1013014_Modifiers",
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_InsertCamera",
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert3",
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert2",
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert",
    "1013014_WMonster_W1_Mecha_02_RL_Passive_AIControlAndHPLock",
    "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part02",
    "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part01",
    "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part02",
    "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability05_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability05_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability04_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability04_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability03_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability03_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability02_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability02_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability01_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability01_Part01",
    "1013014_Handling"
  ],
  "abilityObject": {
    "1013014_Modifiers": {
      "fileName": "1013014_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1648872677\">Monster_W1_Mecha03_RL_AfterCharge</a>",
          "duration": 1,
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
                      "value": 1,
                      "variableName": "ChargeUse"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1687245489\">Monster_W1_Mecha03_RL_ChargeDecision</a>",
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
                        "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"118150896\">Monster_W1_Mecha03_RL_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1648872677\">Monster_W1_Mecha03_RL_AfterCharge</a>",
                      "valuePerStack": {
                        "MDF_RogueGoalID": {
                          "displayLines": "ENEMIES_OBJECT_UNUSED__33"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1139046842\">Monster_W1_Mecha03_RL_Explode</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-9287253\">Monster_W1_Mecha03_RL_ChargeFlag</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "Phase2ChargeFlag",
                      "resetValue": 1,
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1780187848\">Monster_W1_Mecha04_RL_ChargeFlag</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__118150896\">Monster_W1_Mecha03_RL_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-735432971\">Monster_W1_Mecha03_RL_Revenge</a>[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
          "description": "Increases DMG by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>. Every time this unit enters the Charging state, DMG is increased further.",
          "type": "Buff",
          "effectName": "Obliteration Order",
          "statusName": "Obliteration Order",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageUpRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1396113313\">Monster_W1_Mecha03_RL_BreakTarget</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1278135656\">Monster_W1_Mecha03_RL_Support</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1396113313\">Monster_W1_Mecha03_RL_BreakTarget</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1396113313\">Monster_W1_Mecha03_RL_BreakTarget</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "Phase2InsertFlag",
                      "resetValue": 1,
                      "scope": "TargetEntity"
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
                      "priorityTag": "EnemyAttackFromOthers",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-16772570\">Monster_W1_Mecha03_RL_Endurance</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1212340220\">Monster_W1_Mecha03_RL_Stealth</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
          "modifierFlags": [
            "DisableHealHP"
          ],
          "description": "Currently cannot take action.",
          "type": "Other",
          "statusName": "Firepower Recovery",
          "duration": 2,
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
                  "value": 1,
                  "variableName": "DormancyFlag"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1212340220\">Monster_W1_Mecha03_RL_Stealth</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Change Entity Turn-State",
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
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "value": 0,
                  "variableName": "DormancyFlag"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "InsertCheck",
                  "resetValue": 1,
                  "scope": "TargetEntity"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1212340220\">Monster_W1_Mecha03_RL_Stealth</a>"
                },
                {
                  "name": "Change Entity Turn-State",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1212340220\">Monster_W1_Mecha03_RL_Stealth</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1212340220\">Monster_W1_Mecha03_RL_Stealth</a>"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
                  "statValue": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1739978054\">Monster_W1_Mecha03_RL_Dormancy</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1212340220\">Monster_W1_Mecha03_RL_Stealth</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1212340220\">Monster_W1_Mecha03_RL_Stealth</a>"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
                  "statValue": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1494789360\">Monster_W1_Mecha03_RL_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "priorityLevel": -90,
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
                        "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"-301883151\">Monster_W1_Mecha04_RL_Dormancy</a>",
                                    "justAddedOrActive": true
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
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
                                      "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>"
                                    },
                                    {
                                      "name": "Declare Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "variableName": "InsertCheck",
                                      "scope": "TargetEntity"
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
                                      "priorityTag": "EnemyPhaseChange",
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
                                      "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>",
                                      "casterAssign": "TargetSelf"
                                    },
                                    {
                                      "name": "Declare Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "InsertCheck",
                                      "scope": "TargetEntity"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": {
                                        "displayLines": "{[Skill02[0]]}"
                                      },
                                      "variableName": "Mecha03_00_DamageUpPercentage"
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
                                          "value": {
                                            "displayLines": "{[PassiveSkill01[2]]}"
                                          },
                                          "variableName": "Mecha03_00_DamageUpBasePercentage"
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
                                      "variableName": "InsertCheck",
                                      "scope": "TargetEntity"
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
                                              "multiAdd": "{[Skill07[4]]}"
                                            },
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                              "duration": {
                                                "displayLines": "{[Skill07[0]]}"
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
                                              "multiAdd": "{[Skill07[5]]}"
                                            },
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                              "duration": {
                                                "displayLines": "{[Skill07[2]]}"
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
                                          "modifier": "<a class=\"gModGreen\" id=\"-1739978054\">Monster_W1_Mecha03_RL_Dormancy</a>"
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": {
                                        "displayLines": "{[Skill02[0]]}"
                                      },
                                      "variableName": "Mecha03_00_DamageUpPercentage"
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
                                          "value": {
                                            "displayLines": "{[PassiveSkill01[2]]}"
                                          },
                                          "variableName": "Mecha03_00_DamageUpBasePercentage"
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Player Team All}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                                      "onlyRemoveOwnersInstance": true
                                    },
                                    {
                                      "name": "Declare Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "variableName": "AIFlag",
                                      "resetValue": 1,
                                      "scope": "TargetEntity"
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
                              "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>",
                              "casterAssign": "TargetSelf"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "InsertCheck",
                              "scope": "TargetEntity"
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
                              "priorityTag": "EnemyPhaseChange",
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
                                  }
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-1139046842\">Monster_W1_Mecha03_RL_Explode</a>"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
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
                                                "modifier": "<a class=\"gModGreen\" id=\"-301883151\">Monster_W1_Mecha04_RL_Dormancy</a>",
                                                "justAddedOrActive": true
                                              },
                                              {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Parameter Target}}"
                                                },
                                                "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>"
                                                    },
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>"
                                                    },
                                                    {
                                                      "name": "Add Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>"
                                                    },
                                                    {
                                                      "name": "Declare Custom Variable",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "variableName": "InsertCheck",
                                                      "scope": "TargetEntity"
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
                                                      "priorityTag": "EnemyPhaseChange",
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>",
                                                      "casterAssign": "TargetSelf"
                                                    },
                                                    {
                                                      "name": "Declare Custom Variable",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "variableName": "InsertCheck",
                                                      "scope": "TargetEntity"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "value": {
                                                        "displayLines": "{[Skill02[0]]}"
                                                      },
                                                      "variableName": "Mecha03_00_DamageUpPercentage"
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
                                                          "value": {
                                                            "displayLines": "{[PassiveSkill01[2]]}"
                                                          },
                                                          "variableName": "Mecha03_00_DamageUpBasePercentage"
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
                                                  "variableName": "InsertCheck",
                                                  "scope": "TargetEntity"
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
                                                          "multiAdd": "{[Skill07[4]]}"
                                                        },
                                                        {
                                                          "name": "Add Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                                          "duration": {
                                                            "displayLines": "{[Skill07[0]]}"
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
                                                          "multiAdd": "{[Skill07[5]]}"
                                                        },
                                                        {
                                                          "name": "Add Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                                          "duration": {
                                                            "displayLines": "{[Skill07[2]]}"
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"-1739978054\">Monster_W1_Mecha03_RL_Dormancy</a>"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>"
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "value": {
                                                    "displayLines": "{[Skill02[0]]}"
                                                  },
                                                  "variableName": "Mecha03_00_DamageUpPercentage"
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
                                                      "value": {
                                                        "displayLines": "{[PassiveSkill01[2]]}"
                                                      },
                                                      "variableName": "Mecha03_00_DamageUpBasePercentage"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Player Team All}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                                                  "onlyRemoveOwnersInstance": true
                                                },
                                                {
                                                  "name": "Declare Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "variableName": "AIFlag",
                                                  "resetValue": 1,
                                                  "scope": "TargetEntity"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "Declare Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "TeammateSurvive",
                                      "scope": "TargetEntity"
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
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-404471381\">Monster_W1_Mecha03_RemoveOneMore</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
      "references": []
    },
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_InsertCamera": {
      "fileName": "1013014_Monster_W1_Mecha03_RL_PassiveAbility_InsertCamera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert3": {
      "fileName": "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert3",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
            "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-301883151\">Monster_W1_Mecha04_RL_Dormancy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]"
            },
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
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
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1139046842\">Monster_W1_Mecha03_RL_Explode</a>"
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": 0
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0.01
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1362109025\">Monster_W1_Mecha04_RL_Part3Passive</a>[<span class=\"descriptionNumberColor\">Combat Speed-Up</span>]",
              "valuePerStack": {
                "MDF_SpeedAddedRatio": {
                  "displayLines": "MDF_RogueGoalID"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-735432971\">Monster_W1_Mecha03_RL_Revenge</a>[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio": {
                  "displayLines": "{[PassiveSkill01[2]]}"
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-404471381\">Monster_W1_Mecha03_RemoveOneMore</a>"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-9287253\">Monster_W1_Mecha03_RL_ChargeFlag</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1780187848\">Monster_W1_Mecha04_RL_ChargeFlag</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1980712149\">Monster_W1_Mecha04_RL_Part03Effect</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1432540592\">Monster_Mecha04_RL_ResetAI</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "InsertCheck",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "AIFlag",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "InsertCheck",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "TeammateSurvive",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "TeammateSurvive",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
              "resetValue": 1,
              "scope": "TargetEntity"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert2": {
      "fileName": "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-735432971\">Monster_W1_Mecha03_RL_Revenge</a>[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio": {
              "displayLines": "{[PassiveSkill01[2]]}"
            }
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AIFlag",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-9287253\">Monster_W1_Mecha03_RL_ChargeFlag</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert": {
      "fileName": "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
            "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-301883151\">Monster_W1_Mecha04_RL_Dormancy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]"
            },
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
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
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1139046842\">Monster_W1_Mecha03_RL_Explode</a>"
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": 0
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0.01
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-404471381\">Monster_W1_Mecha03_RemoveOneMore</a>"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-9287253\">Monster_W1_Mecha03_RL_ChargeFlag</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1780187848\">Monster_W1_Mecha04_RL_ChargeFlag</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1432540592\">Monster_Mecha04_RL_ResetAI</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "InsertCheck",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "AIFlag",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "InsertCheck",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
              "resetValue": 1,
              "scope": "TargetEntity"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_RL_Passive_AIControlAndHPLock": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Passive_AIControlAndHPLock",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_RL_Passive_AIControlAndHPLock"
      ],
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
              "modifier": "<a class=\"gModGreen\" id=\"-404471381\">Monster_W1_Mecha03_RemoveOneMore</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1280509085\">Monster_Mecha03_BreakResetCharge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "SummonSequence",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1068246674\">HideMonsterHUD</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-69428728\">WMonster_Mecha_02_MuteHitFly</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1280509085\">Monster_Mecha03_BreakResetCharge</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"118150896\">Monster_W1_Mecha03_RL_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "AIFlag",
                              "resetValue": 1,
                              "scope": "TargetEntity"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "AIFlag",
                              "resetValue": 2,
                              "scope": "TargetEntity"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
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
                          "variableName": "AIFlag",
                          "resetValue": 4,
                          "scope": "TargetEntity"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-69428728\">WMonster_Mecha_02_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "latentQueue": [
            "SummonSequence"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1068246674\">HideMonsterHUD</a>",
          "latentQueue": [
            "SummonSequence"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ]
        }
      ]
    },
    "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
            "compareType": "=",
            "value2": 1,
            "valueType": "LifeTime"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MaxHPValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": {
                    "displayLines": "(MaxHPValue * {[Skill07[1]]})"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": {
                    "displayLines": "(MaxHPValue * {[Skill07[3]]})"
                  }
                }
              ]
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>"
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
                "value1": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                "compareType": "=",
                "value2": 2,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                        "compareType": "=",
                        "value2": 4,
                        "valueType": "LifeTime"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_RL_Ability07_Camera",
        "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part01",
        "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "WMonster_W1_Mecha_02_RL_Ability07_Part02",
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
    "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "({[Skill06[0]]} * 0.3)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "({[Skill06[0]]} * 0.3)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "({[Skill06[0]]} * 0.4)"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "40%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_RL_Ability06_Camera",
        "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part01",
        "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "WMonster_W1_Mecha_02_RL_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability05_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonSequence",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
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
                            "ID": 1013013,
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
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "Last"
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
                        "name": "Enemy ID",
                        "ID": 1013011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Bug)"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
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
                                    "ID": 1013013,
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
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "First"
                                },
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "Last"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
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
                                        "ID": 1013013,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 3
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "BeforeCaster"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "First"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
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
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": "=",
                                        "value2": 3
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "First"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "Last"
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "BeforeCaster"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "AfterCaster"
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonSequence",
                  "resetValue": 2,
                  "scope": "TargetEntity"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
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
                            "ID": 1013013,
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
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "Last"
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
                        "name": "Enemy ID",
                        "ID": 1013011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Bug)"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
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
                                    "ID": 1013013,
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
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "First"
                                },
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "Last"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
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
                                        "ID": 1013013,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 3
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "BeforeCaster"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "First"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
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
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": "=",
                                        "value2": 3
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "First"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "Last"
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "BeforeCaster"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "AfterCaster"
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonSequence",
                  "resetValue": 1,
                  "scope": "TargetEntity"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
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
                        "ID": 1013013,
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
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TeammateSurvive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonSequence",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "SummonSequence",
                          "resetValue": 2,
                          "scope": "TargetEntity"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "SummonSequence",
                          "resetValue": 1,
                          "scope": "TargetEntity"
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
                    "name": "Enemy ID",
                    "ID": 1013011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Bug)"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonSequence",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "SummonSequence",
                          "resetValue": 2,
                          "scope": "TargetEntity"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "SummonSequence",
                          "resetValue": 1,
                          "scope": "TargetEntity"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
                "ID": 1013013,
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1139046842\">Monster_W1_Mecha03_RL_Explode</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability05_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability05_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_A_Ability05_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability05_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "WMonster_W1_Mecha_02_Ability05_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1013011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Bug)"
              },
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
                "ID": 1013013,
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
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability04_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "execute": [
            "Move to Next Listed Target",
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ResistedFlag",
              "scope": "TargetEntity"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "duration": {
                "displayLines": "{[Skill04[1]]}"
              },
              "baseChance": {
                "displayLines": "{[Skill04[2]]}"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ResistedFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Not Effective"
                    }
                  ]
                }
              ],
              "resisted": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ResistedFlag",
                  "resetValue": 1,
                  "scope": "TargetEntity"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability04_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability04_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_Ability04_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability04_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "WMonster_W1_Mecha_02_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability03_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "({[Skill03[0]]} * 0.7)"
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "70%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "({[Skill03[0]]} * 0.3)"
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability03_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability03_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_Ability03_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability03_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Bug)"
          },
          "failed": [
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
                    "ID": 1013013,
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "WMonster_W1_Mecha_02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability02_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
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
              "modifier": "<a class=\"gModGreen\" id=\"118150896\">Monster_W1_Mecha03_RL_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "displayLines": "{[PassiveSkill01[0]]}"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
              "duration": 1,
              "valuePerStack": {
                "ModifierDamageUpValue": {
                  "displayLines": "{[Skill02[0]]}"
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
                "name": "Enemy ID",
                "ID": 1013011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Bug)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
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
              "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability02_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability02_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_Ability02_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability02_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "WMonster_W1_Mecha_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability01_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "({[Skill01[0]]} * 0.2)"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "20%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability01_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability01_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_Ability01_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability01_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "WMonster_W1_Mecha_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1013014_Handling": {
      "fileName": "1013014_Handling",
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
              "value": "RO_015_Phase01"
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
              "optionName": "Decision",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Phase2InsertFlag",
                    "resetValue": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "AIFlag",
                      "compareType": "=",
                      "value2": 3,
                      "contextScope": "TargetEntity"
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 11,
                        "scope": "TargetEntity"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 12,
                        "scope": "TargetEntity"
                      }
                    ]
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Phase2InsertFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Phase2InsertFlag",
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Phase2InsertFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 11,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Phase2InsertFlag",
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AttackCount",
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill01",
                    "target": {
                      "name": "Select by Modifier Name",
                      "modifier": "Monster_W1_Mecha04_RL_BreakTarget",
                      "target": null
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Phase2InsertFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 12,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill07"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DormancyFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill05"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 4,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 5,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 4,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
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
                      "compareType": "<=",
                      "value2": 1
                    },
                    "passed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill04"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "AttackCount",
                      "compareType": "<",
                      "value2": 2,
                      "contextScope": "TargetEntity"
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
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
                        "passed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 2,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 3,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
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
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AttackCount",
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 5,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
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
                        "name": "Use Ability Option",
                        "skillName": "Skill04"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 5,
                    "scope": "TargetEntity"
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
                      "compareType": "<=",
                      "value2": 3
                    },
                    "passed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "AttackCount",
                      "compareType": "<",
                      "value2": 2,
                      "contextScope": "TargetEntity"
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
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
                        "passed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 2,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 3,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
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
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AttackCount",
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Define Custom Variable with Added Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AttackCount",
                    "context": "TargetEntity",
                    "value": 1,
                    "max": 2
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
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