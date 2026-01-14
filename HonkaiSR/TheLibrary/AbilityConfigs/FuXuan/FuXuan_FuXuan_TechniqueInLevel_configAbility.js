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
      "to": "Caster",
      "modifier": "StageAbility_Maze_FuXuan_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_FuXuan_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Technique Modifies Current Wave"
                  },
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
                  "to": "Caster",
                  "modifier": "FuXuan_ListenLifeTime[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "Ability02_P2_DamageResistance": {
                      "operator": "Variables[0] (0) || RETURN",
                      "displayLines": "0",
                      "constants": [],
                      "variables": [
                        0
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates + Unselectable (Excluding Owner)",
                  "modifier": "FuXuan_HitDamageSplit[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
                  "valuePerStack": {
                    "MDF_SplitPercentage": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    },
                    "Ability02_P2_DamageResistance": {
                      "operator": "Variables[0] (0) || RETURN",
                      "displayLines": "0",
                      "constants": [],
                      "variables": [
                        0
                      ]
                    },
                    "AddSP": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
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
                      "to": "All Team Members(In Context, with Untargetable)",
                      "modifier": "FuXuan_Tree02[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}