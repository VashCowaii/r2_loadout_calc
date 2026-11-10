const configAbility = {
  "fileName": "Tribbie_Tribbie_TechniqueInLevel",
  "childAbilityList": [
    "Tribbie_Tribbie_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"-888581137\">Tribbie_Maze_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-888581137\">Tribbie_Maze_Modifier</a>",
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1664293665\">Tribbie_SKL02_Bonus</a>[<span class=\"descriptionNumberColor\">Numinosity</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.24"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "3"
                  },
                  "variableName": "Energy_Layer"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "Energy_Layer"
                  },
                  "priorState": "Active"
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
    "primaryTarget": "{{All Team Members}}"
  }
}