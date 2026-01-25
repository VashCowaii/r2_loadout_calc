const configAbility = {
  "fileName": "Sunday_Sunday_10_TechniqueInLevel",
  "childAbilityList": [
    "Sunday_Sunday_10_TechniqueInLevel"
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
      "modifier": "Sunday_10_Maze_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
      "description": "The next time this unit uses an ability on an ally target, the target's DMG dealt increases.",
      "type": "Other",
      "statusName": "The Glorious Mysteries"
    },
    {
      "name": "Modifier Construction",
      "for": "Sunday_10_Maze_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
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
                  "modifier": "Sunday_10_MazeBonus_ForCaster[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
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