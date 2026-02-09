const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_25",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P1_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
        "displayLines": "#BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P2_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
        "displayLines": "#BattleEvent_P2_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P2_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P3_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
        "displayLines": "#BattleEvent_P3_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P3_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P4_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
        "displayLines": "#BattleEvent_P4_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P4_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_P5_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
        "displayLines": "#BattleEvent_P5_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P5_ADF"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"935421718\">Modifier_BattleEventAbility_Challenge_Month_25</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-593706658\">BattleEventAbility_Challenge_Month_BETag</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-782509985\">Modifier_BattleEventAbility_Challenge_Month_25_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Deathrattle",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Standard_Servant_Forcekill"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "DOT"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "BattleEvent_P1_ADF_Get"
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
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_Challenge_Deathrattle_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_Challenge_Month_25_Insert"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Character ID",
                      "ID": 800205000,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": null
                    }
                  },
                  "noTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Standard_Servant_Forcekill",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrRevivable",
                      "targetState": "Mask_AliveOrRevivable",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
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
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "BattleEventAbility_Challenge_Month_25_Insert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "valuePerStack": {
                "BattleEvent_P2_ADF_Set": {
                  "operator": "Variables[0] (BattleEvent_P2_ADF_Get) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF_Get",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF_Get"
                  ]
                },
                "BattleEvent_P3_ADF_Set": {
                  "operator": "Variables[0] (BattleEvent_P3_ADF_Get) || RETURN",
                  "displayLines": "BattleEvent_P3_ADF_Get",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P3_ADF_Get"
                  ]
                },
                "BattleEvent_P4_ADF_Set": {
                  "operator": "Variables[0] (BattleEvent_P4_ADF_Get) || RETURN",
                  "displayLines": "BattleEvent_P4_ADF_Get",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P4_ADF_Get"
                  ]
                },
                "BattleEvent_P5_ADF_Set": {
                  "operator": "Variables[0] (BattleEvent_P5_ADF_Get) || RETURN",
                  "displayLines": "BattleEvent_P5_ADF_Get",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P5_ADF_Get"
                  ]
                }
              },
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "description": "Takes <span class=\"descriptionNumberColor\">BattleEvent_P1_ADF</span> increased DMG from Basic ATKs and DoT effects. When this unit is defeated, if any enemies are in Bleed, Shock, Burn, or Wind Shear state, immediately deals DMG equal to <span class=\"descriptionNumberColor\">BattleEvent_P5_ADF</span> of the original DoT to all other enemies with a high chance to inflict Bleed, Shock, Burn, or Wind Shear on them for <span class=\"descriptionNumberColor\">BattleEvent_P3_ADF</span> turn(s).",
      "type": "Debuff",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__935421718\">Modifier_BattleEventAbility_Challenge_Month_25</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy Team is Dead",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "<=",
                    "value2": 4,
                    "livingTargets": true
                  }
                ]
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (800205000) || RETURN",
                        "displayLines": "800205000",
                        "constants": [
                          800205000
                        ],
                        "variables": []
                      },
                      "locationType": "LastDie"
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
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "TempHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "TempAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (TempHP) || Variables[1] (Hardlevel_HP) || SUB || RETURN",
                "displayLines": "(TempHP - Hardlevel_HP)",
                "constants": [],
                "variables": [
                  "TempHP",
                  "Hardlevel_HP"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Hardlevel_StatusResistance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectRESSUM</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (Hardlevel_StatusResistance) || Constants[1] (0.1) || ADD || SUB || DIV || Constants[0] (1) || SUB || RETURN",
                "displayLines": "((1 / (1 - (Hardlevel_StatusResistance + 0.1))) - 1)",
                "constants": [
                  1,
                  0.1
                ],
                "variables": [
                  "Hardlevel_StatusResistance"
                ]
              }
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 800205000,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-782509985\">Modifier_BattleEventAbility_Challenge_Month_25_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "valuePerStack": {
                    "BattleEvent_P1_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    },
                    "BattleEvent_P2_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF"
                      ]
                    },
                    "BattleEvent_P3_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P3_ADF) || RETURN",
                      "displayLines": "BattleEvent_P3_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P3_ADF"
                      ]
                    },
                    "BattleEvent_P4_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
                      "displayLines": "BattleEvent_P4_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P4_ADF"
                      ]
                    },
                    "BattleEvent_P5_ADF_Get": {
                      "operator": "Variables[0] (BattleEvent_P5_ADF) || RETURN",
                      "displayLines": "BattleEvent_P5_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P5_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            "Deleted bullshit",
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Constants[0] (800205000) || RETURN",
                    "displayLines": "800205000",
                    "constants": [
                      800205000
                    ],
                    "variables": []
                  },
                  "locationType": "Last"
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}