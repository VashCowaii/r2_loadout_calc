const configAbility = {
  "fileName": "Lingsha_Lingsha_TechniqueInLevel",
  "childAbilityList": [
    "Lingsha_Lingsha_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"1869117592\">StageAbility_Maze_Lingsha_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1869117592\">StageAbility_Maze_Lingsha_Modifier</a>",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-637709984\">Lingsha_BreakDamageUp</a>[<span class=\"descriptionNumberColor\">Befog</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.25"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Lingsha_AttackTime + 3)"
                  },
                  "variableName": "Lingsha_AttackTime"
                },
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 11222,
                  "variables": {
                    "BattleEvent_Lingsha_BaseSpeed": {
                      "displayLines": "90"
                    },
                    "BattleEvent_Lingsha_AttackTime": {
                      "displayLines": "Lingsha_AttackTime"
                    },
                    "BattleEvent_Lingsha_IndexID": {
                      "displayLines": "BattleEvent_Lingsha_IndexID"
                    },
                    "BattleEvent_Lingsha_PointB3": 0
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "Lingsha_AttackTime"
                  },
                  "maximum": {
                    "displayLines": "5"
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 4
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1458980452\">Lingsha_Eidolon6_Listen</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Ember's Echo"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Fuyuan}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"210278197\">Lingsha_PointB3_OnListen</a>",
                      "valuePerStack": {
                        "MDF_HPRatio": {
                          "displayLines": "0.6"
                        },
                        "MDF_LifeTime": {
                          "displayLines": "2"
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Lingsha_BENum + 1)"
                  },
                  "variableName": "Lingsha_BENum"
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