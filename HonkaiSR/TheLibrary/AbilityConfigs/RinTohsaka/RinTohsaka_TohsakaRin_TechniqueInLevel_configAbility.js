const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_TechniqueInLevel",
  "childAbilityList": [
    "RinTohsaka_TohsakaRin_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"659020595\">StageAbility_Maze_TohsakaRin_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__659020595\">StageAbility_Maze_TohsakaRin_Modifier</a>",
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
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "EnergyBar_GemNum",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_GemNum_Shadow",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum_Shadow) || RETURN",
                        "displayLines": "EnergyBar_GemNum_Shadow",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum_Shadow"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_GemNum) || RETURN",
                        "displayLines": "EnergyBar_GemNum",
                        "constants": [],
                        "variables": [
                          "EnergyBar_GemNum"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -80
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