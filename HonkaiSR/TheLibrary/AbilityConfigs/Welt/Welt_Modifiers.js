const configAbility = {
  "fileName": "Welt_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1377119200\">ADV_StageAbility_Maze_Welt</a>",
      "counter": 1,
      "stackType": "Merge",
      "modifierFlags": [
        "Debuff"
      ],
      "onStack": [
        "Overworld stats adjustment(which we don't care about)"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1660387869\">Advanced_Welt_Trace01_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Retribution</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatioFinal</span>.",
      "type": "Buff",
      "effectName": "Retribution",
      "statusName": "Retribution",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_PropertyRatio * MDF_Layer)"
              },
              "variableName": "MDF_PropertyRatioFinal"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyRatioFinal"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-951760977\">Advanced_Welt_Trace01Listen</a>",
      "execute": [
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-37395626\">Advanced_Welt_Weightless</a>[<span class=\"descriptionNumberColor\">Weightless</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1660387869\">Advanced_Welt_Trace01_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Retribution</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "stackLimit": {
                    "displayLines": "10"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "0.1"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "30"
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1169637268\">Welt_Trace02_HitMark</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1689462102\">Welt_Eidolon1_HitMark</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__177845316\">Welt_Eidolon6_SlowCrit</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "SPD_DOWN"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                      "value": "0.3"
                    },
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "0.6"
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-37395626\">Advanced_Welt_Weightless</a>[<span class=\"descriptionNumberColor\">Weightless</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "DEF_DOWN",
        "SPD_DOWN",
        "RemoveWhenCasterDead"
      ],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, SPD decreases by <span class=\"descriptionNumberColor\">MDF_SpeedDownRatio</span>. When receiving an attack, action is delayed by <span class=\"descriptionNumberColor\">MDF_ActionDelayRatio</span>. This effect can be triggered <span class=\"descriptionNumberColor\">MDF_WeightlessTriggerCount</span> more time(s).",
      "type": "Debuff",
      "effectName": "Weightless",
      "statusName": "Weightless",
      "duration": 1,
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Action-End Phase",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "8"
              },
              "variableName": "MDF_WeightlessTriggerCount"
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyValue)"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_SpeedDownRatio)"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(0 - MDF_AllResDownValue)"
                  }
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, SPD decreases by <span class=\"descriptionNumberColor\">MDF_SpeedDownRatio</span>, and All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_AllResDownValue</span>. When receiving an attack, action is delayed by <span class=\"descriptionNumberColor\">MDF_ActionDelayRatio</span>. This effect can be triggered <span class=\"descriptionNumberColor\">MDF_WeightlessTriggerCount</span> more time(s)."
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_WeightlessTriggerCount",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": {
                      "displayLines": "(0 - 0.04)"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_WeightlessTriggerCount - 1)"
                  },
                  "variableName": "MDF_WeightlessTriggerCount"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1473917865\">Advanced_Welt_Trace03_AttackUp</a>[<span class=\"descriptionNumberColor\">Punishment</span>]",
      "stackType": "ReplaceByCaster",
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Punishment",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_BaseAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_BaseAttack * MDF_AttackAddRatio)"
              },
              "variableName": "MDF_AttackConvertValue"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_AttackConvertValue"
              },
              "isRefresh": true
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_BaseAttack",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_BaseAttack * MDF_AttackAddRatio)"
                  },
                  "variableName": "MDF_AttackConvertValue"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AttackConvertValue"
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__84847530\">Advanced_Welt_Trace03_StatusProbabilityShow</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1110048549\">Advanced_Welt_Trace03_Sub</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1110048549\">Advanced_Welt_Trace03_Sub</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "SkillTree_PointB3_StatusProbabilityValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((SkillTree_PointB3_StatusProbabilityValue - 0.4) / 0.1)) * 0.2)"
              },
              "variableName": "SkillTree_PointB3_StatusProbabilityValue"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SkillTree_PointB3_StatusProbabilityValue",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1473917865\">Advanced_Welt_Trace03_AttackUp</a>[<span class=\"descriptionNumberColor\">Punishment</span>]"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "0.8"
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0.8"
                      },
                      "variableName": "SkillTree_PointB3_StatusProbabilityValue"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1473917865\">Advanced_Welt_Trace03_AttackUp</a>[<span class=\"descriptionNumberColor\">Punishment</span>]",
                  "valuePerStack": {
                    "MDF_AttackAddRatio": {
                      "displayLines": "SkillTree_PointB3_StatusProbabilityValue"
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1110048549\">Advanced_Welt_Trace03_Sub</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-432037034\">Advanced_Welt_BPAbility_SpeedDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "SPD_DOWN"
      ],
      "description": "SPD decreases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Debuff",
      "effectName": "Slow",
      "statusName": "Slow",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyRatio)"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}