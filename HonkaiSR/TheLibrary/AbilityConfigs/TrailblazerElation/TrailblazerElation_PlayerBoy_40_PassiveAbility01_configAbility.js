const configAbility = {
  "fileName": "TrailblazerElation_PlayerBoy_40_PassiveAbility01",
  "childAbilityList": [
    "TrailblazerElation_PlayerBoy_40_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2073920374\">PlayerBoy_40_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2121119521\">PlayerBoy_40_UltraSelect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1076174912\">PlayerBoy_40_Ability03_Preshow</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "On Cloud Nine"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-859642239\">PlayerBoy_40_Trace01</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Screw It, We Ball"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1220006046\">PlayerBoy_40_PointB2_CriticalChanceUp</a>",
          "duration": -1,
          "referenceModifier": "<a class=\"gModGreen\" id=\"-143754898\">MReference_CriticalChanceUp</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.15"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-909975096\">PlayerBoy_40_Trace02</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Aha, Sic 'Em!"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1160888084\">PlayerBoy_40_PointB3_P1Check</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_Rank01",
          "resetValue": 1,
          "scope": "ContextCaster"
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_Rank02",
          "resetValue": 1,
          "scope": "ContextCaster"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1940881761\">Player_40_PointB3_P1Mark</a>[<span class=\"descriptionNumberColor\">Aha, Sic 'Em!</span>]",
      "stackType": "Replace",
      "description": "The next time the Skill is used, additionally gains <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> point(s) of \"Certified Banger.\"",
      "type": "Buff",
      "statusName": "Aha, Sic 'Em!"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1160888084\">PlayerBoy_40_PointB3_P1Check</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1940881761\">Player_40_PointB3_P1Mark</a>[<span class=\"descriptionNumberColor\">Aha, Sic 'Em!</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "2"
                    }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1076174912\">PlayerBoy_40_Ability03_Preshow</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Ability Has Tag",
          "target": {
            "name": "Target Name",
            "target": "{{Player's Aim Target List}}.[[index0]]"
          },
          "tags": "ElationTime",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "displayLines": "-0.5"
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1424783580\">PlayBoy_40_ElationConvert_Sub</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              },
              "isRefresh": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2121119521\">PlayerBoy_40_UltraSelect</a>",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill03",
                "useActive": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Primary-Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}} - {{Player's Aim Primary-Target}}"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Primary-Target}}"
                        },
                        "entityType": "Memosprite"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}} - {{Player's Aim Primary-Target}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2073920374\">PlayerBoy_40_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has DMG Instance Tag",
                "tag": "Skill02_ElationDamage"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Target Has Lowest/Highest Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "partOf": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}"
                    },
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
                    "minOrMax": "Max"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_LightTeamMaxElationEcho",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                    }
                  ]
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Punchline</span>&nbsp;",
                      "value": "_LightTeamMaxElationEcho"
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
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "10"
              },
              "isFixed": "(Fixed)"
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "displayLines": "3"
              },
              "adjustment": "Add"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1930250757\">Player_40_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">On Cloud Nine</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Elation Boost",
      "statusName": "On Cloud Nine",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-909975096\">PlayerBoy_40_Trace02</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill03"
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "displayLines": "1"
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-859642239\">PlayerBoy_40_Trace01</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1475869784\">PlayerBoy_40_Trace01_Sub</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1475869784\">PlayerBoy_40_Trace01_Sub</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_CurrentAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_CurrentAttackConvert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "player_SkillTree_PointB1_AddedValue",
              "resetValue": {
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((((_CurrentAttack - _CurrentAttackConvert) - 1000) / 200)) * 0.1)"
              },
              "scope": "ContextCaster"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "player_SkillTree_PointB1_AddedValue",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "player_SkillTree_PointB1_AddedValue"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1930250757\">Player_40_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">On Cloud Nine</span>]"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "player_SkillTree_PointB1_AddedValue",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "0.6"
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0.6"
                      },
                      "variableName": "player_SkillTree_PointB1_AddedValue"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1930250757\">Player_40_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">On Cloud Nine</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "player_SkillTree_PointB1_AddedValue"
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
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1475869784\">PlayerBoy_40_Trace01_Sub</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1475869784\">PlayerBoy_40_Trace01_Sub</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}