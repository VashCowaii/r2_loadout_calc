const configAbility = {
  "fileName": "Hyacine_Hyacine_TechniqueInLevel",
  "childAbilityList": [
    "Hyacine_Hyacine_TechniqueInLevel"
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
      "modifier": "StageAbility_Maze_Hyacine_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Hyacine_Maze_AddMaxHp[<span class=\"descriptionNumberColor\">Day So Right, Life So Fine!</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_MaxHPAdd) || RETURN",
                "displayLines": "_MaxHPAdd",
                "constants": [],
                "variables": [
                  "_MaxHPAdd"
                ]
              }
            }
          ]
        }
      ],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">_MaxHPAdd</span>.",
      "type": "Buff",
      "statusName": "Day So Right, Life So Fine!"
    },
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Hyacine_Modifier",
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
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (600) || RETURN",
                    "displayLines": "600",
                    "constants": [],
                    "variables": [
                      600
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Hyacine_Maze_AddMaxHp[<span class=\"descriptionNumberColor\">Day So Right, Life So Fine!</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "_MaxHPAdd": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
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