const configAbility = {
  "fileName": "Cerydra_Cerydra_TechniqueInLevel",
  "childAbilityList": [
    "Cerydra_Cerydra_TechniqueInLevel"
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
      "modifier": "Cerydra_Maze_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Cerydra_Maze_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Update Ability Properties",
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Multiply(by 0 if undefined)"
                }
              ]
            },
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "skillType": "ControlSkill02",
              "forceAction": true,
              "castTarget": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "StageAbility_MazeStandard_EnterBattle_MarkTeamLeader"
                    }
                  }
                ]
              },
              "afterInjection": [],
              "runsAfterBattleEnd": true
            }
          ],
          "priorityLevel": -55
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}