const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_TechniqueInLevel_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "value": 1,
      "variableName": "MazeSkill_Triggered"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "1"
      },
      "variableName": "_can_continue"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_loop_count"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "1.5"
      },
      "variableName": "_current_chance"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>"
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "_can_continue",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "ContextAbility"
          },
          {
            "name": "Compare: Variable",
            "value1": "_loop_count",
            "compareType": "<",
            "value2": 99,
            "contextScope": "ContextAbility"
          }
        ]
      },
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_loop_count + 1)"
          },
          "variableName": "_loop_count"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0"
          },
          "variableName": "_can_continue"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                  },
                  {
                    "name": "Random Chance",
                    "chance": {
                      "displayLines": "0.5"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 2,
                  "variableName": "Result_Stack_Layer"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "Result_Stack_Layer"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Result_Stack_Layer + 1)"
                  },
                  "variableName": "Result_Stack_Layer"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
              "baseChance": {
                "displayLines": "_current_chance"
              },
              "stackLimit": {
                "displayLines": "Max_DOT_Layer"
              },
              "valuePerStack": {
                "Basic_DamagePercentage": {
                  "displayLines": "2.4"
                },
                "ExtraLayer_DamagePercentage": {
                  "displayLines": "0.12"
                },
                "Spread_DamagePercentage": {
                  "displayLines": "1.8"
                },
                "ThresholdLayer": {
                  "displayLines": "DOT_Layer_Threshold"
                },
                "DefenceIgnore": {
                  "displayLines": "0.2"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "Result_Stack_Layer"
              },
              "success": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "value": {
                    "displayLines": "1"
                  },
                  "variableName": "_can_continue"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_current_chance * 0.5)"
          },
          "variableName": "_current_chance"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_can_continue",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "ContextAbility"
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>",
      "latentQueue": [
        "MazeSkill_Triggered",
        "_can_continue"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>",
      "latentQueue": [
        "MazeSkill_Triggered",
        "_can_continue"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}