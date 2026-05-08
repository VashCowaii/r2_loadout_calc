const configAbility = {
  "fileName": "Feixiao_LocalPlayer_Feixiao_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "122004()",
      "duration": {
        "operator": "Variables[0] (20) || Constants[0] (0.5) || ADD || RETURN",
        "displayLines": "(20 + 0.5)",
        "constants": [
          0.5
        ],
        "variables": [
          20
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "122001(Avatar_Feixiao_00_SkillMazeSP)",
      "duration": {
        "operator": "Variables[0] (20) || RETURN",
        "displayLines": "20",
        "constants": [],
        "variables": [
          20
        ]
      },
      "valuePerStack": {
        "MDF_MoveSpeedRatio": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "In Motion (Overworld)",
            "flag": "FastRun"
          },
          {
            "name": "In Motion (Overworld)",
            "flag": "Run"
          },
          {
            "name": "In Motion (Overworld)",
            "flag": "Walk"
          }
        ]
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}