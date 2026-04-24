const configAbility = {
  "fileName": "5023010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1550029509\">Modifier_Monster_XP_Elite02_03_PassiveEffect</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1942183745\">XP_Elite02_03_BattleScore1</a>",
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
              "variableName": "XP_Elite02_03_BattleScore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "UNKNOWN_OBJECT_BOOLEAN_828080"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "XP_Elite02_03_BattleScore1_Flag",
                  "value": 1,
                  "max": 100
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "XP_Elite02_03_BattleScore1_Flag",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Good Times Come to an End",
                          "desc": "In the battle against \"Joy Ascendant\", defeat #1 or more \"Joy Ascendant: Finale\" in a single attack",
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
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "XP_Elite02_03_BattleScore1_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "XP_Elite02_03_BattleScore1_Flag",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1851176516\">Modifier_Monster_XP_Elite02_03_ForceKill</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1061041544\">Monster_XP_Elite02_03_InitHP_LV2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Constants[0] (1) || Variables[0] (MDF_InitHP_LV2) || SUB || RETURN",
                "displayLines": "(1 - MDF_InitHP_LV2)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_InitHP_LV2"
                ]
              }
            },
            {
              "name": "Deal Toughness DMG",
              "valuePercentReduce": {
                "operator": "Constants[0] (1) || Variables[0] (MDF_InitStance_LV2) || SUB || RETURN",
                "displayLines": "(1 - MDF_InitStance_LV2)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_InitStance_LV2"
                ]
              },
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 7
            }
          ]
        }
      ],
      "stackData": [
        "MDF_InitHP_LV2",
        "MDF_InitStance_LV2"
      ],
      "latentQueue": [
        "SummonMonsterNum"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1111374401\">Monster_XP_Elite02_03_InitHP_LV1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Constants[0] (1) || Variables[0] (MDF_InitHP_LV1) || SUB || RETURN",
                "displayLines": "(1 - MDF_InitHP_LV1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_InitHP_LV1"
                ]
              }
            },
            {
              "name": "Deal Toughness DMG",
              "valuePercentReduce": {
                "operator": "Constants[0] (1) || Variables[0] (MDF_InitStance_LV1) || SUB || RETURN",
                "displayLines": "(1 - MDF_InitStance_LV1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_InitStance_LV1"
                ]
              },
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 7
            }
          ]
        }
      ],
      "stackData": [
        "MDF_InitHP_LV1",
        "MDF_InitStance_LV1"
      ],
      "latentQueue": [
        "SummonMonsterNum"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__529514456\">Monster_XP_Elite02_03_ChargeEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"529514456\">Monster_XP_Elite02_03_ChargeEffect</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2030183935\">Monster_XP_Elite02_03_Charge</a>[<span class=\"descriptionNumberColor\">Budding</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "Uses \"Euphoric Spiral\" in the next action.",
      "type": "Other",
      "effectName": "Budding",
      "statusName": "Budding"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1982460961\">Monster_XP_Elite02_03_PassiveAbility_Target</a>",
      "stackData": [],
      "latentQueue": [
        "SummonMonsterNum"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1535094540\">Modifier_Monster_XP_Elite02_03_SecondaryTarget</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
      "stackData": [],
      "latentQueue": [
        "SameMonsterNum",
        "Skill02_AssistCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__904098519\">Modifier_Monster_XP_Elite02_03_Deathrattle</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1550029509\">Modifier_Monster_XP_Elite02_03_PassiveEffect</a>"
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
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Elite02_03_Deathrattle_LV1",
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
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
                        "value1": null,
                        "compareType": "=",
                        "value2": 2,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_XP_Elite02_03_Deathrattle_LV2",
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Mark Entity For Immediate Death"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Action Choice Window [Owner]"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Action Completed [Owner]"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Basic ATK"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (Skill02_P4_BonusChance) || RETURN",
                      "displayLines": "Skill02_P4_BonusChance",
                      "constants": [],
                      "variables": [
                        "Skill02_P4_BonusChance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "Skill02_P4_BuffChance"
      ],
      "latentQueue": [
        "SameMonsterNum",
        "Skill02_AssistCount"
      ],
      "description": "Action delayed and loses Skill Point(s) if attacked by Joy Ascendant's ability \"Euphoric Spiral\" while possessing this effect. This effect is removed after using Basic ATK once, and has a high chance to gain additional Skill Point(s).",
      "type": "Other",
      "effectName": "Paramount Bliss",
      "statusName": "Paramount Bliss"
    }
  ],
  "references": []
}