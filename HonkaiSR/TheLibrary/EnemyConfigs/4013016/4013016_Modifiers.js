const configAbility = {
  "fileName": "4013016_Modifiers",
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
      ],
      "stackData": [],
      "latentQueue": [],
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
      ],
      "stackData": [],
      "latentQueue": []
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
                  "priorityTag": "MonsterChangePhase",
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
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck"
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
      ],
      "stackData": [],
      "latentQueue": []
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
              "priorityTag": "LevelPerformMonster",
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1110903121\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display</a>[<span class=\"descriptionNumberColor\">HP Count</span>]",
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
      "stackData": [
        "MDF_EntityScore"
      ],
      "latentQueue": [
        "FirstRound"
      ],
      "description": "Target is immediately knocked down after receiving <span class=\"descriptionNumberColor\">MDF_EntityScore</span> attack(s).",
      "type": "Other",
      "statusName": "HP Count"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__809636038\">MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_DeadFlag</a>",
      "stackData": [],
      "latentQueue": []
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
      "description": "Target is immediately knocked down after receiving <span class=\"descriptionNumberColor\">MDF_EntityScore</span> attack(s).",
      "type": "Other",
      "statusName": "HP Count"
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-55819136\">MModifier_Monster_W4_Claymore_LocalLegend_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
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
      ],
      "stackData": [],
      "latentQueue": [],
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1267990300\">Monster_W4_Claymore_LocalLegend_Attacker</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__544728190\">MModifier_Monster_W4_Claymore_LocalLegend_Part3</a>",
      "stackData": [],
      "latentQueue": [
        "FirstRound"
      ]
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}