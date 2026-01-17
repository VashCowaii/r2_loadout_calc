const configAbility = {
  "fileName": "BlackSwan_BlackSwan_TechniqueInLevel",
  "childAbilityList": [
    "BlackSwan_BlackSwan_TechniqueInLevel",
    "BlackSwan_BlackSwan_TechniqueInLevel_Insert"
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
      "modifier": "StageAbility_Maze_BlackSwan_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Maze_StopAddDot"
    },
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_BlackSwan_Modifier",
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
                    "name": "Technique Modifies Current Wave"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MazeSkill_Triggered",
                    "compareType": "<",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "includeNonTargets": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BlackSwan_TechniqueInLevel_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "AvatarBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
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