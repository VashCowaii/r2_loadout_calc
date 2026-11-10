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
        "displayLines": "(20 + 0.5)"
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
        "displayLines": "20"
      },
      "valuePerStack": {
        "MDF_MoveSpeedRatio": {
          "displayLines": "0.5"
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