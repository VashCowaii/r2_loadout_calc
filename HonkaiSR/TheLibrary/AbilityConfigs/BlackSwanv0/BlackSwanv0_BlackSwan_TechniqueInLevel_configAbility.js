const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_TechniqueInLevel",
  "childAbilityList": [
    "BlackSwanv0_BlackSwan_TechniqueInLevel",
    "BlackSwanv0_BlackSwan_TechniqueInLevel_Insert"
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
      "modifier": "<a class=\"gModGreen\" id=\"1317961344\">StageAbility_Maze_BlackSwan_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__465925451\">M_BlackSwan_Maze_StopAddDot</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1317961344\">StageAbility_Maze_BlackSwan_Modifier</a>",
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