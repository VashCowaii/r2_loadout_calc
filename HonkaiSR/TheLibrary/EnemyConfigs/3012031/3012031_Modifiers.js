const configAbility = {
  "fileName": "3012031_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1476787547\">Monster_W3_DeathPart_ListenDie</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BeingAttackCountDown",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CreatFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"504350425\">RefreshDamagePerHit</a>"
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "AttackData",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                  "value": "(MDF_DamagerPerHit * MDF_BeingAttackCountDown)"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BeingAttackCountDown",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT",
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">FinalDMGConstant</span>&nbsp;",
                      "value": "MDF_DamagerPerHit"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
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
              "name": "Inject Ability Use",
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
              "abilityName": "Monster_W3_DeathPart_SKill01_Insert",
              "priorityTag": "CharacterReviveSelf",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            },
            {
              "name": "Mark Entity For Immediate Death"
            }
          ]
        },
        {
          "eventTrigger": "Losing HP [Owner]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"504350425\">RefreshDamagePerHit</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_InBeingAttackFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Override HP Lost",
                  "setTo": {
                    "operator": "Variables[0] (MDF_DamagerPerHit) || RETURN",
                    "displayLines": "MDF_DamagerPerHit",
                    "constants": [],
                    "variables": [
                      "MDF_DamagerPerHit"
                    ]
                  }
                },
                {
                  "name": "Override HP Lost",
                  "setTo": {
                    "operator": "Variables[0] (MDF_DamagerPerHit) || Variables[1] (MDF_BeingAttackCountDown) || MUL || RETURN",
                    "displayLines": "(MDF_DamagerPerHit * MDF_BeingAttackCountDown)",
                    "constants": [],
                    "variables": [
                      "MDF_DamagerPerHit",
                      "MDF_BeingAttackCountDown"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BeingAttackCountDown",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Override HP Lost",
                  "setTo": {
                    "operator": "Variables[0] (MDF_DamagerPerHit) || RETURN",
                    "displayLines": "MDF_DamagerPerHit",
                    "constants": [],
                    "variables": [
                      "MDF_DamagerPerHit"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"504350425\">RefreshDamagePerHit</a>"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_BeingAttackCountDown",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InBeingAttackFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InBeingAttackFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Insert_Flag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Insert_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Insert_Flag"
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CreatFlag",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__504350425\">RefreshDamagePerHit</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_CreatFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CreatFlag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamagerPerHit",
                  "value": {
                    "operator": "Variables[0] (CEIL) || Variables[1] (MDF_MaxHP) || Variables[2] (MDF_ShowValue) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((MDF_MaxHP / MDF_ShowValue))",
                    "constants": [],
                    "variables": [
                      "CEIL",
                      "MDF_MaxHP",
                      "MDF_ShowValue"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShowValue"
      ],
      "latentQueue": [
        "Insert_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__488990783\">W3_DeathPart_Sgin_Modifier</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}"
                },
                "conditions": {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Insert_Flag"
      ]
    }
  ],
  "references": []
}