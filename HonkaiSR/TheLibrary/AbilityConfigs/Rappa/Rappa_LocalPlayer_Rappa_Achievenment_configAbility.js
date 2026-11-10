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
        "displayLines": "(20 - 0.1)"
      }
    },
    {
      "name": "WAIT FOR",
      "conditions": {
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
      "value": 1,
      "variableName": "Rappa_00_Achievenment"
    }
  ],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}