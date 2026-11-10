const configAbility = {
  "fileName": "Lynx_Lynx_TechniqueInLevel",
  "childAbilityList": [
    "Lynx_Lynx_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
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
      "modifier": "<a class=\"gModGreen\" id=\"-872415748\">StageAbility_Maze_Lynx_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-872415748\">StageAbility_Maze_Lynx_Modifier</a>",
      "execute": [
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
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Survival in the Extreme"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                      "duration": {
                        "displayLines": "(2 + 1)"
                      },
                      "valuePerStack": {
                        "MDF_HOT_HOTPercentage": {
                          "displayLines": "0.036"
                        },
                        "MDF_HOT_HealValue": {
                          "displayLines": "96"
                        },
                        "MDF_HOT_AggroUp_HOTPercentage": {
                          "displayLines": "0.044999998"
                        },
                        "MDF_HOT_AggroUp_HealValue": {
                          "displayLines": "120"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "valuePerStack": {
                        "MDF_HOT_HOTPercentage": {
                          "displayLines": "0.036"
                        },
                        "MDF_HOT_HealValue": {
                          "displayLines": "96"
                        },
                        "MDF_HOT_AggroUp_HOTPercentage": {
                          "displayLines": "0.044999998"
                        },
                        "MDF_HOT_AggroUp_HealValue": {
                          "displayLines": "120"
                        }
                      }
                    }
                  ]
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
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}