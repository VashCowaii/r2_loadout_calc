const configAbility = {
  "fileName": "Gilgamesh_LocalPlayer_Gilgamesh_TechniqueUsageHit",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Overworld Attack Instance",
      "onAttack": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1014068292\">ADV_StageAbility_Maze_Gilgamesh_Flag</a>",
          "duration": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          }
        }
      ]
    }
  ],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}