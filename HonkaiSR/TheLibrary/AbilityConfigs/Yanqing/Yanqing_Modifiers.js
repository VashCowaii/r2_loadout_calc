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
      "for": "<a class=\"gModGreen\" id=\"mod__-1599003499\">ADV_StageAbility_Maze_Yanqing</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__294496269\">Yanqing_Ability03_Bonus</a>[<span class=\"descriptionNumberColor\">Amidst the Raining Bliss</span>]",
      "stackType": "ReplaceByCaster",
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_CriticalBoost</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "Amidst the Raining Bliss",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CriticalBoost"
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
      ]
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
      "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CriticalBoost</span> and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_ALLCriticalDamage</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "Soulsteel Sync",
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
              "value": 1,
              "variableName": "MDF_isBeingHit"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_isBeingHit"
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
              "variableName": "Avatar_Yanqing_AggroBase",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">BaseAggroValue</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">BaseAggroValue</span>&nbsp;",
              "statValue": {
                "displayLines": "((-1 * Avatar_Yanqing_AggroBase) * 0.6)"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CriticalBoost"
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "displayLines": "(MDF_CriticaDamage + MDF_AddCriticalDamage)"
              },
              "variableName": "MDF_ALLCriticalDamage"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_ALLCriticalDamage"
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 0,
              "variableName": "MDF_AddCriticalDamage"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_StatusResistance"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AddSPRatio"
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
                      "displayLines": "(0.6 + YANQING_OBJECT_UNUSED_1)"
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
                  "priorityTag": "CharacterAttackFromSelf",
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
      ]
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
                      "displayLines": "MDF_CriticalBoost"
                    },
                    "MDF_CriticaDamage": {
                      "displayLines": "MDF_CriticaDamage"
                    },
                    "MDF_StatusResistance": {
                      "displayLines": "MDF_StatusResistance"
                    },
                    "MDF_AddSPRatio": {
                      "displayLines": "MDF_AddSPRatio"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}