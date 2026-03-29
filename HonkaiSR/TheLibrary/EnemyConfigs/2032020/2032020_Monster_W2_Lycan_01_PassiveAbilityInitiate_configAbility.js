const configAbility = {
  "fileName": "2032020_Monster_W2_Lycan_01_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1003509576\">Enemy_W2_Lycan_01_RageListener</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Wolf_MaxAttackCount",
      "value": {
        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
        "displayLines": "{[Skill02[2]]}",
        "constants": [],
        "variables": [
          "{[Skill02[2]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1905621078\">Enemy_W2_Lycan_RageControllerV2</a>",
      "valuePerStack": {
        "MaxAttackCount": {
          "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
          "displayLines": "{[Skill02[2]]}",
          "constants": [],
          "variables": [
            "{[Skill02[2]]}"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1949316860\">Enemy_W2_Lycan_01_RageStatusEnhance</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HealRatio) || RETURN",
                "displayLines": "MDF_HealRatio",
                "constants": [],
                "variables": [
                  "MDF_HealRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
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
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
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
                        "flagName": "Break",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Enters the Moon Rage state and can take an extra action every turn. After attacking a target, restores this unit's HP. This state will be removed when this unit is Weakness Broken.",
      "type": "Buff",
      "effectName": "Mending Attack",
      "statusName": "Moon Rage"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1326641454\">Enemy_W2_Lycan_01_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                "displayLines": "MDF_SpeedUpRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedUpRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HealRatio) || RETURN",
                "displayLines": "MDF_HealRatio",
                "constants": [],
                "variables": [
                  "MDF_HealRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
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
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
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
                        "flagName": "Break",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Enters the Moon Rage state and increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>. After attacking an allied target, restores this unit's HP. This state will be removed when this unit is Weakness Broken.",
      "type": "Buff",
      "effectName": "Mending Attack",
      "statusName": "Moon Rage"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1003509576\">Enemy_W2_Lycan_01_RageListener</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1729331430\">Enemy_W2_LycanKing_RageStatusEnhance</a>[<span class=\"descriptionNumberColor\">Lupine Lord's Majesty</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1757173024\">Enemy_W2_Lycan_01_MainStoryModuEnhance</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1949316860\">Enemy_W2_Lycan_01_RageStatusEnhance</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
                      "valuePerStack": {
                        "MDF_HealRatio": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1326641454\">Enemy_W2_Lycan_01_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpRatio": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "MDF_HealRatio": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
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
      "stackData": [],
      "latentQueue": []
    }
  ]
}