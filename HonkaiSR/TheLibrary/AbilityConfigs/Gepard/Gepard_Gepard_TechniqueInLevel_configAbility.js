const configAbility = {
  "fileName": "Gepard_Gepard_TechniqueInLevel",
  "childAbilityList": [
    "Gepard_Gepard_TechniqueInLevel"
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
      "modifier": "Gepard_Maze_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Gepard_Maze_Modifier",
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Avatar_Gepard_BaseDefenceValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Gepard_Ultimate_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_ShowValue": {
                      "operator": "Variables[0] (Avatar_Gepard_BaseDefenceValue) || Variables[1] (0.24) || MUL || Variables[2] (150) || ADD || RETURN",
                      "displayLines": "((Avatar_Gepard_BaseDefenceValue * 0.24) + 150)",
                      "constants": [],
                      "variables": [
                        "Avatar_Gepard_BaseDefenceValue",
                        0.24,
                        150
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