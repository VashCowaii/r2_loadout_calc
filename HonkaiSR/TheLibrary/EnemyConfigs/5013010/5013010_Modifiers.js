const configAbility = {
  "fileName": "5013010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__931132041\">MModifier_Monster_W4_Claymore_02_Ability05_Status_Part1</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1076182583\">MModifier_Monster_W4_Claymore_02_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": [
                      "Break",
                      "DisableAction",
                      "STAT_CTRL"
                    ],
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Lineup Position",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Index1"
                },
                {
                  "name": "Define Custom Variable with Lineup Position",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_Index2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Index1",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_Index2) || RETURN",
                      "displayLines": "MDF_Index2",
                      "constants": [],
                      "variables": [
                        "MDF_Index2"
                      ]
                    }
                  }
                },
                {
                  "name": "Random Event",
                  "odds": [
                    0.5,
                    0.5
                  ],
                  "execute": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Claymore_02_Ability01_Insert_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "priorityTag": "EnemyAttackFromOthers",
                      "targetState": "Mask_AliveOrLimbo",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "Break",
                        "DisableAction",
                        "STAT_CTRL"
                      ],
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Claymore_02_Ability02_Insert_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "priorityTag": "EnemyAttackFromOthers",
                      "targetState": "Mask_AliveOrLimbo",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "Break",
                        "DisableAction",
                        "STAT_CTRL"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": 100
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__604474914\">MModifier_Monster_W4_Claymore_02_Ability05_Status</a>[<span class=\"descriptionNumberColor\">Revelry</span>]",
      "stackType": "Merge",
      "modifierFlags": [
        "DisableAction",
        "IdleStun",
        "STAT_Stun_Effect",
        "STAT_CTRL"
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
              "modifier": "<a class=\"gModGreen\" id=\"931132041\">MModifier_Monster_W4_Claymore_02_Ability05_Status_Part1</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"931132041\">MModifier_Monster_W4_Claymore_02_Ability05_Status_Part1</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Index_Caster"
      ],
      "description": "Cannot take action. At the start of the turn, if \"%CasterName\" is not in Charging state, \"%CasterName\" will initiate a Sweep attack.",
      "type": "Debuff",
      "effectName": "Revelry",
      "statusName": "Revelry"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__135439563\">MModifier_Monster_W4_Claymore_02_Ability05_Speed</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1582140309\">MModifier_Monster_W4_Claymore_02_Ability03_Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-989097149\">MModifier_Monster_W4_Claymore_02_Ability03_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "Replace",
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
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1076182583\">MModifier_Monster_W4_Claymore_02_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "AIFlag",
              "value": 2
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1582140309\">MModifier_Monster_W4_Claymore_02_Ability03_Mark</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "assignState": "False"
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
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1582140309\">MModifier_Monster_W4_Claymore_02_Ability03_Mark</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "True",
              "state": "Active"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Trigger",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "adjustment": "Add"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-989097149\">MModifier_Monster_W4_Claymore_02_Ability03_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                    "displayLines": "{[Skill03[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[3]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                      "displayLines": "{[Skill03[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill03[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-541569260\">W4_Claymore_02_BattleScore1</a>"
                }
              ]
            },
            "Modifier Deletes Itself"
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
                    "value1": "MDF_Trigger",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Insert",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "DisableAction"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL"
                      }
                    ]
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
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Insert",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W4_Claymore_02_Ability042_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "Break",
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: Aborted",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Monster_W4_Claymore_02_Ability042_Part01"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Insert",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Trigger",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Insert",
              "value": 1
            },
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W4_Claymore_02_Ability042_Part01",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyBuffSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "Break",
                "DisableAction",
                "STAT_CTRL"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When taking the next action, uses \"Time to Rock!\" When Aha Instant is triggered or Weakness is broken and dispels Charging. After Aha Instant is triggered, grants the target team Punchline, and increases the DMG taken by this unit.",
      "type": "Other",
      "effectName": "Charging",
      "statusName": "Charging"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]",
      "description": "Using \"Get Hyped!\" produces a more Elated effect.",
      "type": "Other",
      "effectName": "Frenzied Rendition",
      "statusName": "Frenzied Rendition"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]",
      "description": "When Aha Instant is activated, this unit gains the \"Frenzied Rendition\" state, making the effects of \"Get Hyped!\" more Elated.",
      "type": "Other",
      "statusName": "Music Madness"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__527111621\">MModifier_Monster_W4_Claymore_02_Status</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]"
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
                "target": "{{Modifier Holder}}"
              },
              "revertDefault": true
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Wig",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]"
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
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: Start",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-491236403\">W4_Claymore_02_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Oil To The Flames",
                  "desc": "In a battle against \"Rocking Rebel,\" trigger the \"Get Hyped!\" Elation effect",
                  "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-541569260\">W4_Claymore_02_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Rock 'n' Roll Is Dead",
                  "desc": "In a battle against \"Rocking Rebel,\" activate Aha Instant to interrupt its Charging state",
                  "rarity": "Low"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "MDF_Trigger"
      ]
    }
  ],
  "references": []
}