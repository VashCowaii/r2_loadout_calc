const configAbility = {
  "fileName": "TrailblazerElation_PlayerBoy_40_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "toRemove": [
        "STAT_CTRL"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterID": "1310 (Firefly)"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target List}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "failed": [
        {
          "name": "Define Custom Variable with Varying Data",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "variableName": "_SelectCharacterID",
          "value": "TargetCharacterID"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "displayLines": "_SelectCharacterID"
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1310
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 11407
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 11413
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1507
            }
          ]
        }
      ]
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "displayLines": "5"
      },
      "adjustment": "Add"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2144861411\">Player_40_Ultimate_Bonus</a>[<span class=\"descriptionNumberColor\">May the Trailblaze Fly You Starward</span>]",
      "duration": {
        "displayLines": "3"
      },
      "referenceModifier": "<a class=\"gModGreen\" id=\"1042665863\">MReference_CriticalDamageUp</a>",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.5"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Rank02",
        "compareType": ">=",
        "value2": 1,
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1890166672\">Player_40_Eidolon2ElationRatio</a>[<span class=\"descriptionNumberColor\">History in the Making...</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.12"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Ability Has Tag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "tags": "ElationTime"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Rank01",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variables": {
                "AddValue": {
                  "displayLines": "(10 + _Rank01_ElationEcho)"
                }
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_Rank01_ElationEcho",
              "scope": "ContextCaster"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-138559016\">Player_40_Eidolon1_Count</a>[<span class=\"descriptionNumberColor\">Believe In the Light</span>]"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variables": {
                "AddValue": {
                  "displayLines": "10"
                }
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1221062210\">Player_40_Eidolon1_InsertActionSaveMark</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-831933466\">Player_40_InsertElationAbilityShow</a>"
                },
                {
                  "name": "Inject Elation Skill Extra-Turn (Default priority)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "customSource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "punchlineFixed": {
                    "displayLines": "20"
                  },
                  "actionTag": null,
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-557103509\">Player_40_Eidolon1_InsertActionSave</a>"
                    }
                  ],
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1221062210\">Player_40_Eidolon1_InsertActionSaveMark</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-557103509\">Player_40_Eidolon1_InsertActionSave</a>"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Advance",
          "multiAdd": "-0.5"
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "displayLines": "_SelectCharacterID"
      },
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1507
        }
      ],
      "defaultEvents": []
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1890166672\">Player_40_Eidolon2ElationRatio</a>[<span class=\"descriptionNumberColor\">History in the Making...</span>]",
      "stackType": "Replace",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "_Rank02"
      ],
      "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Elation Boost",
      "statusName": "History in the Making...",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "displayLines": "0.12"
              },
              "isRefresh": true
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}