const configAbility = {
  "fileName": "4033030_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-534426566\">W4_Griffin_01_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "AchievementFlag_W4_Griffin_01",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Battle was Victory",
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "AchievementFlag_W4_Griffin_01",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Just a Tiny Stain",
                      "desc": "Defeat the Dark Sun Gryphon without taking any damage from its summons",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1193354499\">Enemy_W4_Griffin_01_AI</a>",
      "execute": [
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
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
                "invertCondition": true
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__170082228\">Enemy_W4_Griffin_01_Ability03_Enhance</a>[<span class=\"descriptionNumberColor\">The Dead Winds Cometh</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "<=",
                "value2": 2,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Uses \"Carol of Heat Death\" in the next action.",
      "type": "Other",
      "effectName": "Enhance",
      "statusName": "The Dead Winds Cometh"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1018682036\">Enemy_W4_Griffin_01_Ability02_ShadowControl</a>[<span class=\"descriptionNumberColor\">Chaotic Order</span>]",
      "modifierFlags": [
        "MuteSpeed",
        "KeepOnDeathrattle"
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
              "name": "Add Ability",
              "abilityName": "Monster_W4_Shooter_01_Ability01_Part01_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_Shooter_01_Ability01_Part02_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_Shooter_01_Ability01_Camera_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_Shooter_01_Ability01_Abort"
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Shadow",
              "state": false
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_Attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_Attack) || Variables[1] ({[Skill02[1]]}) || Constants[0] (1) || SUB || MUL || RETURN",
                "displayLines": "(_Attack * ({[Skill02[1]]} - 1))",
                "constants": [
                  1
                ],
                "variables": [
                  "_Attack",
                  "{[Skill02[1]]}"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] ({[Skill02[0]]}) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "({[Skill02[0]]} - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "{[Skill02[0]]}"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                "displayLines": "{[Skill02[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[2]]}"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Can Take Action",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W4_Shooter_01_Ability01_Part01_Insert",
                      "priorityTag": "EnemyAttackFromOthers",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W4_Shooter_01_Ability01_Abort",
                      "priorityTag": "DefaultEnemy",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
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
                "name": "Modifier Has Flag",
                "flagName": "STAT_CTRL_Frozen_Effect"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "flagName": "STAT_CTRL_Frozen_Effect"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "\"Archer of the Dark Sun\" does not actively take action, and will only attack after the \"Dark Sun Gryphon\" that summoned this unit attacks. If this unit is under Crowd Control debuffs or Weakness Broken state at this point, this changes to dispelling the Crowd Control debuffs or Weakness Broken state on this unit.",
      "type": "Other",
      "statusName": "Chaotic Order"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1361739248\">Enemy_W4_Griffin_01_Ability02_ShadowControl_Ready</a>"
    }
  ],
  "references": []
}