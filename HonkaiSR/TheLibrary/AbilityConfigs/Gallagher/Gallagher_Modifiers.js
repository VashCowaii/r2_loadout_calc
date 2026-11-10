const configAbility = {
  "fileName": "Gallagher_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__306900183\">ADV_StageAbility_Maze_Gallagher</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1129970541\">Gallagher_HealRatioAddedRatio</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__786124629\">Gallagher_Passive_Trace01</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1349711870\">Gallagher_CheckBreakDamageAddedRatioChange</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1349711870\">Gallagher_CheckBreakDamageAddedRatioChange</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CurrentBreakDamageAddedRatio",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_CurrentBreakDamageAddedRatio * 0.5)"
              },
              "variableName": "MDF_HealRatioAddedRatio"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HealRatioAddedRatio",
                "compareType": ">=",
                "value2": {
                  "displayLines": "0.75"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "0.75"
                  },
                  "variableName": "MDF_HealRatioAddedRatio"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1129970541\">Gallagher_HealRatioAddedRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_HealRatioAddedRatio"
                }
              }
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1349711870\">Gallagher_CheckBreakDamageAddedRatioChange</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1678215353\">MWGallagher_Ability11_AttackDownModifier</a>[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "description": "ATK decreases by <span class=\"descriptionNumberColor\">#Skill11_P2_AttackDownPercentage</span>.",
      "type": "Debuff",
      "effectName": "ATK Reduction",
      "statusName": "ATK Reduction",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "-0.15"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1869340095\">Gallagher_NormalAttckAlter_Enable</a>",
      "stackType": "Refresh",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill11"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1869340095\">Gallagher_NormalAttckAlter_Enable</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-606062756\">MWGallagher_Ability03_DeBonusModifier</a>[<span class=\"descriptionNumberColor\">Besotted</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "Increases the received Break DMG by <span class=\"descriptionNumberColor\">MDF_BreakDamagTaken</span>. And every time this unit gets attacked by characters, the attacker will restore <span class=\"descriptionNumberColor\">#SkillP01_P2_HealAmount</span> HP.",
      "type": "Debuff",
      "effectName": "Besotted",
      "statusName": "Besotted",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Break DMG"
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
                      "value": "MDF_BreakDamagTaken"
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
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0.12"
              },
              "variableName": "MDF_BreakDamagTaken"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "PointB3_Active",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1869340095\">Gallagher_NormalAttckAlter_Enable</a>"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill11"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healFlat": {
                            "displayLines": "640"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healFlat": {
                        "displayLines": "640"
                      }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1872837497\">MWGallagher_Ability02_StatusResModifier</a>[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Effect RES Boost",
      "statusName": "Effect RES Boost",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__72686487\">Gallagher_PointB3_AddFireBreakDamageModifier</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}