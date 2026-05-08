const configAbility = {
  "fileName": "Rappa_LocalPlayer_Rappa_Achievenment",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1581434995\">ADV_StageAbility_Maze_Achievenment</a>",
      "duration": {
        "operator": "Variables[0] (20) || Constants[0] (0.1) || SUB || RETURN",
        "displayLines": "(20 - 0.1)",
        "constants": [
          0.1
        ],
        "variables": [
          20
        ]
      }
    },
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "DV_AbilityEnd",
            "compareType": "=",
            "value2": 1
          }
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Rappa_00_Achievenment",
      "value": 1
    }
  ],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}