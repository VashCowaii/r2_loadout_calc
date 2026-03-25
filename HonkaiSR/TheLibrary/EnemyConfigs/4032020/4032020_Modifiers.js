const configAbility = {
  "fileName": "4032020_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
      "stackData": [
        "MDF_Skill01",
        "MDF_Skill01_Adjoin",
        "MDF_Skill02"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-589756154\">Enemy_W4_FireProwler_01_LoseHP</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_LoseHPRatio",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"429916549\">Enemy_W4_FireProwler_PersistLoseHPPreShow</a>",
                  "variable": "MDF_PersistLoseHP",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_PersistLoseHP"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PersistLoseHP",
                  "value": {
                    "operator": "Variables[0] (MDF_PersistLoseHP) || Variables[1] (MDF_MaxHP) || Variables[2] (MDF_LoseHPRatio) || MUL || ADD || RETURN",
                    "displayLines": "(MDF_PersistLoseHP + (MDF_MaxHP * MDF_LoseHPRatio))",
                    "constants": [],
                    "variables": [
                      "MDF_PersistLoseHP",
                      "MDF_MaxHP",
                      "MDF_LoseHPRatio"
                    ]
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"429916549\">Enemy_W4_FireProwler_PersistLoseHPPreShow</a>",
                  "variableName": "MDF_PersistLoseHP",
                  "value": {
                    "operator": "Variables[0] (MDF_PersistLoseHP) || RETURN",
                    "displayLines": "MDF_PersistLoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_PersistLoseHP"
                    ]
                  }
                },
                {
                  "name": "Update UI Preview",
                  "show": "Hide",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "previewType": "Persisting HP Loss",
                  "previewValue": {
                    "operator": "Variables[0] (MDF_PersistLoseHP) || INVERT || RETURN",
                    "displayLines": "-MDF_PersistLoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_PersistLoseHP"
                    ]
                  }
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "previewType": "Persisting HP Loss",
                  "previewValue": {
                    "operator": "Variables[0] (MDF_PersistLoseHP) || INVERT || RETURN",
                    "displayLines": "-MDF_PersistLoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_PersistLoseHP"
                    ]
                  }
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_LoseHPRatio) || RETURN",
                    "displayLines": "MDF_LoseHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_LoseHPRatio"
                    ]
                  },
                  "attackType": "Unknown",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1207820325\">Enemy_W4_FireProwler_01_DeathRattle</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Deathrattle",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "value1": "Deathrattle",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W4_FireProwler_01_DeathRattle",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Deathrattle",
                  "value": 1
                }
              ]
            },
            {
              "name": "Inject Ability Use",
              "conditionActive": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Parameter Target}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "compareType": ">",
                "value2": 0
              },
              "checkOverride": {
                "name": "Condition Priority",
                "overridePriority": "MonsterForceKill",
                "condition": {
                  "name": "Compare: Ability Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Parameter Target}}"
                  },
                  "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                  "compareType": "<=",
                  "value2": 0
                }
              },
              "abilityName": "Monster_W4_FireProwler_01_NoDeathRattle",
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-881069101\">Enemy_W4_FireProwler_01_Repeat_FantasticStory</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W4_FireProwler_00"
              },
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                "compareType": ">",
                "value2": 0,
                "valueType": "Layer"
              },
              "ifTargetFound": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "barType": "FireProwler",
                  "trigger": "NumChange_Decrease"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                  "addStacksPerTrigger": -1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "maximum": 0,
                      "assignState": "True",
                      "barType": "FireProwler",
                      "trigger": "Step_01"
                    }
                  ]
                }
              ]
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-104101548\">Enemy_W4_FireProwler_01_Repeat</a>[<span class=\"descriptionNumberColor\">Futility</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "MuteSpeed"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
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
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            },
            {
              "name": "Set Target Parameter",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "paramTarget": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MMonster_W4_FireProwler_01_Repeat_DynamicTarget"
            },
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Speed) || RETURN",
                "displayLines": "MDF_Speed",
                "constants": [],
                "variables": [
                  "MDF_Speed"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Resists Crowd Control debuffs. When \"%DynamicTargetName\" uses \"Demise's Storm\" or \"Fading Fate\" again, if this unit was summoned by this attack and is in the \"Mutual Sacrifice\" state, then this unit will attack together with \"%DynamicTargetName\".",
      "type": "Other",
      "statusName": "Futility"
    }
  ],
  "references": []
}