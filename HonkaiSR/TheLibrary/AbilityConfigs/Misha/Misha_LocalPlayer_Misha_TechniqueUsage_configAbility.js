const configAbility = {
  "fileName": "Misha_LocalPlayer_Misha_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Create Overworld Entity",
              "summonID": 13121
            },
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "projectileFinished": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "summoner": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "Summon_Target_Count",
                "summonID": 13121,
                "compareType": "<=",
                "value2": 0
              }
            },
            "Submit Technique Use"
          ]
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Create Overworld Entity",
              "summonID": 13121
            },
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "projectileFinished": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "summoner": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "Summon_Target_Count",
                "summonID": 13121,
                "compareType": "<=",
                "value2": 0
              }
            },
            "Submit Technique Use"
          ]
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}