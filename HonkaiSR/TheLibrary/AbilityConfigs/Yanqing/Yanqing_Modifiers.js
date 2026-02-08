const configAbility = {
  "fileName": "Yanqing_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__294496269\">Yanqing_Ability03_Bonus</a>[<span class=\"descriptionNumberColor\">Amidst the Raining Bliss</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalBoost) || RETURN",
                "displayLines": "MDF_CriticalBoost",
                "constants": [],
                "variables": [
                  "MDF_CriticalBoost"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"294496269\">Yanqing_Ability03_Bonus</a>[<span class=\"descriptionNumberColor\">Amidst the Raining Bliss</span>]",
                  "function": "Add",
                  "value": 1,
                  "valueType": "Duration"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_CriticalBoost"
      ],
      "latentQueue": [],
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_CriticalBoost</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "Amidst the Raining Bliss"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-348622200\">Yanqing_BonusTargetMark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1361979350\">Yanqing_FrozenMark</a>[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "priorState": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isBeingHit",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isBeingHit",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "priorState": "Active"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Frost Favors the Brave"
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CriticalBoost</span>, CRIT DMG by <span class=\"descriptionNumberColor\">MDF_ALLCriticalDamage</span>, and Effect RES by <span class=\"descriptionNumberColor\">MDF_StatusResistance</span>."
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Avatar_Yanqing_AggroBase",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">BaseAggroValue</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseAggroValue</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || INVERT || Variables[0] (Avatar_Yanqing_AggroBase) || MUL || Constants[1] (0.6) || MUL || RETURN",
                "displayLines": "((-1 * Avatar_Yanqing_AggroBase) * 0.6)",
                "constants": [
                  1,
                  0.6
                ],
                "variables": [
                  "Avatar_Yanqing_AggroBase"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalBoost) || RETURN",
                "displayLines": "MDF_CriticalBoost",
                "constants": [],
                "variables": [
                  "MDF_CriticalBoost"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_ALLCriticalDamage",
              "value": {
                "operator": "Variables[0] (MDF_CriticaDamage) || Variables[1] (MDF_AddCriticalDamage) || ADD || RETURN",
                "displayLines": "(MDF_CriticaDamage + MDF_AddCriticalDamage)",
                "constants": [],
                "variables": [
                  "MDF_CriticaDamage",
                  "MDF_AddCriticalDamage"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ALLCriticalDamage) || RETURN",
                "displayLines": "MDF_ALLCriticalDamage",
                "constants": [],
                "variables": [
                  "MDF_ALLCriticalDamage"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_AddCriticalDamage",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Frost Favors the Brave"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                    "displayLines": "MDF_StatusResistance",
                    "constants": [],
                    "variables": [
                      "MDF_StatusResistance"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AddSPRatio) || RETURN",
                    "displayLines": "MDF_AddSPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AddSPRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1361979350\">Yanqing_FrozenMark</a>[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]",
                  "function": "Add",
                  "value": 1,
                  "valueType": "Duration"
                }
              ]
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
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_isBeingHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1361979350\">Yanqing_FrozenMark</a>[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill",
                  "Ultimate"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (0.6) || Variables[1] (YANQING_OBJECT_UNUSED_1) || ADD || RETURN",
                      "displayLines": "(0.6 + YANQING_OBJECT_UNUSED_1)",
                      "constants": [],
                      "variables": [
                        0.6,
                        "YANQING_OBJECT_UNUSED_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-348622200\">Yanqing_BonusTargetMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-348622200\">Yanqing_BonusTargetMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Yanqing_PassiveAbility01_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]"
        }
      ],
      "stackData": [
        "MDF_CriticalBoost",
        "MDF_CriticaDamage",
        "MDF_AddCriticalDamage"
      ],
      "latentQueue": [],
      "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CriticalBoost</span> and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_ALLCriticalDamage</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "Soulsteel Sync"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1507574257\">Yanqing_PassiveAbility_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1361979350\">Yanqing_FrozenMark</a>[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_CriticalBoost": {
                      "operator": "Variables[0] (MDF_CriticalBoost) || RETURN",
                      "displayLines": "MDF_CriticalBoost",
                      "constants": [],
                      "variables": [
                        "MDF_CriticalBoost"
                      ]
                    },
                    "MDF_CriticaDamage": {
                      "operator": "Variables[0] (MDF_CriticaDamage) || RETURN",
                      "displayLines": "MDF_CriticaDamage",
                      "constants": [],
                      "variables": [
                        "MDF_CriticaDamage"
                      ]
                    },
                    "MDF_StatusResistance": {
                      "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                      "displayLines": "MDF_StatusResistance",
                      "constants": [],
                      "variables": [
                        "MDF_StatusResistance"
                      ]
                    },
                    "MDF_AddSPRatio": {
                      "operator": "Variables[0] (MDF_AddSPRatio) || RETURN",
                      "displayLines": "MDF_AddSPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AddSPRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_CriticalBoost",
        "MDF_CriticaDamage",
        "MDF_StatusResistance",
        "MDF_AddSPRatio"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}