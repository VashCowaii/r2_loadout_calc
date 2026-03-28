const configAbility = {
  "fileName": "Sparxie_Sparxie_TechniqueInLevel",
  "childAbilityList": [
    "Sparxie_Sparxie_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"1052455939\">Sparxie_Maze_Damage</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1052455939\">Sparxie_Maze_Damage</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Technique Modifies Current Wave"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "Toughness": null,
                    "Tags": null
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}