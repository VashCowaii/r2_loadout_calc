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
                  "modifier": "<a class=\"gModGreen\" id=\"-1356425425\">Cyrene_Ability02_Bonus_Main</a>[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
                  "duration": {
                    "displayLines": "FieldLifeTime"
                  },
                  "valuePerStack": {
                    "MDF_OriginDamagePercentage": {
                      "displayLines": "0.24"
                    }
                  }
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