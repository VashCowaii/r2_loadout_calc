const configAbility = {
  "fileName": "Misha_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-392065708\">ADV_Maze_Misha_TriggerDisappearEffect</a>",
      "tickTime": 14,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-58780956\">ADV_StageAbility_Maze_Misha_AttackBoost</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1970273784\">ADV_StageAbility_Maze_Misha</a>",
      "counter": 1,
      "stackType": "Merge",
      "modifierFlags": [
        "TimeLock"
      ]
    }
  ],
  "references": []
}