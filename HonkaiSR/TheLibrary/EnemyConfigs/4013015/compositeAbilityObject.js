const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4013015,
  "trimCharacterName": 4013015,
  "abilityList": [
    "4013015_Modifiers",
    "4013015_Monster_W4_Claymore_LocalLegend_PassiveAbility_Insert",
    "4013015_Monster_W4_Claymore_LocalLegend_PassiveAbilityInitiate",
    "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Part02",
    "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Part01",
    "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part02",
    "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part01",
    "4013015_Monster_W4_Claymore_Ability02_Part02",
    "4013015_Monster_W4_Claymore_Ability02_Part01",
    "4013015_Monster_W4_Claymore_Ability01_Part02",
    "4013015_Monster_W4_Claymore_Ability01_Part01"
  ],
  "abilityObject": {
    "4013015_Modifiers": {
      "fileName": "4013015_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1956673523\">MModifier_Monster_W4_Claymore_LocalLegend03_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
          "description": "Charging. Dispelled upon Weakness Break.",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Charging",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: Light Characters}}.[[addMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
              "aliveOnly": "True",
              "haloStatus": true
            }
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                    "target": "{{EVENT[RoT] Light Praetor: Light Characters}}.[[addMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-195062538\">MModifier_Monster_W4_Claymore_Ability03_Aim_EndBreak</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase1"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1919435705\">Monster_W4_Claymore_LocalLegend03_PartController_LockHP02</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
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
                        "value1": "InsertCheck02",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "setValue": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "_DelayRatio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                        "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                        "constants": [],
                        "variables": [
                          "_DelayRatio",
                          "_DelayAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                      },
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                        "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                        "constants": [],
                        "variables": [
                          "_DelayRatio",
                          "_DelayAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
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
                        "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1663989605\">Monster_W4_Claymore_LocalLegend03_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
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
                            "name": "Stage ID",
                            "ID": 4260100,
                            "compareType": ">=",
                            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260106,
                            "compareType": "<=",
                            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_BattleTarget_LocalLegend_S4_1_Check",
                          "value": 1
                        }
                      ]
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "mode": "Inc"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                      },
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Claymore_LocalLegend03_PassiveAbility_Insert",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "setValue": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "_DelayRatio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                        "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                        "constants": [],
                        "variables": [
                          "_DelayRatio",
                          "_DelayAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                      },
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                        "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                        "constants": [],
                        "variables": [
                          "_DelayRatio",
                          "_DelayAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                    }
                  ]
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
                          "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260120,
                        "compareType": ">=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260126,
                        "compareType": "<=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      }
                    ]
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
                        "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__983561949\">W4_Claymore_LocalLegend_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BattleScoreCount"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "BattleScoreCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 12,
                  "maxValue": 9999,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Qliphoth Counter",
                          "desc": "In a battle of any difficulty against the Greatsword Guardian, ally characters must restore \"HP Count\" a total of #1 times.",
                          "rarity": "Low",
                          "params": [
                            12
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
          "for": "<a class=\"gModGreen\" id=\"mod__-468473895\">Monster_W4_Claymore_LocalLegend_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_LocalLegend_Ability06_Part01",
                  "priorityTag": "STAGE_Enemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-55819136\">MModifier_Monster_W4_Claymore_LocalLegend_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
          "description": "Target is immediately knocked down after receiving <span class=\"descriptionNumberColor\">MDF_EntityScore</span> attack(s).",
          "type": "Other",
          "statusName": "HP Count",
          "execute": [
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
                        "value1": "MDF_EntityScore",
                        "compareType": "<=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DamageLock",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Is Indirect DMG",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_MaxHp",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                          "value": "(MDF_MaxHp * 2)"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                          "value": 0
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_EntityScore",
                  "value": {
                    "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                    "displayLines": "MDF_EntityScore",
                    "constants": [],
                    "variables": [
                      "MDF_EntityScore"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1159891085\">Modifier_SpecialBattleAbility_DeathCountDown_Monster_CalNumber</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageLock",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "value1": "_EntityScore",
                        "compareType": ">=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "\"HP Count\" decreased"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_EntityScore",
                      "value": -1,
                      "max": 100
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DamageLock",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageLock",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageLock",
                  "value": 0
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1159891085\">Modifier_SpecialBattleAbility_DeathCountDown_Monster_CalNumber</a>",
              "parse": [
                {
                  "name": "Update Hit-Count Energy Bar",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "Left": {
                    "operator": "Variables[0] (_EntityScore) || RETURN",
                    "displayLines": "_EntityScore",
                    "constants": [],
                    "variables": [
                      "_EntityScore"
                    ]
                  },
                  "Past": {
                    "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                    "displayLines": "MDF_EntityScore",
                    "constants": [],
                    "variables": [
                      "MDF_EntityScore"
                    ]
                  },
                  "assignState": "True"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EntityScore",
                  "value": {
                    "operator": "Variables[0] (_EntityScore) || RETURN",
                    "displayLines": "_EntityScore",
                    "constants": [],
                    "variables": [
                      "_EntityScore"
                    ]
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_EntityScore",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 100,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1159891085\">Modifier_SpecialBattleAbility_DeathCountDown_Monster_CalNumber</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__809636038\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_DeadFlag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__842194945\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Servant</a>",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Enemy"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getSummoner]]"
                      },
                      "variableName": "MDF_AddStore",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_MonsterChangeCnt02",
                      "context": "TargetEntity",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "BattleScoreCount",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1311672660\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
          "description": "Target is immediately knocked down after receiving <span class=\"descriptionNumberColor\">MDF_EntityScore</span> attack(s).",
          "type": "Other",
          "statusName": "HP Count",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_TurnReset",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TurnReset",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEntityScore",
                      "value": {
                        "operator": "Variables[0] (_EntityScore) || RETURN",
                        "displayLines": "_EntityScore",
                        "constants": [],
                        "variables": [
                          "_EntityScore"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_EntityScore",
                            "compareType": "<=",
                            "value2": 1
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"809636038\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_DeadFlag</a>"
                          }
                        ]
                      },
                      {
                        "name": "Is Indirect DMG",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_MaxHp",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                          "value": "(MDF_MaxHp * 1000)"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                          "value": 0
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_EntityScore",
                  "value": {
                    "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                    "displayLines": "MDF_EntityScore",
                    "constants": [],
                    "variables": [
                      "MDF_EntityScore"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxEntityScore",
                  "value": {
                    "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                    "displayLines": "MDF_EntityScore",
                    "constants": [],
                    "variables": [
                      "MDF_EntityScore"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_AddStore"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastEntityScore",
                  "value": {
                    "operator": "Variables[0] (_EntityScore) || RETURN",
                    "displayLines": "_EntityScore",
                    "constants": [],
                    "variables": [
                      "_EntityScore"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Enemy"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_AddStore",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_MonsterChangeCnt02",
                      "context": "TargetEntity",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "BattleScoreCount",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_EntityScore",
                    "compareType": ">=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "\"HP Count\" decreased"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_EntityScore",
                      "value": -1,
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target is HP-Locked",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_EntityScore",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "consumePercent": 10
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_EntityScore",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "_MonsterChangeCnt02",
                  "context": "TargetEntity",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "BattleScoreCount",
                  "value": 1
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>",
              "parse": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EntityScore",
                  "value": {
                    "operator": "Variables[0] (_EntityScore) || RETURN",
                    "displayLines": "_EntityScore",
                    "constants": [],
                    "variables": [
                      "_EntityScore"
                    ]
                  }
                },
                {
                  "name": "Update Hit-Count Energy Bar",
                  "Left": {
                    "operator": "Variables[0] (MDF_EntityScore) || RETURN",
                    "displayLines": "MDF_EntityScore",
                    "constants": [],
                    "variables": [
                      "MDF_EntityScore"
                    ]
                  },
                  "Past": {
                    "operator": "Variables[0] (MDF_LastEntityScore) || RETURN",
                    "displayLines": "MDF_LastEntityScore",
                    "constants": [],
                    "variables": [
                      "MDF_LastEntityScore"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LastEntityScore",
                  "value": {
                    "operator": "Variables[0] (_EntityScore) || RETURN",
                    "displayLines": "_EntityScore",
                    "constants": [],
                    "variables": [
                      "_EntityScore"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variable": "_MonsterChangeCnt",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_LevelMinEntityScore",
                      "scope": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_EntityScore",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_LevelMinEntityScore) || RETURN",
                          "displayLines": "MDF_LevelMinEntityScore",
                          "constants": [],
                          "variables": [
                            "MDF_LevelMinEntityScore"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_MonsterChangeCnt",
                          "value": {
                            "operator": "Variables[0] (_EntityScore) || RETURN",
                            "displayLines": "_EntityScore",
                            "constants": [],
                            "variables": [
                              "_EntityScore"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_EntityScore",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 100,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (_MonsterChangeCnt02) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_MonsterChangeCnt02 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_MonsterChangeCnt02"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Character"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260010,
                            "compareType": ">=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260016,
                            "compareType": "<=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_BattleTarget_LocalLegend_S1_2_Check",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 4
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (_MonsterChangeCnt) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_MonsterChangeCnt - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_MonsterChangeCnt"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Character"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260010,
                            "compareType": ">=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260016,
                            "compareType": "<=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_BattleTarget_LocalLegend_S1_3_Check",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 4
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (_MonsterChangeCnt02) || RETURN",
                    "displayLines": "_MonsterChangeCnt02",
                    "constants": [],
                    "variables": [
                      "_MonsterChangeCnt02"
                    ]
                  },
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Character"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260010,
                            "compareType": ">=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260016,
                            "compareType": "<=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_BattleTarget_LocalLegend_S1_2_Check",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 4
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (_MonsterChangeCnt) || RETURN",
                    "displayLines": "_MonsterChangeCnt",
                    "constants": [],
                    "variables": [
                      "_MonsterChangeCnt"
                    ]
                  },
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Character"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260010,
                            "compareType": ">=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260016,
                            "compareType": "<=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_BattleTarget_LocalLegend_S1_3_Check",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 4
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_AddStore",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_EntityScore",
                      "value": 1
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"354133831\">WModifier_SpecialBattleAbility_DeathCountDown_CalNumber</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "MDF_AddStore",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1468533169\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Status</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                    "invertCondition": true
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                          "valuePerStack": {
                            "MDF_EntityScore": {
                              "operator": "Variables[0] (_SelfP2_LifeCount) || RETURN",
                              "displayLines": "_SelfP2_LifeCount",
                              "constants": [],
                              "variables": [
                                "_SelfP2_LifeCount"
                              ]
                            }
                          },
                          "casterAssign": "TargetSelf"
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
                    "value": "MonsterType_W4_Shooter_00"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Shooter_LifeCount) || RETURN",
                          "displayLines": "_Shooter_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Shooter_LifeCount"
                          ]
                        }
                      },
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
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_AML_Minion03_01"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Minion03_LifeCount) || RETURN",
                          "displayLines": "_Minion03_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Minion03_LifeCount"
                          ]
                        }
                      },
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
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_Scholar_00"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Scholar_LifeCount) || RETURN",
                          "displayLines": "_Scholar_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Scholar_LifeCount"
                          ]
                        }
                      },
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
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_Strongman_00"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Strongman_LifeCount) || RETURN",
                          "displayLines": "_Strongman_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Strongman_LifeCount"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
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
                        "value": "MonsterType_W4_Shooter_00"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                          "valuePerStack": {
                            "MDF_EntityScore": {
                              "operator": "Variables[0] (_Shooter_LifeCount) || RETURN",
                              "displayLines": "_Shooter_LifeCount",
                              "constants": [],
                              "variables": [
                                "_Shooter_LifeCount"
                              ]
                            }
                          },
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
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_AML_Minion03_01"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                          "valuePerStack": {
                            "MDF_EntityScore": {
                              "operator": "Variables[0] (_Minion03_LifeCount) || RETURN",
                              "displayLines": "_Minion03_LifeCount",
                              "constants": [],
                              "variables": [
                                "_Minion03_LifeCount"
                              ]
                            }
                          },
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
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_Scholar_00"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                          "valuePerStack": {
                            "MDF_EntityScore": {
                              "operator": "Variables[0] (_Scholar_LifeCount) || RETURN",
                              "displayLines": "_Scholar_LifeCount",
                              "constants": [],
                              "variables": [
                                "_Scholar_LifeCount"
                              ]
                            }
                          },
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
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_Strongman_00"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                          "valuePerStack": {
                            "MDF_EntityScore": {
                              "operator": "Variables[0] (_Strongman_LifeCount) || RETURN",
                              "displayLines": "_Strongman_LifeCount",
                              "constants": [],
                              "variables": [
                                "_Strongman_LifeCount"
                              ]
                            }
                          },
                          "casterAssign": "TargetSelf"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-707065504\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Status</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_MonsterChangeCnt",
                  "value": {
                    "operator": "Variables[0] (_Avatar_LifeCount) || RETURN",
                    "displayLines": "_Avatar_LifeCount",
                    "constants": [],
                    "variables": [
                      "_Avatar_LifeCount"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1311672660\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Avatar_LifeCount) || RETURN",
                          "displayLines": "_Avatar_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Avatar_LifeCount"
                          ]
                        },
                        "MDF_BattleTarget_S1_2_Param": {
                          "operator": "Variables[0] (_BattleTarget_S1_2_Param) || RETURN",
                          "displayLines": "_BattleTarget_S1_2_Param",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_S1_2_Param"
                          ]
                        },
                        "MDF_BattleTarget_S1_3_Param": {
                          "operator": "Variables[0] (_BattleTarget_S1_3_Param) || RETURN",
                          "displayLines": "_BattleTarget_S1_3_Param",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_S1_3_Param"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Memosprites}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"842194945\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Servant</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1311672660\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
                      "valuePerStack": {
                        "MDF_EntityScore": {
                          "operator": "Variables[0] (_Avatar_LifeCount) || RETURN",
                          "displayLines": "_Avatar_LifeCount",
                          "constants": [],
                          "variables": [
                            "_Avatar_LifeCount"
                          ]
                        },
                        "MDF_BattleTarget_S1_2_Param": {
                          "operator": "Variables[0] (_BattleTarget_S1_2_Param) || RETURN",
                          "displayLines": "_BattleTarget_S1_2_Param",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_S1_2_Param"
                          ]
                        },
                        "MDF_BattleTarget_S1_3_Param": {
                          "operator": "Variables[0] (_BattleTarget_S1_3_Param) || RETURN",
                          "displayLines": "_BattleTarget_S1_3_Param",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_S1_3_Param"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"842194945\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Servant</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-55819136\">MModifier_Monster_W4_Claymore_LocalLegend_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
          "description": "Charging. Dispelled upon Weakness Break.",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Charging",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1071596347\">Enemy_AML_Elite01_Aim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "aliveOnly": "True",
              "haloStatus": true
            }
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1071596347\">Enemy_AML_Elite01_Aim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-195062538\">MModifier_Monster_W4_Claymore_Ability03_Aim_EndBreak</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Departed State: End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1071596347\">Enemy_AML_Elite01_Aim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__544728190\">MModifier_Monster_W4_Claymore_LocalLegend_Part3</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__530468008\">Enemy_W4_Claymore_LocalLegend_Init_LockHp</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-479922792\">Monster_W4_Claymore_LocalLegend_PartController_LockHP</a>",
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
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Stage ID",
                            "ID": 4260010,
                            "compareType": ">=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260016,
                            "compareType": "<=",
                            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_BattleTarget_LocalLegend_S1_1_Check",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "MDF_AddStore",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_MonsterChangeCnt02",
                          "context": "TargetEntity",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "BattleScoreCount",
                          "value": 1
                        }
                      ]
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
                      "abilityName": "Monster_W4_Claymore_LocalLegend_PassiveAbility_Insert",
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
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getSummoner]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1357314148\">W4_Claymore_BattleScore3_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-584942636\">W4_Claymore_BattleScore3</a>",
          "execute": [
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 1,
                                "valueType": "Layer"
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 1,
                                "valueType": "Layer"
                              }
                            ]
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1357314148\">W4_Claymore_BattleScore3_Mark</a>"
                        },
                        {
                          "name": "Define Custom Variable with Team Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "variableName": "MDF_CountBefore",
                          "livingTargets": true
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CountBefore",
                        "compareType": ">=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1357314148\">W4_Claymore_BattleScore3_Mark</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 1,
                                "valueType": "Layer"
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1357314148\">W4_Claymore_BattleScore3_Mark</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 1,
                                "valueType": "Layer"
                              }
                            ]
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Team Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "variableName": "MDF_CountAfter",
                          "livingTargets": true
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CountBreak",
                      "value": {
                        "operator": "Variables[0] (MDF_CountBefore) || Variables[1] (MDF_CountAfter) || SUB || RETURN",
                        "displayLines": "(MDF_CountBefore - MDF_CountAfter)",
                        "constants": [],
                        "variables": [
                          "MDF_CountBefore",
                          "MDF_CountAfter"
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
                        "value1": "MDF_CountBreak",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Pankration's True Intention",
                              "desc": "Break at least #1 enemies' \"War Armor\" in a single attack",
                              "rarity": "Low",
                              "params": [
                                4
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1357314148\">W4_Claymore_BattleScore3_Mark</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CountBefore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CountAfter",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-120882999\">W4_Claymore_BattleScore2_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-568165017\">W4_Claymore_BattleScore2</a>",
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
                  "variableName": "W4_Claymore_00_BattleScore2_TargetCountBefore"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W4_Claymore_00_BattleScore2_TargetCountAfter"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill04"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variableName": "W4_Claymore_00_BattleScore2_TargetCountBefore",
                      "livingTargets": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-120882999\">W4_Claymore_BattleScore2_Mark</a>"
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
                    "name": "Skill Name",
                    "skillName": "Skill04"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-120882999\">W4_Claymore_BattleScore2_Mark</a>"
                            }
                          }
                        ]
                      },
                      "variableName": "W4_Claymore_00_BattleScore2_TargetCountAfter",
                      "livingTargets": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-120882999\">W4_Claymore_BattleScore2_Mark</a>"
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
                            "value1": "W4_Claymore_00_BattleScore2_TargetCountBefore",
                            "compareType": ">=",
                            "value2": 5
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W4_Claymore_00_BattleScore2_TargetCountBefore",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (W4_Claymore_00_BattleScore2_TargetCountAfter) || RETURN",
                              "displayLines": "W4_Claymore_00_BattleScore2_TargetCountAfter",
                              "constants": [],
                              "variables": [
                                "W4_Claymore_00_BattleScore2_TargetCountAfter"
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Diagonal March",
                              "desc": "When facing Furiae Praetor in battle, have at least #1 ally target(s) Distribute the \"Drowned in the Crimson Sea\" DMG, with none of them being defeated after the Distribution is complete",
                              "rarity": "Low",
                              "params": [
                                5
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
          "for": "<a class=\"gModGreen\" id=\"mod__-551387398\">W4_Claymore_BattleScore1</a>",
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
                  "scope": "TargetEntity",
                  "variableName": "W4_Claymore_00_BattleScore1_StoneShieldBreak"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W4_Claymore_00_BattleScore1_StoneShieldBreak",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Eternal Lance",
                          "desc": "In the battle against Furiae Praetor, deal the finishing blow as you destroy its \"War Armor\"",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
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
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W4_Claymore_00_BattleScore1_StoneShieldBreak",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W4_Claymore_00_BattleScore1_StoneShieldBreak",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__870917356\">Enemy_W4_Claymore_314070</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[getMemosprite]]"
                  },
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "characterName": "Castorice"
                  },
                  "noTargetFound": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[addBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1108004202\">GlobalAbility_Castorice_CD</a>",
                      "includeTargetsInLimbo": true,
                      "execute": [],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1809875879\">Enemy_W4_Claymore_314070_Sub</a>"
                        }
                      ]
                    }
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
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "characterName": "Castorice"
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[addBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1108004202\">GlobalAbility_Castorice_CD</a>",
                      "includeTargetsInLimbo": true,
                      "execute": [],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Key",
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
                            "value1": "MDF_Key",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1809875879\">Enemy_W4_Claymore_314070_Sub</a>"
                        }
                      ]
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
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "characterName": "Castorice"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Key",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1809875879\">Enemy_W4_Claymore_314070_Sub</a>"
                    }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Key",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1809875879\">Enemy_W4_Claymore_314070_Sub</a>"
                    }
                  ]
                }
              ]
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Key",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Key",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1809875879\">Enemy_W4_Claymore_314070_Sub</a>",
          "modifierFlags": [],
          "latentQueue": [
            "MDF_Key"
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
                    "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                    "invertCondition": true
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 5
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn Start [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
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
                  "value": 1.3
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": 150
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
                    "invertCondition": true,
                    "skillName": "Skill04"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "value": 4
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1108004202\">GlobalAbility_Castorice_CD</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
          "stackType": "Replace",
          "description": "Decreases DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageResistance</span>. Loses 1 stack of \"War Armor\" after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit and delaying their action. The ally unit that destroyed the \"War Armor\" will regenerate Energy. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn.",
          "type": "Other",
          "statusName": "War Armor",
          "addStacksPerTrigger": -1,
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                        "displayLines": "MDF_DamageResistance",
                        "constants": [],
                        "variables": [
                          "MDF_DamageResistance"
                        ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "assignState": "True",
                      "state": "Active"
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
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_Layer) || RETURN",
                            "displayLines": "MDF_Layer",
                            "constants": [],
                            "variables": [
                              "MDF_Layer"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "assignState": "True",
                          "state": "CoolDown"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_Layer) || RETURN",
                            "displayLines": "MDF_Layer",
                            "constants": [],
                            "variables": [
                              "MDF_Layer"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "assignState": "True",
                          "state": "Active"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1282910303\">Enemy_Heaven_StoneShieldController</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                        "invertCondition": true
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
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "invertCondition": true
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_DamageResistance": {
                                  "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                  "displayLines": "MDF_DamageResistance",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DamageResistance"
                                  ]
                                },
                                "MDF_CrackedEffect": {
                                  "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                  "displayLines": "MDF_CrackedEffect",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedEffect"
                                  ]
                                },
                                "MDF_CrackedDamage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              }
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
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": ">",
                                "value2": 0,
                                "valueType": "Layer"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
                                  ]
                                },
                                "valueType": "Layer"
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
                                "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                    "displayLines": "MDF_MaxLayer",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxLayer"
                                    ]
                                  },
                                  "valuePerStack": {
                                    "MDF_DamageResistance": {
                                      "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                      "displayLines": "MDF_DamageResistance",
                                      "constants": [],
                                      "variables": [
                                        "MDF_DamageResistance"
                                      ]
                                    },
                                    "MDF_CrackedEffect": {
                                      "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                      "displayLines": "MDF_CrackedEffect",
                                      "constants": [],
                                      "variables": [
                                        "MDF_CrackedEffect"
                                      ]
                                    },
                                    "MDF_CrackedDamage": {
                                      "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                      "displayLines": "MDF_CrackedDamage",
                                      "constants": [],
                                      "variables": [
                                        "MDF_CrackedDamage"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": {
                                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                    "displayLines": "MDF_MaxLayer",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxLayer"
                                    ]
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
                                "modifier": "<a class=\"gModGreen\" id=\"965106610\">Monster_W4_Nikadory_Passive</a>",
                                "invertCondition": true
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]",
                                "invertCondition": true
                              }
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
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 0,
                                "valueType": "Layer"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                                    "invertCondition": true
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                      "stackLimit": {
                                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                        "displayLines": "MDF_MaxLayer",
                                        "constants": [],
                                        "variables": [
                                          "MDF_MaxLayer"
                                        ]
                                      },
                                      "valuePerStack": {
                                        "MDF_DamageResistance": {
                                          "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                          "displayLines": "MDF_DamageResistance",
                                          "constants": [],
                                          "variables": [
                                            "MDF_DamageResistance"
                                          ]
                                        },
                                        "MDF_CrackedEffect": {
                                          "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                          "displayLines": "MDF_CrackedEffect",
                                          "constants": [],
                                          "variables": [
                                            "MDF_CrackedEffect"
                                          ]
                                        },
                                        "MDF_CrackedDamage": {
                                          "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                          "displayLines": "MDF_CrackedDamage",
                                          "constants": [],
                                          "variables": [
                                            "MDF_CrackedDamage"
                                          ]
                                        }
                                      },
                                      "addStacksPerTrigger": {
                                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                        "displayLines": "MDF_MaxLayer",
                                        "constants": [],
                                        "variables": [
                                          "MDF_MaxLayer"
                                        ]
                                      }
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageResistance": {
                      "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                      "displayLines": "MDF_DamageResistance",
                      "constants": [],
                      "variables": [
                        "MDF_DamageResistance"
                      ]
                    },
                    "MDF_CrackedEffect": {
                      "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                      "displayLines": "MDF_CrackedEffect",
                      "constants": [],
                      "variables": [
                        "MDF_CrackedEffect"
                      ]
                    },
                    "MDF_CrackedDamage": {
                      "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                      "displayLines": "MDF_CrackedDamage",
                      "constants": [],
                      "variables": [
                        "MDF_CrackedDamage"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-584942636\">W4_Claymore_BattleScore3</a>",
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": ">",
                        "value2": 0,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valuePercent": {
                            "operator": "Variables[0] (MDF_ModifySP) || RETURN",
                            "displayLines": "MDF_ModifySP",
                            "constants": [],
                            "variables": [
                              "MDF_ModifySP"
                            ]
                          },
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"965106610\">Monster_W4_Nikadory_Passive</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-95825091\">Monster_W4_Nikadory_BattleScore2Count1</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "UI Display Event (On Entity)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "popUpText": "Energy Regenerated",
                              "living": true
                            }
                          ]
                        },
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
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1735610792\">MModifier_Monster_AML_Minion03_01_Halo</a>[<span class=\"descriptionNumberColor\">War Song</span>]"
                              }
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
                          "assignState": "True",
                          "state": "CoolDown"
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "MDF_CrackedEffect"
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              },
                              "attackType": "Additional DMG"
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              },
                              "attackType": "Additional DMG"
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
                            "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": "<=",
                            "value2": 0,
                            "valueType": "Layer"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
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
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_CrackedDamageAfter) || RETURN",
                                  "displayLines": "MDF_CrackedDamageAfter",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamageAfter"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              },
                              "attackType": "Additional DMG"
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_CrackedDamageAfter) || RETURN",
                                  "displayLines": "MDF_CrackedDamageAfter",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamageAfter"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              },
                              "attackType": "Additional DMG"
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
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1631457444\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance_Nikadory</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_OriginalMaxLayer) || RETURN",
                        "displayLines": "MDF_OriginalMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_OriginalMaxLayer"
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": ">",
                            "value2": 0,
                            "valueType": "Layer"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_CurLayer",
                          "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_AddMaxLayer",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MDF_CurLayer) || Constants[0] (1) || SUB || RETURN",
                              "displayLines": "(MDF_CurLayer - 1)",
                              "constants": [
                                1
                              ],
                              "variables": [
                                "MDF_CurLayer"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_DamageResistance": {
                                  "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                  "displayLines": "MDF_DamageResistance",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DamageResistance"
                                  ]
                                },
                                "MDF_CrackedEffect": {
                                  "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                  "displayLines": "MDF_CrackedEffect",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedEffect"
                                  ]
                                },
                                "MDF_CrackedDamage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (MDF_AddMaxLayer) || INVERT || RETURN",
                                "displayLines": "-MDF_AddMaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_AddMaxLayer"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_DamageResistance": {
                                  "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                  "displayLines": "MDF_DamageResistance",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DamageResistance"
                                  ]
                                },
                                "MDF_CrackedEffect": {
                                  "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                  "displayLines": "MDF_CrackedEffect",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedEffect"
                                  ]
                                },
                                "MDF_CrackedDamage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Constants[0] (1) || Variables[0] (MDF_CurLayer) || SUB || RETURN",
                                "displayLines": "(1 - MDF_CurLayer)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_CurLayer"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              }
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
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OriginalMaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]",
                      "variable": "MDF_AddMaxLayer",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_AddMaxLayer"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || Variables[1] (MDF_AddMaxLayer) || ADD || RETURN",
                        "displayLines": "(MDF_MaxLayer + MDF_AddMaxLayer)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer",
                          "MDF_AddMaxLayer"
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": ">",
                            "value2": 0,
                            "valueType": "Layer"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DamageResistance": {
                              "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                              "displayLines": "MDF_DamageResistance",
                              "constants": [],
                              "variables": [
                                "MDF_DamageResistance"
                              ]
                            },
                            "MDF_CrackedEffect": {
                              "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                              "displayLines": "MDF_CrackedEffect",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedEffect"
                              ]
                            },
                            "MDF_CrackedDamage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                            "displayLines": "MDF_AddMaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_AddMaxLayer"
                            ]
                          }
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1631457444\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance_Nikadory</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OriginalMaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1631457444\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance_Nikadory</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]",
                      "variable": "MDF_AddMaxLayer",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_AddMaxLayer"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || Variables[1] (MDF_AddMaxLayer) || ADD || RETURN",
                        "displayLines": "(MDF_MaxLayer + MDF_AddMaxLayer)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer",
                          "MDF_AddMaxLayer"
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": ">",
                            "value2": 0,
                            "valueType": "Layer"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DamageResistance": {
                              "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                              "displayLines": "MDF_DamageResistance",
                              "constants": [],
                              "variables": [
                                "MDF_DamageResistance"
                              ]
                            },
                            "MDF_CrackedEffect": {
                              "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                              "displayLines": "MDF_CrackedEffect",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedEffect"
                              ]
                            },
                            "MDF_CrackedDamage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                            "displayLines": "MDF_AddMaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_AddMaxLayer"
                            ]
                          }
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-351944820\">MModifier_Monster_W4_Claymore_Ability04_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
          "useEntitySnapshot": true,
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
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
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                    "displayLines": "MDF_DamageTakenUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenOwnerUnselectable"
          ],
          "description": "Furiae Praetor's \"Drowned in the Crimson Sea\" attack.",
          "type": "Other",
          "effectName": "Distributed Attack",
          "statusName": "Forthcoming Strife"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
          "stackType": "ReplaceByCaster",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                  "onlyRemoveOwnersInstance": true
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Stealth",
                        "invertCondition": true
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
                    }
                  ]
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Stealth"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Stealth"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Stealth"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Stealth",
                        "invertCondition": true
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: End",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Stealth",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-195062538\">MModifier_Monster_W4_Claymore_Ability03_Aim_EndBreak</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase3"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
          "description": "Charging. Dispelled upon Weakness Break.",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Charging",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
              "aliveOnly": "True",
              "haloStatus": true
            }
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-195062538\">MModifier_Monster_W4_Claymore_Ability03_Aim_EndBreak</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-133295283\">Enemy_W4_Claymore_FantasticStory</a>"
        }
      ],
      "references": []
    },
    "4013015_Monster_W4_Claymore_LocalLegend_PassiveAbility_Insert": {
      "fileName": "4013015_Monster_W4_Claymore_LocalLegend_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "FirstRound",
          "value": 1
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]"
        },
        "Deleted bullshit",
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
          "modifier": "<a class=\"gModGreen\" id=\"544728190\">MModifier_Monster_W4_Claymore_LocalLegend_Part3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
          "valuePerStack": {
            "MDF_EntityScore": {
              "operator": "Variables[0] (_SelfP1_LifeCount) || RETURN",
              "displayLines": "_SelfP1_LifeCount",
              "constants": [],
              "variables": [
                "_SelfP1_LifeCount"
              ]
            }
          }
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-479922792\">Monster_W4_Claymore_LocalLegend_PartController_LockHP</a>"
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
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
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
          "set": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4013015_Monster_W4_Claymore_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4013015_Monster_W4_Claymore_LocalLegend_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"983561949\">W4_Claymore_LocalLegend_BattleScore1</a>",
          "casterAssign": "TargetSelf"
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
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 426005,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Strongman_LifeCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_10392) || RETURN",
                "displayLines": "UnusedUnderThisBase_10392",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_10392"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Scholar_LifeCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_10393) || RETURN",
                "displayLines": "UnusedUnderThisBase_10393",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_10393"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Minion03_LifeCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_10349) || RETURN",
                "displayLines": "UnusedUnderThisBase_10349",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_10349"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP1_LifeCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_10394) || RETURN",
                "displayLines": "UnusedUnderThisBase_10394",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_10394"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP2_LifeCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_10359) || RETURN",
                "displayLines": "UnusedUnderThisBase_10359",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_10359"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Shooter_LifeCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_10395) || RETURN",
                "displayLines": "UnusedUnderThisBase_10395",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_10395"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Avatar_LifeCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_10354) || RETURN",
                "displayLines": "UnusedUnderThisBase_10354",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_10354"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Avatar_LifeCount",
              "value": {
                "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
                "displayLines": "{[Skill05[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[4]]}"
                ]
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
                "name": "Stage ID",
                "ID": 4260010,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260011,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260040,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260041,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Strongman_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Scholar_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Minion03_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP1_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP2_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Shooter_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[5]]}"
                ]
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
                "name": "Stage ID",
                "ID": 4260012,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260042,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Strongman_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Scholar_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Minion03_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP1_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP2_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Shooter_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[5]]}"
                ]
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
                "name": "Stage ID",
                "ID": 4260013,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260043,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Strongman_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Scholar_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Minion03_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP1_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP2_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Shooter_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[5]]}"
                ]
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
                "name": "Stage ID",
                "ID": 4260014,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260044,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Strongman_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill04[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Scholar_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill04[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Minion03_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill04[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP1_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill04[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP2_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill04[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Shooter_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill04[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[5]]}"
                ]
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
                "name": "Stage ID",
                "ID": 4260015,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260045,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Strongman_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill05[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill05[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill05[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Scholar_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill05[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill05[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill05[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Minion03_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill05[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill05[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill05[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP1_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill05[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill05[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill05[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP2_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill05[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill05[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill05[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Shooter_LifeCount",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill05[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill05[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill05[5]]}"
                ]
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
                "name": "Stage ID",
                "ID": 4260016,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260046,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Strongman_LifeCount",
              "value": {
                "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                "displayLines": "{[Skill06[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Scholar_LifeCount",
              "value": {
                "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                "displayLines": "{[Skill06[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Minion03_LifeCount",
              "value": {
                "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                "displayLines": "{[Skill06[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP1_LifeCount",
              "value": {
                "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                "displayLines": "{[Skill06[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelfP2_LifeCount",
              "value": {
                "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                "displayLines": "{[Skill06[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Shooter_LifeCount",
              "value": {
                "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                "displayLines": "{[Skill06[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[5]]}"
                ]
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
          "modifier": "<a class=\"gModGreen\" id=\"-468473895\">Monster_W4_Claymore_LocalLegend_Status</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4013014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Enemy ID",
                "ID": 401301400,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
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
              "modifier": "<a class=\"gModGreen\" id=\"-479922792\">Monster_W4_Claymore_LocalLegend_PartController_LockHP</a>"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
            "displayLines": "{[Skill05[3]]}",
            "constants": [],
            "variables": [
              "{[Skill05[3]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID03) || RETURN",
                "displayLines": "SummonID03",
                "constants": [],
                "variables": [
                  "SummonID03"
                ]
              },
              "locationType": "AfterCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID03) || RETURN",
                "displayLines": "SummonID03",
                "constants": [],
                "variables": [
                  "SummonID03"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID01) || RETURN",
                "displayLines": "SummonID01",
                "constants": [],
                "variables": [
                  "SummonID01"
                ]
              },
              "locationType": "AroundCasterOnEdge"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID01) || RETURN",
                "displayLines": "SummonID01",
                "constants": [],
                "variables": [
                  "SummonID01"
                ]
              },
              "locationType": "AroundCasterOnEdge"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"530468008\">Enemy_W4_Claymore_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Part02": {
      "fileName": "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Military Might Unstoppable"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"530468008\">Enemy_W4_Claymore_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        },
        {
          "name": "Define Variable with Battle Goal Param",
          "goalID": 5001802,
          "variableName": "_BattleTarget_S1_2_Param"
        },
        {
          "name": "Define Variable with Battle Goal Param",
          "goalID": 5001803,
          "variableName": "_BattleTarget_S1_3_Param"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-707065504\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1468533169\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Status</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Part01": {
      "fileName": "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Part01",
      "childAbilityList": [
        "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Part01",
        "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Part02",
        "4013015_Monster_W4_Claymore_LocalLegend_Ability06_Camera"
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
          "ability": "Monster_W4_Claymore_LocalLegend_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part02": {
      "fileName": "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID04) || RETURN",
                      "displayLines": "SummonID04",
                      "constants": [],
                      "variables": [
                        "SummonID04"
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
            },
            "compareType": "=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID04) || RETURN",
                    "displayLines": "SummonID04",
                    "constants": [],
                    "variables": [
                      "SummonID04"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID01) || RETURN",
                      "displayLines": "SummonID01",
                      "constants": [],
                      "variables": [
                        "SummonID01"
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
            },
            "compareType": "=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                "displayLines": "{[Skill05[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID03) || RETURN",
                      "displayLines": "SummonID03",
                      "constants": [],
                      "variables": [
                        "SummonID03"
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
            },
            "compareType": "=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID03) || RETURN",
                    "displayLines": "SummonID03",
                    "constants": [],
                    "variables": [
                      "SummonID03"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID02) || RETURN",
                      "displayLines": "SummonID02",
                      "constants": [],
                      "variables": [
                        "SummonID02"
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
            },
            "compareType": "=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-247858425\">Monster_W4_Claymore_LocalLegend_LasterSummon</a>"
        }
      ]
    },
    "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part01": {
      "fileName": "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part01",
      "childAbilityList": [
        "4013015_Monster_W4_Claymore_Ability05_Camera",
        "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part01",
        "4013015_Monster_W4_Claymore_LocalLegend_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W4_Claymore_LocalLegend_Ability05_Part02",
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
    "4013015_Monster_W4_Claymore_Ability02_Part02": {
      "fileName": "4013015_Monster_W4_Claymore_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4013015_Monster_W4_Claymore_Ability02_Part01": {
      "fileName": "4013015_Monster_W4_Claymore_Ability02_Part01",
      "childAbilityList": [
        "4013015_Monster_W4_Claymore_Ability02_Camera",
        "4013015_Monster_W4_Claymore_Ability02_Part01",
        "4013015_Monster_W4_Claymore_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Sort by Physical Positioning",
                "byHighest": true
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "ability": "Monster_W4_Claymore_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "targetIsVariable": true
      },
      "references": []
    },
    "4013015_Monster_W4_Claymore_Ability01_Part02": {
      "fileName": "4013015_Monster_W4_Claymore_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4013015_Monster_W4_Claymore_Ability01_Part01": {
      "fileName": "4013015_Monster_W4_Claymore_Ability01_Part01",
      "childAbilityList": [
        "4013015_Monster_W4_Claymore_Ability01_Camera",
        "4013015_Monster_W4_Claymore_Ability01_Part01",
        "4013015_Monster_W4_Claymore_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Sort by Physical Positioning"
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "ability": "Monster_W4_Claymore_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "targetIsVariable": true
      },
      "references": []
    }
  }
}