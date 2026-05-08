const configAbility = {
  "fileName": "TrailblazerElation_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1187997183\">PlayerBoy_40_ElationEchoPointBonus</a>",
      "stackType": "Multiple",
      "modifierFlags": [
        "ElationEchoPoint"
      ],
      "duration": 2,
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ElationEchoPoint) || RETURN",
                "displayLines": "ElationEchoPoint",
                "constants": [],
                "variables": [
                  "ElationEchoPoint"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1521577078\">PlayerBoy_40_Maze_ElationRatio</a>[<span class=\"descriptionNumberColor\">We Are So Back!</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "We Are So Back!",
      "statusName": "We Are So Back!",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGConverted</span>&nbsp;",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-557103509\">Player_40_Eidolon1_InsertActionSave</a>",
      "stackType": "ReplaceByCaster",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1380527904\">Temp_PlayerBoy_40_InsertActionSave</a>"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1380527904\">Temp_PlayerBoy_40_InsertActionSave</a>"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1380527904\">Temp_PlayerBoy_40_InsertActionSave</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1380527904\">Temp_PlayerBoy_40_InsertActionSave</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1221062210\">Player_40_Eidolon1_InsertActionSaveMark</a>"
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
                      "name": "Remove Events/Bonuses",
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
                      "punchlineFixed": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
                        ]
                      },
                      "execute": [
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1221062210\">Player_40_Eidolon1_InsertActionSaveMark</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-831933466\">Player_40_InsertElationAbilityShow</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            "Unknown EventType2 (Not always an error)[1 false][2 true][3_NAME Player]"
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "In Aha-Instant",
                    "invertCondition": true
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": "Add Target by Current Extra-Turn Source",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                "Unknown EventType2 (Not always an error)[2 true][3_NAME Player]"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "In Aha-Instant",
                    "invertCondition": true
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": "Add Target by Current Extra-Turn Source",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}