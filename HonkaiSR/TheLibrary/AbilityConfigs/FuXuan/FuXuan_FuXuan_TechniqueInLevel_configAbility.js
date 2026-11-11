const configAbility = {
  "fileName": "FuXuan_FuXuan_TechniqueInLevel",
  "childAbilityList": [
    "FuXuan_FuXuan_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"-642485039\">StageAbility_Maze_FuXuan_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-642485039\">StageAbility_Maze_FuXuan_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Technique Modifies Current Wave",
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1150141703\">FuXuan_ListenLifeTime</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "Ability02_P2_DamageResistance": {
                      "displayLines": "UnusedUnderThisBase_6148"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1553530097\">FuXuan_HitDamageSplit</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
                  "valuePerStack": {
                    "MDF_SplitPercentage": {
                      "displayLines": "0.65"
                    },
                    "Ability02_P2_DamageResistance": {
                      "displayLines": "UnusedUnderThisBase_6148"
                    },
                    "AddSP": {
                      "displayLines": "5"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Liuren, the Sexagenary"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
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
    "primaryTarget": "{{Caster}}"
  }
}