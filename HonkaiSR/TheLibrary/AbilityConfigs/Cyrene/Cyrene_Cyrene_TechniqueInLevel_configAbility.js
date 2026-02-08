const configAbility = {
  "fileName": "Cyrene_Cyrene_TechniqueInLevel",
  "childAbilityList": [
    "Cyrene_Cyrene_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"2066083865\">StageAbility_Maze_Cyrene_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2066083865\">StageAbility_Maze_Cyrene_Modifier</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1356425425\">Cyrene_Ability02_Bonus_Main</a>[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
                  "duration": {
                    "operator": "Variables[0] (FieldLifeTime) || RETURN",
                    "displayLines": "FieldLifeTime",
                    "constants": [],
                    "variables": [
                      "FieldLifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_OriginDamagePercentage": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    }
                  }
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